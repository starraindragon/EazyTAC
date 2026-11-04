ServerEvents.recipes(event => {
    // 移除 AE2 原版母岩的世界交互（扔水+充能石英 transform）配方，仅保留数据重组器升级链
    event.remove({ /*type: 'ae2:transform',*/ output: 'ae2:damaged_budding_quartz' })
    event.remove({ /*type: 'ae2:transform',*/ output: 'ae2:chipped_budding_quartz' })
    event.remove({ /*type: 'ae2:transform',*/ output: 'ae2:flawed_budding_quartz' })

    // 移除 AdvancedAE 反应仓（Reaction Chamber, type: advanced_ae:react）制作母岩的配方
    //event.remove({ type: 'advanced_ae:react', output: 'ae2:damaged_budding_quartz' })
    //event.remove({ type: 'advanced_ae:react', output: 'ae2:chipped_budding_quartz' })
    //event.remove({ type: 'advanced_ae:react', output: 'ae2:flawed_budding_quartz' })

    // 起始：赛特斯石英块 + 100k 数据流 -> 破损母岩
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:quartz_block", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 100000
            }
        },
        "outputs": {
            "items": [
                { "id": "ae2:damaged_budding_quartz", "count": 1 }
            ]
        }
    })
    // 升级1：破损 -> 开裂（200k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:damaged_budding_quartz", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 200000
            }
        },
        "outputs": {
            "items": [
                { "id": "ae2:chipped_budding_quartz", "count": 1 }
            ]
        }
    })
    // 升级2：开裂 -> 有瑕（300k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:chipped_budding_quartz", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 300000
            }
        },
        "outputs": {
            "items": [
                { "id": "ae2:flawed_budding_quartz", "count": 1 }
            ]
        }
    })
    // 升级3：有瑕 -> 无瑕（400k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:flawed_budding_quartz", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 400000
            }
        },
        "outputs": {
            "items": [
                { "id": "ae2:flawless_budding_quartz", "count": 1 }
            ]
        }
    })
})
