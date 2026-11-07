ServerEvents.recipes(event =>{
    // 数据碎片(标签) → 数据流 25600000
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "tag": "kubejs:data_shard", "count": 1 }
            ]
        },
        "outputs": {
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 51200000
            }
        }
    })

    // 液态数据流 → 数据流（8mb 液态数据流 : 1000000 数据流 + 1 数据水晶）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 8 }
            ]
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:data_crystal", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 1000000
            }
        }
    })

    // 数据流 → 液态数据流（1000000 数据流 + 1 数据水晶 : 8mb）
    // 比例：128,000 数据流 / mB（与原设计的 25,600,000 : 200 完全一致）
    // 注意：单个配方的数据流量不能太大，实测 25,600,000 会让样板无法被推送执行
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:data_crystal", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 1000000
            }
        },
        "outputs": {
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 8 }
            ]
        }
    })
})
