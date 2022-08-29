import yaml
import os
import json
import jsonschema


def validate_yaml_files(main_path, schema):
    """
    validate yaml files in `main_path`
    """
    files = os.listdir(main_path)

    for file in files:
        f = open(os.path.join(main_path, file), "r")
        data = yaml.load(f.read(), Loader=yaml.FullLoader)
        jsonschema.validate(instance=data, schema=schema)


if __name__ == "__main__":
    main_path = "./big_models"
    with open("format.json") as f:
        schema = json.load(f)
    validate_yaml_files(main_path, schema)
