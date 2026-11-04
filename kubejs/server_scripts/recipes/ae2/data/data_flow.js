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

    // 液态数据流 → 数据流（100mb : 25600000数据流）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 200 }
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

    // 数据流 → 液态数据流（25600000数据流 : 100mb）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 51200000
            }
        },
        "outputs": {
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 200 }
            ]
        }
    })
})
