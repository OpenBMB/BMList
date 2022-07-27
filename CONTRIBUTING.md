# Contributing to BMList

We welcome everyone to add new models to BMList! Please follow the steps below.

## 1. Check the model size

First you need to make sure that the model to be added has at least 1 billion parameters.

## 2. Fork the repository

Fork the repository to your own GitHub space by clicking the "Fork" button. Then clone it on your disk and set the remote repo:
```git
$ git clone https://github.com/<your GitHub>/BMList.git
$ cd BMList
$ git remote add upstream https://github.com/OpenBMB/BMList.git
```

## 3. Write a yaml file

* Create a yaml file named ``English_Model_Name(中文模型名称，如果有).yml`` in the ``big_models`` folder. An example is ``BigModel(大模型).yml``.

* Add the model information in the file. An example is:

```
# If the model only has an english name, just write "BigModel" here
name: BigModel(大模型)

# the date should be in the 20XX/XX/XX format
release_date: 2022/01/01

# At least one affiliation should be added
affiliation:
  - OpenBMB
  - ModelBest

# Specify one or more languages
language:
  - English
  - Chinese

paper/news: https://the-link-to-the-paper-or-news

# Specify one or more domains among 'Text', 'Vision', 'Audio' and 'Code'
domain:
  - Text

parameters_dense:
  - 1B
  - 10B

parameters_MoE:
  - 100B
  - 1000B

model: https://the-link-to-the-model

code: https://the-link-to-the-code

api: https://the-link-to-the-api
```

Here are some notes:

* ``name``, ``release_date``, ``affiliation``, ``domain`` and ``paper/news`` are required.

* If the ``domain`` is "text", ``language`` is required.

* If the model supports three or more languages, the ``language`` should be "Multilingual".

* You need to determine whether the model is dense or MoE-based (Mixture of Experts), or even both, and fill in the number of parameters into ``parameters_dense`` or/and ``parameters_MoE``.

* For advanced users, you can refer to the ``format.json`` file to learn more about the yaml file format. 


## 3. Make a pull request
After completing the file, you should first rebase your code and solve the conflicts with the remote repo:
```git
$ git fetch upstream
$ git rebase upstream/main
```
Then you can push the code to your own repo:
```git
$ git push -u origin main
```
Finally, you can make a pull request from your GitHub repo and merge it with ours. 

Thanks for the contribution!
