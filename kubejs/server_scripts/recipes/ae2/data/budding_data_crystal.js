ServerEvents.recipes(event => {
    // 移除原版右键升级配方（进制收容球体右键升级母岩）
    event.remove({ id: 'data_energistics:data_energistics/transform/budding_data_crystal_3' })

    // 起始：数据水晶块 + 100k 数据流 -> 无能母岩
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:data_crystal_block", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 100000
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:budding_data_crystal_1", "count": 1 }
            ]
        }
    })
    // 升级1：无能 -> 疲劳（200k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:budding_data_crystal_1", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 200000
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:budding_data_crystal_2", "count": 1 }
            ]
        }
    })
    // 升级2：疲劳 -> 欠亏（300k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:budding_data_crystal_2", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 300000
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:budding_data_crystal_3", "count": 1 }
            ]
        }
    })
    // 升级3：欠亏 -> 充盈（400k 数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:budding_data_crystal_3", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 400000
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:budding_data_crystal_4", "count": 1 }
            ]
        }
    })
    // 无能 + 3桶(3000mb)数蚀液 -> 失活母岩
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:budding_data_crystal_1", "count": 1 }
            ],
            "fluids": [
                { "fluid": "data_energistics:data_corrosion_liquid", "amount": 3000 }
            ]
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:budding_data_crystal_0", "count": 1 }
            ]
        }
    })
})
