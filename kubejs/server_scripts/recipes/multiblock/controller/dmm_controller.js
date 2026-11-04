// 维度采矿机控制器 - 数据重组仪配方
ServerEvents.recipes(event => {
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "mekanism:digital_miner", "count": 4 },
                { "item": "mekanism_extras:supreme_control_circuit", "count": 1 },
                { "item": "extendedae:machine_frame", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 500000
            }
        },
        "outputs": {
            "items": [
                { "id": "kubejs:dmm_controller", "count": 1 }
            ]
        }
    })
})
