// 寰宇水晶催生仓控制器 - 超级水晶装配器配方
ServerEvents.recipes(event => {
    event.custom({
        "type": "extendedae_plus:crystal_assembler_plus",
        "input_fluid": {
            "amount": 10,
            "ingredient": { "fluid": "kubejs:fluid_data_flow" }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": { "item": "data_energistics:time_core" }
            },
            {
                "amount": 1,
                "ingredient": { "item": "data_energistics:data_framework" }
            },
            {
                "amount": 1,
                "ingredient": { "item": "advanced_ae:quantum_accelerator" }
            }
        ],
        "output": {
            "count": 1,
            "id": "kubejs:ucac_controller"
        }
    })
})
