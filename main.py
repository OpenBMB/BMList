import yaml
import json
import os
import matplotlib.pyplot as plt
from matplotlib import font_manager
import seaborn as sns
from collections import defaultdict
from datetime import datetime
import matplotlib.dates as mdates

sns.set_style("darkgrid")
font_path = "font/SourceHanSansCN-Regular.otf"
font_manager.fontManager.addfont(font_path)
prop = font_manager.FontProperties(fname=font_path)
plt.rcParams["font.family"] = "sans-serif"
plt.rcParams["font.sans-serif"] = prop.get_name()
plt.rcParams["axes.unicode_minus"] = False
plt.rcParams["date.converter"] = "concise"


def get_model_list(main_path):
    """
    Get a model list from all yaml files in `main_path`.
    """
    files = os.listdir(main_path)
    model_list = list()

    for file in files:
        f = open(os.path.join(main_path, file), "r")
        data = yaml.load(f.read(), Loader=yaml.FullLoader)
        model_list.append(data)
        f.close()

    model_list = sorted(model_list, key=lambda x: (x["release_date"], x["name"]))

    return model_list


def write_to_json(model_list, output_file):
    """
    Write the model_list to a json file.
    """
    f = open(output_file, "w")
    f.write(json.dumps(model_list, ensure_ascii=False, indent=4) + "\n")
    f.close()
    print("[DONE] Write to {}.".format(output_file))


def get_identifier(model):
    """
    Get identifier shown in the diagram
    """
    
    domain = model["domain"]
    if "Text" in domain:
        language = model["language"]
        if "English" in language:
            identifier = "Text (English)"
        elif "Chinese" in language:
            identifier = "Text (Chinese)"
        elif "Multilingual" in language:
            identifier = "Text (Multilingual)"
        else:
            identifier = "Text (Others)"
    else:
        identifier = domain[0]

    return identifier


def plot_scatter(model_list):
    """
    Draw scatter diagram according to the number of parameters.
    """

    fig = plt.figure(dpi=300, figsize=(12, 6))
    parameters = defaultdict(list)
    dates = defaultdict(list)
    names = defaultdict(list)
    color_map = {
        "Text (English)": "#459F48",
        "Text (Chinese)": "#F8B947",
        "Text (Multilingual)": "#2F2EFC",
        "Text (Others)": "#FC832E",
        "Vision": "#953ACE",
        "Audio": "#E63D2A",
        "Code": "#A57041",
        "Protein": "#4BB2EE"
    }

    last_updated = model_list[0]["last_updated"]
    for model in model_list[1:]:
        # we plot two points if a model have both dense and MoE variants
        for variant in ["dense", "MoE"]:
            if "parameters_{}".format(variant) in model:
                id = get_identifier(model)
                dates[id].append(model["release_date"])

                param_list = sorted(
                    list(
                        map(
                            lambda x: float(x.split("~")[-1].split("B")[0]),
                            model["parameters_{}".format(variant)],
                        )
                    )
                )
                parameters[id].append(param_list[-1])

    for id in color_map.keys():
        x = list(map(lambda x: datetime.strptime(x, "%Y/%m/%d"), dates[id]))
        y = parameters[id]

        plt.scatter(
            x,
            y,
            s=list(map(lambda x: x + 10, y)),
            c=[color_map[id]],
            marker="o",
            alpha=0.7,
            label=id,
        )

        for i, label in enumerate(names[id]):
            plt.text(x[i], y[i], label, rotation=30, fontsize=6)

    legend = plt.legend(loc="upper left")
    for handle in legend.legendHandles:
        handle.set_sizes([10.0])

    plt.yscale("log", base=2)
    plt.tight_layout()
    plt.gca().xaxis.set_major_locator(mdates.AutoDateLocator(minticks=12, maxticks=20))
    plt.margins(y=0.2)
    plt.ylabel("Billion Parameters")
    plt.text(0.5, 0.96, f"Last Updated: {last_updated}\n@OpenBMB", fontsize=6, c='gray', alpha=0.4, transform=plt.gca().transAxes)

    plt.savefig("figures/scatter.png", dpi=fig.dpi, bbox_inches="tight")
    print("[DONE] Draw Scatter diagram.")


