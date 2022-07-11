import yaml
import json
import os
import matplotlib.pyplot as plt
from matplotlib import font_manager
import seaborn as sns
from collections import defaultdict
from datetime import datetime
import matplotlib.dates as mdates
import math

sns.set_style('darkgrid')
font_path = 'font/SourceHanSansCN-Regular.otf'
font_manager.fontManager.addfont(font_path)
prop = font_manager.FontProperties(fname=font_path)
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = prop.get_name()
plt.rcParams["axes.unicode_minus"] = False
plt.rcParams['date.converter'] = 'concise'

def get_model_list(main_path):
    """
    Get a model list from all yaml files in `main_path`.
    """
    files = os.listdir(main_path)
    model_list = list()
    
    for file in files:
        f = open(os.path.join(main_path, file), 'r')
        data = yaml.load(f.read(), Loader=yaml.FullLoader)
        model_list.append(data)
        f.close()
    
    model_list = sorted(model_list, key=lambda x: (x['release_date'], x['name']))
    
    return model_list


def write_to_jsonl(model_list, output_file):
    """
    Write the model_list to a jsonl file.
    """
    f = open(output_file, 'w')
    for model in model_list:
        f.write(json.dumps(model, ensure_ascii=False) + '\n')
    f.close()

def get_lang(language):
    """
    Get language shown in the diagram
    """
    
    if 'English' in language:
        lang = 'English'
    elif 'Chinese' in language:
        lang = 'Chinese'
    elif 'Multilingual' in language:
        lang = 'Multilingual'
    else:
        lang = 'Others'

    return lang

def plot_scatter(model_list):
    """
    Draw scatter diagram.
    """

    fig = plt.figure(dpi=300, figsize=(12, 6))
    parameters = defaultdict(list)
    dates = defaultdict(list)
    names = defaultdict(list)
    color_map = {"English": "green", "Chinese": "orange", "Multilingual": "blue", "Others": "yellow"}

    for model in model_list:
        # we plot two points if a model have both dense and MoE variants
        for variant in ['dense', 'MoE']:
            if 'parameters_{}'.format(variant) in model:
                lang = get_lang(model['language'])
                dates[lang].append(model['release_date'])

                param_list = sorted(list(map(lambda x: float(x.split('~')[-1].split('B')[0]), model['parameters_{}'.format(variant)])))
                parameters[lang].append(param_list[-1])
                names[lang].append(model['name'] + ('(MoE)' if variant == 'MoE' else '') if parameters[lang][-1] >= 100 else '')
                
    for lang in  dates.keys():
        x = list(map(lambda x: datetime.strptime(x, "%Y/%m/%d"), dates[lang]))
        plt.scatter(x, parameters[lang], s=list(map(lambda x: x + 10, parameters[lang])), c=color_map[lang], marker='o', alpha=0.7, label=lang)
    
        for i, label in enumerate(names[lang]):
            plt.text(x[i], parameters[lang][i], label, rotation=30, fontsize=7)
    
    legend = plt.legend(loc='upper right')
    for handle in legend.legendHandles:
        handle.set_sizes([15.0])
    plt.ylim(-100, 2000)
    plt.gca().xaxis.set_major_locator(mdates.AutoDateLocator(minticks=12, maxticks=20))
    plt.xlabel('Date')
    plt.ylabel('Parameters (B)')
    plt.savefig('figures/scatter_plot.png', dpi=fig.dpi, bbox_inches='tight')

if __name__ == "__main__":
    main_path = './big_models'
    model_list = get_model_list(main_path)
    
    output_file = 'all_models.jsonl'
    write_to_jsonl(model_list, output_file)

    plot_scatter(model_list)
