/*! build package in 2022/7/27 18:25:02 ! */
var e=[{last_updated:"2022/07/27"},{name:"Sparsely-Gate MOE",release_date:"2017/01/23",affiliation:["Jagiellonian University","Google"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/1701.06538",domain:["Text"],parameters_MoE:["8.7B","137B"]},{name:"GPT-2",release_date:"2019/02/11",affiliation:["OpenAI"],language:["English"],"paper/news":"https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",domain:["Text"],parameters_dense:["1.5B"],model:"https://github.com/openai/gpt-2",code:"https://github.com/openai/gpt-2"},{name:"CTRL",release_date:"2019/09/11",affiliation:["Salesforce"],language:["English"],"paper/news":"https://arxiv.org/abs/1909.05858",domain:["Text"],parameters_dense:["1.63B"],model:"https://console.cloud.google.com/storage/browser/sf-ctrl;tab=objects?prefix=&forceOnObjectsSortingFiltering=false",code:"https://github.com/salesforce/ctrl"},{name:"Megatron-LM",release_date:"2019/09/17",affiliation:["NVIDIA"],language:["English"],"paper/news":"https://arxiv.org/abs/1909.08053",domain:["Text"],parameters_dense:["1.2B","2.5B","4.2B","8.3B"],code:"https://github.com/NVIDIA/Megatron-LM"},{name:"T5",release_date:"2019/10/23",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/1910.10683",domain:["Text"],parameters_dense:["3B","11B"],model:"https://github.com/google-research/text-to-text-transfer-transformer#released-model-checkpoints",code:"https://github.com/google-research/text-to-text-transfer-transformer"},{name:"Meena",release_date:"2020/01/27",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2001.09977",domain:["Text"],parameters_dense:["2.6B"]},{name:"Turing NLG",release_date:"2020/02/13",affiliation:["Microsoft"],language:["English"],"paper/news":"https://www.microsoft.com/en-us/research/blog/turing-nlg-a-17-billion-parameter-language-model-by-microsoft/",domain:["Text"],parameters_dense:["17B"]},{name:"Blender",release_date:"2020/04/28",affiliation:["Facebook"],language:["English"],"paper/news":"https://arxiv.org/abs/2004.13637",domain:["Text"],parameters_dense:["2.7B","9.4B"],model:"https://parl.ai/projects/recipes/",code:"https://parl.ai/projects/recipes/"},{name:"GPT-3",release_date:"2020/05/28",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2005.14165",domain:["Text"],parameters_dense:["1.3B","2.7B","6.7B","13B","175B"],api:"https://openai.com/api/"},{name:"DeBERTa v2",release_date:"2020/06/05",affiliation:["Microsoft"],language:["English"],"paper/news":"https://arxiv.org/abs/2006.03654",domain:["Text"],parameters_dense:["1.5B"],model:"https://huggingface.co/microsoft/deberta-v2-xxlarge",code:"https://github.com/microsoft/DeBERTa"},{name:"iGPT",release_date:"2020/06/17",affiliation:["OpenAI"],"paper/news":"https://proceedings.mlr.press/v119/chen20s.html",domain:["Vision"],parameters_dense:["1.3B","6.8B"]},{name:"GShard",release_date:"2020/06/30",affiliation:["Google"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2006.16668",domain:["Text"],parameters_MoE:["12.5B","37B","50B","150B","200B","600B"]},{name:"PLATO-2",release_date:"2020/06/30",affiliation:["Baidu"],language:["English"],"paper/news":"https://arxiv.org/abs/2006.16779",domain:["Text"],parameters_dense:["1.6B"],model:"https://github.com/PaddlePaddle/Knover/blob/develop/projects/PLATO-2/README.md#pre-trained-dialogue-generation-model",code:"https://github.com/PaddlePaddle/Knover/"},{name:"M2M-100",release_date:"2020/10/21",affiliation:["Facebook"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2010.11125",domain:["Text"],parameters_dense:["1.2B","12B"],model:"https://github.com/facebookresearch/fairseq/tree/main/examples/m2m_100#trained-models",code:"https://github.com/facebookresearch/fairseq/tree/main/examples/m2m_100"},{name:"mT5",release_date:"2020/10/22",affiliation:["Google"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2010.11934",domain:["Text"],parameters_dense:["1.2B","3.7B","13B"],model:"https://github.com/google-research/multilingual-t5#released-model-checkpoints",code:"https://github.com/google-research/multilingual-t5"},{name:"CPM-1",release_date:"2020/12/01",affiliation:["Tsinghua University","BAAI"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2012.00413",domain:["Text"],parameters_dense:["2.6B"],model:"https://github.com/OpenBMB/ModelCenter#supported-models",code:"https://github.com/OpenBMB/ModelCenter"},{name:"Switch Transformers",release_date:"2021/01/11",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2101.03961",domain:["Text"],parameters_MoE:["7B","26B","395B","1571B"],model:"https://github.com/google-research/t5x/blob/main/docs/models.md#mixture-of-experts-moe-checkpoints",code:"https://github.com/google-research/t5x"},{name:"DALL-E",release_date:"2021/02/24",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2102.12092",domain:["Vision","Text"],parameters_dense:["12B"],code:"https://github.com/openai/dall-e"},{name:"M6",release_date:"2021/03/01",affiliation:["Alibaba","Tsinghua University"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2103.00823",domain:["Text","Vision"],parameters_dense:["10B","100B"]},{name:"BriVL",release_date:"2021/03/11",affiliation:["Renmin University of China","Institute of Computing Technology"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2103.06561",domain:["Vision","Text"],parameters_dense:["1B"],model:"https://github.com/BAAI-WuDao/BriVL#%E4%B8%8B%E8%BD%BD%E4%B8%93%E5%8C%BA",code:"https://github.com/BAAI-WuDao/BriVL"},{name:"Chinese-Transformer-XL",release_date:"2021/03/17",affiliation:["Tsinghua University"],language:["Chinese"],"paper/news":"https://wudaoai.cn/model/detail/Transformer-XL",domain:["Text"],parameters_dense:["2.9B"],model:"http://dorc-model-team.ks3-cn-beijing.ksyun.com/ren-zhi/my-model/mp_rank_00_model_states.pt",code:"https://github.com/THUDM/Chinese-Transformer-XL"},{name:"GLM",release_date:"2021/03/18",affiliation:["Tsinghua University","BAAI","MIT","Shanghai Qi Zhi Institute"],language:["English","Chinese"],"paper/news":"https://arxiv.org/abs/2103.10360",domain:["Text"],parameters_dense:["10B"],model:"https://github.com/THUDM/GLM#pretrained-models",code:"https://github.com/THUDM/GLM"},{name:"GPT-Neo",release_date:"2021/03/21",affiliation:["EleutherAI"],language:["English"],"paper/news":"https://venturebeat.com/2021/05/15/gpt-3s-free-alternative-gpt-neo-is-something-to-be-excited-about/",domain:["Text"],parameters_dense:["1.3B","2.7B"],model:"https://github.com/EleutherAI/gpt-neo/#pretrained-models",code:"https://github.com/EleutherAI/gpt-neo/"},{name:"PLUG",release_date:"2021/04/19",affiliation:["Alibaba"],language:["Chinese"],"paper/news":"https://www.infoq.cn/article/efiho75sqsvqlvftruke",domain:["Text"],parameters_dense:["27B"]},{name:"PanGu(\u76D8\u53E4)-\u03B1",release_date:"2021/04/26",affiliation:["Peng Cheng Laboratory","Huawei"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2104.12369",domain:["Text"],parameters_dense:["2.6B","13B","200B"],model:"https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/PanGu-%CE%B1#%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD",code:"https://github.com/huawei-noah/Pretrained-Language-Model/tree/master/PanGu-%CE%B1",api:"https://pangu-alpha.openi.org.cn/"},{name:"XLM-R\xA0",release_date:"2021/05/02",affiliation:["Facebook"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2105.00572",domain:["Text"],parameters_dense:["3.5B","10.7B"],model:"https://github.com/facebookresearch/fairseq/tree/main/examples/xlmr#pre-trained-models",code:"https://github.com/facebookresearch/fairseq/tree/main/examples/xlmr"},{name:"QAConv",release_date:"2021/05/14",affiliation:["Salesforce","HKUST"],language:["English"],"paper/news":"https://arxiv.org/abs/2105.06912",domain:["Text"],parameters_dense:["3B"],model:"https://github.com/salesforce/QAConv#trained-models",code:"https://github.com/salesforce/QAConv"},{name:"CogView",release_date:"2021/05/26",affiliation:["Tsinghua University","Alibaba","BAAI"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2204.14217",domain:["Vision","Text"],parameters_dense:["4B"],model:"https://github.com/THUDM/CogView#download",code:"https://github.com/THUDM/CogView"},{name:"ByT5",release_date:"2021/05/28",affiliation:["Google"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2105.13626",domain:["Text"],parameters_dense:["1.2B","3.7B","13B"],model:"https://github.com/google-research/byt5#released-model-checkpoints",code:"https://github.com/google-research/byt5"},{name:"Wudao(\u609F\u9053) 2.0",release_date:"2021/06/01",affiliation:["BAAI"],language:["English","Chinese"],"paper/news":"https://www.sohu.com/na/469857971_473283",domain:["Text","Vision"],parameters_MoE:["1750B"]},{name:"ViT",release_date:"2021/06/08",affiliation:["Google"],"paper/news":"https://arxiv.org/abs/2106.04560",domain:["Vision"],parameters_dense:["1B","1.8B"],code:"https://github.com/google-research/big_vision/blob/main/big_vision/configs/proj/scaling_laws/train_vit_g.py"},{name:"GPT-J",release_date:"2021/06/09",affiliation:["EleutherAI"],language:["English"],"paper/news":"https://www.infoq.com/news/2021/07/eleutherai-gpt-j/",domain:["Text"],parameters_dense:["6B"],model:"https://github.com/kingoflolz/mesh-transformer-jax/#links",code:"https://github.com/kingoflolz/mesh-transformer-jax/"},{name:"V-MOE",release_date:"2021/06/10",affiliation:["Google"],"paper/news":"https://arxiv.org/abs/2106.05974",domain:["Vision"],parameters_MoE:["14.7B"]},{name:"Motian(\u6469\u5929)",release_date:"2021/06/15",affiliation:["Tencent"],language:["Chinese"],"paper/news":"https://mp.weixin.qq.com/s/HQL0Hk49UR6kVNtrvcXEGA",domain:["Text"],parameters_dense:["~1B"]},{name:"CPM-2",release_date:"2021/06/20",affiliation:["Tsinghua University","BAAI"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2106.10715",domain:["Text"],parameters_dense:["11B"],parameters_MoE:["198B"],model:"https://github.com/OpenBMB/ModelCenter#supported-models",code:"https://github.com/OpenBMB/ModelCenter"},{name:"ERNIE 3.0",release_date:"2021/07/05",affiliation:["Baidu"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2107.02137",domain:["Text"],parameters_dense:["10B"]},{name:"Codex",release_date:"2021/07/07",affiliation:["OpenAI"],"paper/news":"https://arxiv.org/abs/2107.03374",domain:["Code"],parameters_dense:["2.5B","12B"],api:"http://beta.openai.com/codex-waitlist"},{name:"EVA",release_date:"2021/08/03",affiliation:["Tsinghua University","BAAI"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2108.01547",domain:["Text"],parameters_dense:["2.8B"],model:"https://wudaoai.cn/model/detail/EVA#download",code:"https://github.com/thu-coai/EVA/"},{name:"baseline-1.5B",release_date:"2021/08/04",affiliation:["Cohere"],language:["English"],"paper/news":"https://arxiv.org/abs/2108.07790",domain:["Text"],parameters_dense:["1.5B"]},{name:"Jurassic-1",release_date:"2021/08/11",affiliation:["AI21 Labs"],language:["English"],"paper/news":"https://uploads-ssl.webflow.com/60fd4503684b466578c0d307/61138924626a6981ee09caf6_jurassic_tech_paper.pdf",domain:["Text"],parameters_dense:["7.5B","17B","178B"],api:"https://studio.ai21.com/playground"},{name:"FLAN",release_date:"2021/09/03",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2109.01652",domain:["Text"],parameters_dense:["137B"],code:"https://github.com/google-research/flan"},{name:"Macaw",release_date:"2021/09/06",affiliation:["AI2"],language:["English"],"paper/news":"https://arxiv.org/abs/2109.02593",domain:["Text"],parameters_dense:["3B","11B"],model:"https://github.com/allenai/macaw#available-models",code:"https://github.com/allenai/macaw"},{name:"HyperCLOVA",release_date:"2021/09/10",affiliation:["NAVER","Search Solutions"],language:["Korean"],"paper/news":"https://arxiv.org/abs/2109.04650",domain:["Text"],parameters_dense:["1.3B","6.9B","13B","39B","82B","204B"]},{name:"ShenZhou(\u795E\u821F)",release_date:"2021/09/19",affiliation:["Tencent"],language:["Chinese"],"paper/news":"https://mp.weixin.qq.com/s/PODShmOo0tg9cmchNhzvtw",domain:["Text"],parameters_dense:["~10B"]},{name:"PLATO-XL",release_date:"2021/09/20",affiliation:["Baidu"],language:["English"],"paper/news":"https://arxiv.org/abs/2109.09519",domain:["Text"],parameters_dense:["11B"],model:"https://github.com/PaddlePaddle/Knover/blob/develop/projects/PLATO-XL/README.md#pre-trained-dialogue-generation-model",code:"https://github.com/PaddlePaddle/Knover/"},{name:"T5-Efficient",release_date:"2021/09/22",affiliation:["Google","DeepMind"],language:["English"],"paper/news":"https://arxiv.org/abs/2109.10686",domain:["Text"],parameters_dense:["3B","11B","30B"],model:"https://github.com/google-research/google-research/tree/master/scaling_transformers#download-checkpoints",code:"https://github.com/google-research/text-to-text-transfer-transformer"},{name:"Z-code M3",release_date:"2021/09/22",affiliation:["Microsoft"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2109.10465",domain:["Text"],parameters_MoE:["1.8B","3B","5.5B","10B","20B"]},{name:"Zidong.Taichu(\u7D2B\u4E1C\u592A\u521D\uFF09",release_date:"2021/09/27",affiliation:["Institute of Automation"],language:["Chinese"],"paper/news":"http://www.ia.cas.cn/xwzx/kydt/202109/t20210927_6215538.html",domain:["Text","Vision","Audio"],parameters_dense:["~1B","~10B","~100B"],model:"https://gitee.com/zidongtaichu/multi-modal-models",code:"https://gitee.com/zidongtaichu/multi-modal-models"},{name:"M6-10T",release_date:"2021/10/08",affiliation:["Alibaba"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2110.03888",domain:["Text","Vision"],parameters_dense:["1.4B"],parameters_MoE:["10000B"]},{name:"Yuan(\u6E90) 1.0",release_date:"2021/10/10",affiliation:["Inspur"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2110.04725",domain:["Text"],parameters_dense:["13B","245B"],api:"https://air.inspur.com/home"},{name:"Mengzi(\u5B5F\u5B50)",release_date:"2021/10/13",affiliation:["Shanghai Jiao Tong University","Beijing Institute of Technology","Beijing Jiaotong University","Peking University","Langboat Technology"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2110.06696",domain:["Text"],parameters_dense:["1B"],code:"https://github.com/Langboat/Mengzi"},{name:"ShenNonG(\u795E\u519C)",release_date:"2021/10/13",affiliation:["Tencent"],language:["Chinese"],"paper/news":"https://mp.weixin.qq.com/s/CavGiy1Rz0MJVtcxXdSn0A",domain:["Text"],parameters_dense:["~1B"]},{name:"MixQG",release_date:"2021/10/15",affiliation:["Salesforce"],language:["English"],"paper/news":"https://arxiv.org/abs/2110.08175",domain:["Text"],parameters_dense:["3B"],model:"https://github.com/salesforce/QGen/tree/main/MixQG#released-model-checkpoints",code:"https://github.com/salesforce/QGen/tree/main/MixQG"},{name:"T0",release_date:"2021/10/15",affiliation:["BigScience"],language:["English"],"paper/news":"https://arxiv.org/abs/2110.08207",domain:["Text"],parameters_dense:["3B","11B"],model:"https://github.com/bigscience-workshop/t-zero#released-checkpoints",code:"https://github.com/bigscience-workshop/t-zero"},{name:"TI-NLP",release_date:"2021/10/19",affiliation:["Tencent"],language:["Chinese"],"paper/news":"https://www.iheima.com/article-325531.html",domain:["Text"],parameters_dense:["~10B"]},{name:"M-CTC-T",release_date:"2021/10/30",affiliation:["Facebook","McGill University","Mila"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2111.00161",domain:["Audio"],parameters_dense:["1.06B"],model:"https://github.com/flashlight/wav2letter/tree/main/recipes/mling_pl#inference",code:"https://github.com/flashlight/wav2letter/tree/main/recipes/mling_pl"},{name:"PERKS",release_date:"2021/11/04",affiliation:["Kuaishou"],language:["Chinese"],"paper/news":"https://github.com/KuaiSearchPERKS/PERKS/",domain:["Text"],parameters_dense:["~1B"]},{name:"Swin Transformer V2",release_date:"2021/11/18",affiliation:["Microsoft"],"paper/news":"https://arxiv.org/abs/2111.09883",domain:["Vision"],parameters_dense:["3B"],code:"https://github.com/microsoft/Swin-Transformer"},{name:"BASIC",release_date:"2021/11/19",affiliation:["Google","MIT"],"paper/news":"https://arxiv.org/abs/2111.10050",domain:["Vision"],parameters_dense:["3B"]},{name:"Bigan(\u6BD4\u5E72)",release_date:"2021/11/22",affiliation:["IDEA"],language:["Chinese"],"paper/news":"https://idea.edu.cn/fengshenbang-lm.html",domain:["Text"],parameters_dense:["1.1B"],model:"https://huggingface.co/IDEA-CCNL/Bigan-Transformer-XL-denoise-1.1B",code:"https://fengshenbang-doc.readthedocs.io/zh/latest/docs/%E6%AF%94%E5%B9%B2%E7%B3%BB%E5%88%97/Bigan-Transformer-XL-denoise-1.1B.html"},{name:"Erlangshen(\u4E8C\u90CE\u795E)",release_date:"2021/11/22",affiliation:["IDEA"],language:["Chinese"],"paper/news":"https://idea.edu.cn/fengshenbang-lm.html",domain:["Text"],parameters_dense:["1.3B"],model:"https://huggingface.co/IDEA-CCNL/Erlangshen-MegatronBert-1.3B",code:"https://github.com/IDEA-CCNL/Fengshenbang-LM/tree/main/fengshen/examples/pretrain_erlangshen"},{name:"ExT5",release_date:"2021/11/22",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2111.10952",domain:["Text"],parameters_dense:["3B","11B"]},{name:"Wenzhong(\u95FB\u4EF2)",release_date:"2021/11/22",affiliation:["IDEA"],language:["Chinese"],"paper/news":"https://idea.edu.cn/fengshenbang-lm.html",domain:["Text"],parameters_dense:["3.5B"],model:"https://huggingface.co/IDEA-CCNL/Wenzhong-GPT2-3.5B",code:"https://fengshenbang-doc.readthedocs.io/zh/latest/docs/%E9%97%BB%E4%BB%B2%E7%B3%BB%E5%88%97/Wenzhong-GPT2-3.5B.html"},{name:"Yuyuan(\u4F59\u5143)",release_date:"2021/11/22",affiliation:["IDEA"],language:["Chinese"],"paper/news":"https://idea.edu.cn/fengshenbang-lm.html",domain:["Text"],parameters_dense:["3.5B"],model:"https://huggingface.co/IDEA-CCNL/YuyuanQA-GPT2-3.5B",code:"https://github.com/IDEA-CCNL/Fengshenbang-LM/tree/main/fengshen/examples/wenzhong_qa"},{name:"Zhouwenwang(\u5468\u6587\u738B)",release_date:"2021/11/22",affiliation:["IDEA"],language:["Chinese"],"paper/news":"https://idea.edu.cn/fengshenbang-lm.html",domain:["Text"],parameters_dense:["1.3B"],model:"https://huggingface.co/IDEA-CCNL/Zhouwenwang-Unified-1.3B",code:"https://github.com/IDEA-CCNL/Fengshenbang-LM/tree/main/fengshen/models/roformer"},{name:"CodeParrot",release_date:"2021/12/08",affiliation:["Huggingface"],"paper/news":"https://huggingface.co/blog/codeparrot",domain:["Code"],parameters_dense:["1.5B"],model:"https://huggingface.co/codeparrot/codeparrot",code:"https://github.com/huggingface/transformers/tree/main/examples/research_projects/codeparrot"},{name:"Gopher",release_date:"2021/12/08",affiliation:["DeepMind"],language:["English"],"paper/news":"https://storage.googleapis.com/deepmind-media/research/language-research/Training%20Gopher.pdf",domain:["Text"],parameters_dense:["1.4B","7.1B","280B"]},{name:"Retro\xA0",release_date:"2021/12/08",affiliation:["DeepMind"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.04426",domain:["Text"],parameters_dense:["1.5B","7.5B"]},{name:"GLaM",release_date:"2021/12/13",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.06905",domain:["Text"],parameters_dense:["1.7B","8.7B","137B"],parameters_MoE:["1.9B","20B","27B","53B","105B","143B","1200B"]},{name:"LongT5",release_date:"2021/12/15",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.07916",domain:["Text"],parameters_dense:["3B"],model:"https://github.com/google-research/longt5#released-model-checkpoints",code:"https://github.com/google-research/longt5"},{name:"WebGPT",release_date:"2021/12/17",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.09332",domain:["Text"],parameters_dense:["13B","175B"]},{name:"GLIDE",release_date:"2021/12/20",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.10741",domain:["Vision","Text"],parameters_dense:["5B"],code:"https://github.com/openai/glide-text2im"},{name:"MOE LM",release_date:"2021/12/20",affiliation:["Meta"],language:["English"],"paper/news":"https://arxiv.org/abs/2112.10684",domain:["Text"],parameters_dense:["1.3B","2.7B","6.7B","13B"],parameters_MoE:["15B","52B","207B","1100B"],model:"https://github.com/facebookresearch/fairseq/tree/main/examples/moe_lm#pre-trained-models",code:"https://github.com/facebookresearch/fairseq/tree/main/examples/moe_lm"},{name:"XGLM",release_date:"2021/12/20",affiliation:["Meta"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2112.10668",domain:["Text"],parameters_dense:["1.7B","2.9B","7.5B"],model:"https://github.com/facebookresearch/fairseq/tree/main/examples/xglm#pre-trained-models",code:"https://github.com/facebookresearch/fairseq/tree/main/examples/xglm"},{name:"ERNIE 3.0 Titan\xA0",release_date:"2021/12/23",affiliation:["Peng Cheng Laboratory","Baidu"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2112.12731",domain:["Text"],parameters_dense:["260B"]},{name:"LaMDA",release_date:"2022/01/20",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2201.08239",domain:["Text"],parameters_dense:["2B","8B","137B"]},{name:"Megatron-Turing NLG",release_date:"2022/01/28",affiliation:["Microsoft","NVIDIA"],language:["English"],"paper/news":"https://arxiv.org/abs/2201.11990",domain:["Text"],parameters_dense:["530B"]},{name:"Cedille",release_date:"2022/02/07",affiliation:["Cedille AI"],language:["French"],"paper/news":"https://arxiv.org/abs/2202.03371",domain:["Text"],parameters_dense:["6B"],model:"https://github.com/coteries/cedille-ai#mesh-transformer",code:"https://github.com/coteries/cedille-ai#why-is-this-repository-empty",api:"https://app.cedille.ai/"},{name:"SEER",release_date:"2022/02/16",affiliation:["Meta","Inria"],"paper/news":"https://arxiv.org/abs/2202.08360",domain:["Vision"],parameters_dense:["1.5B","10B"],model:"https://github.com/facebookresearch/vissl/tree/main/projects/SEER#pretrained-models-weights",code:"https://github.com/facebookresearch/vissl/tree/main/projects/SEER"},{name:"PolyCoder",release_date:"2022/02/26",affiliation:["CMU"],"paper/news":"https://arxiv.org/abs/2202.13169",domain:["Code"],parameters_dense:["2.7B"],model:"https://github.com/VHellendoorn/Code-LMs#available-models",code:"https://github.com/VHellendoorn/Code-LMs"},{name:"DeepNet",release_date:"2022/03/01",affiliation:["Microsoft"],language:["English"],"paper/news":"https://arxiv.org/abs/2203.00555",domain:["Text"],parameters_dense:["3.2B"],code:"https://arxiv.org/pdf/2203.00555.pdf"},{name:"InstructGPT",release_date:"2022/03/04",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2203.02155",domain:["Text"],parameters_dense:["1.3B","6B","175B"]},{name:"AlphaCode",release_date:"2022/03/16",affiliation:["DeepMind"],"paper/news":"https://arxiv.org/abs/2203.07814",domain:["Code"],parameters_dense:["1.1B","2.8B","8.7B","41.1B"]},{name:"EVA-2",release_date:"2022/03/17",affiliation:["Tsinghua University","BAAI","York University"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2203.09313",domain:["Text"],parameters_dense:["2.8B"],model:"https://wudaoai.cn/model/detail/EVA#download",code:"https://github.com/thu-coai/EVA/"},{name:"CodeGen",release_date:"2022/03/25",affiliation:["Salesforce"],"paper/news":"https://arxiv.org/abs/2203.13474",domain:["Code"],parameters_dense:["2.7B","6.1B","16.1B"],model:"https://github.com/salesforce/CodeGen#setup",code:"https://github.com/salesforce/CodeGen"},{name:"Benetnasch(\u7476\u5149)",release_date:"2022/03/28",affiliation:["Singularity AI"],language:["Chinese"],"paper/news":"https://vr.sina.com.cn/2022-03-28/doc-imcwiwss8619202.shtml",domain:["Text"],parameters_dense:["~10B"],api:"https://openapi.singularity-ai.com/index.html#/"},{name:"Chinchilla",release_date:"2022/03/29",affiliation:["DeepMind"],language:["English"],"paper/news":"https://arxiv.org/abs/2203.15556",domain:["Text"],parameters_dense:["70B"]},{name:"PaLM",release_date:"2022/04/05",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2204.02311",domain:["Text"],parameters_dense:["8B","62B","540B"]},{name:"InCoder",release_date:"2022/04/12",affiliation:["Facebook","University of Washington","UC Berkeley","TTIC","CMU"],"paper/news":"https://arxiv.org/abs/2204.05999",domain:["Code"],parameters_dense:["1.3B","6.7B"],model:"https://sites.google.com/view/incoder-code-models",code:"https://github.com/dpfried/incoder/blob/main/README.md"},{name:"DALL-E 2",release_date:"2022/04/13",affiliation:["OpenAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2204.06125",domain:["Vision","Text"],parameters_dense:["6.5B"],api:"https://labs.openai.com/waitlist"},{name:"METRO-LM",release_date:"2022/04/13",affiliation:["Microsoft"],language:["English"],"paper/news":"https://arxiv.org/abs/2204.06644",domain:["Text"],parameters_dense:["5.4B"]},{name:"NOOR",release_date:"2022/04/13",affiliation:["Technology Innovation Institute"],language:["Arabic"],"paper/news":"https://www.tii.ae/news/technology-innovation-institute-announces-launch-noor-worlds-largest-arabic-nlp-model",domain:["Text"],parameters_dense:["10B"]},{name:"GPT-NeoX",release_date:"2022/04/14",affiliation:["EleutherAI"],language:["English"],"paper/news":"https://arxiv.org/abs/2204.06745",domain:["Text"],parameters_dense:["20B"],model:"https://github.com/EleutherAI/gpt-neox#download-links",code:"https://github.com/EleutherAI/gpt-neox"},{name:"mGPT",release_date:"2022/04/15",affiliation:["SberDevices","HSE University","AI Research Institute"],language:["Multilingual"],"paper/news":"https://arxiv.org/abs/2204.07580",domain:["Text"],parameters_dense:["1.3B","13B"],model:"https://huggingface.co/sberbank-ai/mGPT",code:"https://github.com/ai-forever/mgpt"},{name:"CogView2",release_date:"2022/04/28",affiliation:["Tsinghua University","BAAI"],language:["English","Chinese"],"paper/news":"https://arxiv.org/abs/2204.14217",domain:["Vision","Text"],parameters_dense:["6B"],model:"https://model.baai.ac.cn/model-detail/100041",code:"https://github.com/THUDM/CogView2"},{name:"Flamingo",release_date:"2022/04/28",affiliation:["DeepMind"],language:["English"],"paper/news":"https://arxiv.org/abs/2204.14198",domain:["Text","Vision"],parameters_dense:["80B"]},{name:"OPT",release_date:"2022/05/02",affiliation:["Meta"],language:["English"],"paper/news":"https://arxiv.org/abs/2205.01068",domain:["Text"],parameters_dense:["1.3B","2.7B","6.7B","13B","30B","66B","175B"],model:"https://github.com/facebookresearch/metaseq/tree/main/projects/OPT#pretrained-model-weights",code:"https://github.com/facebookresearch/metaseq"},{name:"CoCa",release_date:"2022/05/04",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2205.01917",domain:["Vision","Text"],parameters_dense:["2.1B"]},{name:"UL2",release_date:"2022/05/10",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2205.05131",domain:["Text"],parameters_dense:["20B"],model:"https://github.com/google-research/google-research/tree/master/ul2#checkpoints",code:"https://github.com/google-research/t5x"},{name:"HunYuan(\u6DF7\u5143)",release_date:"2022/05/11",affiliation:["Tencent"],language:["Chinese"],"paper/news":"http://ex.chinadaily.com.cn/exchange/partners/82/rss/channel/cn/columns/snl9a7/stories/WS628df605a3101c3ee7ad730e.html",domain:["Text"],parameters_dense:["~10B"]},{name:"Gato",release_date:"2022/05/12",affiliation:["DeepMind"],language:["English"],"paper/news":"https://arxiv.org/abs/2205.06175",domain:["Text","Vision"],parameters_dense:["1.2B"]},{name:"ERNIE 3.0 Zeus",release_date:"2022/05/20",affiliation:["Baidu"],language:["Chinese"],"paper/news":"https://baijiahao.baidu.com/s?id=1733603775259242015&wfr=spider&for=pc",domain:["Text"],parameters_dense:["~100B"],api:"https://wenxin.baidu.com/younger/apiDetail?id=20006"},{name:"Imagen",release_date:"2022/05/23",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2205.11487",domain:["Vision","Text"],parameters_dense:["7.6B"]},{name:"CogVideo",release_date:"2022/05/29",affiliation:["Tsinghua University","BAAI"],language:["Chinese"],"paper/news":"https://arxiv.org/abs/2205.15868",domain:["Vision","Text"],parameters_dense:["9.4B"],model:"https://github.com/THUDM/CogVideo#download",code:"https://github.com/THUDM/CogVideo"},{name:"OBERT",release_date:"2022/06/01",affiliation:["OPPO"],language:["Chinese"],"paper/news":"https://blog.51cto.com/u_15273780/5440502",domain:["Text"],parameters_dense:["~1B"]},{name:"SwinV2-MoE",release_date:"2022/06/07",affiliation:["Microsoft"],"paper/news":"https://arxiv.org/abs/2206.03382",domain:["Vision"],parameters_dense:["1B","2B"],code:"https://github.com/microsoft/Swin-Transformer"},{name:"Unified-IO",release_date:"2022/06/17",affiliation:["AI2","University of Washington"],language:["English"],"paper/news":"https://arxiv.org/abs/2206.08916",domain:["Text","Vision"],parameters_dense:["2.8B"]},{name:"GODEL",release_date:"2022/06/22",affiliation:["Microsoft","Columbia University"],language:["English"],"paper/news":"https://arxiv.org/abs/2206.11309",domain:["Text"],parameters_dense:["2.7B"],model:"https://github.com/Microsoft/GODEL#models",code:"https://github.com/Microsoft/GODEL"},{name:"Parti",release_date:"2022/06/22",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2206.10789",domain:["Vision","Text"],parameters_dense:["3B","20B"]},{name:"YaLM",release_date:"2022/06/23",affiliation:["Yandex"],language:["English","Russian"],"paper/news":"https://medium.com/yandex/yandex-publishes-yalm-100b-its-the-largest-gpt-like-neural-network-in-open-source-d1df53d0e9a6",domain:["Text"],parameters_dense:["100B"],model:"https://github.com/yandex/YaLM-100B#downloading-checkpoint",code:"https://github.com/yandex/YaLM-100B"},{name:"LIMoE",release_date:"2022/06/26",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2206.02770",domain:["Text","Vision"],parameters_MoE:["5.6B"]},{name:"Minerva",release_date:"2022/06/29",affiliation:["Google"],language:["English"],"paper/news":"https://arxiv.org/abs/2206.14858",domain:["Text"],parameters_dense:["8B","62B","540B"]},{name:"NLLB",release_date:"2022/07/11",affiliation:["Meta"],language:["Multilingual"],"paper/news":"https://research.facebook.com/publications/no-language-left-behind/",domain:["Text"],parameters_dense:["1.2B","3.3B"],parameters_MoE:["54.5B"],model:"https://github.com/facebookresearch/fairseq/blob/nllb/README.md#multilingual-translation-models",code:"https://github.com/facebookresearch/fairseq/blob/nllb/examples/nllb/modeling/README.md"},{name:"BLOOM",release_date:"2022/07/12",affiliation:["BigScience"],language:["Multilingual"],"paper/news":"https://bigscience.huggingface.co/blog/bloom",domain:["Text"],parameters_dense:["1.3B","2.5B","6.3B","175B"],model:"https://huggingface.co/bigscience/bloom/tree/main",code:"https://github.com/huggingface/transformers/tree/main/src/transformers/models/bloom"}];export{e as d};