def plot_bar(model_list):
    """
    Draw bar chart w.r.t affiliations or time.
    """

    cnt_affiliation = defaultdict(int)
    params_affiliation = defaultdict(int)
    cnt_time = defaultdict(int)
    params_time = defaultdict(int)

    last_updated = model_list[0]["last_updated"]
    for model in model_list[1:]:
        affiliation_list = model["affiliation"]

        param_list = list()
        if "parameters_MoE" in model:
            param_list += model["parameters_MoE"]
        if "parameters_dense" in model:
            param_list += model["parameters_dense"]
        param_list = sorted(
            list(map(lambda x: float(x.split("~")[-1].split("B")[0]), param_list))
        )

        for affiliation in affiliation_list:
            if affiliation == "Facebook" or affiliation == "Meta":
                affiliation = "Meta(Facebook)"

            cnt_affiliation[affiliation] += 1
            params_affiliation[affiliation] += param_list[-1]  # only count the largest model
        
        date = model["release_date"]
        y_m = date.rsplit('/', 1)[0]
        cnt_time[y_m] += 1
        params_time[y_m] += param_list[-1]  # only count the largest model

    x, y_cnt = list(zip(*sorted(cnt_affiliation.items(), key=lambda x: x[1], reverse=True)))
    fig_cnt = plt.figure(dpi=300, figsize=(12, 6))
    plt.bar(x, y_cnt, width=0.4, alpha=0.8, color="blue")
    plt.xticks(rotation=90)
    plt.ylabel("# Models")
    plt.text(0.01, 0.96, f"Last Updated: {last_updated}\n@OpenBMB", fontsize=6, c='gray', alpha=0.4, transform=plt.gca().transAxes)
    plt.savefig("figures/affiliation_cnt.png", dpi=fig_cnt.dpi, bbox_inches="tight")
    print("[DONE] Draw bar chart (X: affiliation, Y: number of models).")

    x, y_cnt = list(zip(*sorted(cnt_time.items(), key=lambda x: x[0], reverse=False)))
    fig_cnt = plt.figure(dpi=300, figsize=(12, 6))
    plt.bar(x, y_cnt, width=0.4, alpha=0.8, color="blue")
    plt.xticks(rotation=90)
    plt.ylabel("# Models")
    plt.text(0.01, 0.96, f"Last Updated: {last_updated}\n@OpenBMB", fontsize=6, c='gray', alpha=0.4, transform=plt.gca().transAxes)
    plt.savefig("figures/time_cnt.png", dpi=fig_cnt.dpi, bbox_inches="tight")
    print("[DONE] Draw bar chart (X: time, Y: number of models).")   

    fig_params = plt.figure(dpi=300, figsize=(12, 6))
    x, y_params = list(
        zip(*sorted(params_affiliation.items(), key=lambda x: x[1], reverse=True))
    )
    plt.bar(x, y_params, width=0.4, alpha=0.8, color="blue")
    plt.yscale("log", base=2)
    plt.xticks(rotation=90)
    plt.ylabel("Billion Parameters")
    plt.text(0.01, 0.96, f"Last Updated: {last_updated}\n@OpenBMB", fontsize=6, c='gray', alpha=0.4, transform=plt.gca().transAxes)
    plt.savefig("figures/affiliation_params.png", dpi=fig_params.dpi, bbox_inches="tight")
    print("[DONE] Draw bar chart (X: affiliation, Y: number of parameters).")

    fig_params = plt.figure(dpi=300, figsize=(12, 6))
    x, y_params = list(
        zip(*sorted(params_time.items(), key=lambda x: x[0], reverse=False))
    )
    plt.bar(x, y_params, width=0.4, alpha=0.8, color="blue")
    plt.yscale("log", base=2)
    plt.xticks(rotation=90)
    plt.ylabel("Billion Parameters")
    plt.text(0.01, 0.96, f"Last Updated: {last_updated}\n@OpenBMB", fontsize=6, c='gray', alpha=0.4, transform=plt.gca().transAxes)
    plt.savefig("figures/time_params.png", dpi=fig_params.dpi, bbox_inches="tight")
    print("[DONE] Draw bar chart (X: time, Y: number of parameters).")

if __name__ == "__main__":
    main_path = "./big_models"
    json_file = "all_models.json"
    with open(json_file, 'r') as f:
        old_model_list = json.load(f)[1:]
    
    model_list = get_model_list(main_path)

    if model_list != old_model_list:
        print("The model list is updated. Start to regenerate files.")
        # add last updated date
        model_list =  [{"last_updated": datetime.now().strftime("%Y/%m/%d")}] + model_list
        write_to_json(model_list, json_file)

        if not os.path.exists("figures"):
            os.mkdir("figures")
        plot_scatter(model_list)
        plot_bar(model_list)
