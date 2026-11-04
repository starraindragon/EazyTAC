// 熔融热核配方调整
// 原：熔岩500 + 过热钠500 + 下界合金锭1 -> 熔融热核240（mekanism:reaction）
// 改：液态数据流(3mB) + 锂(500) + 下界合金锭1 -> 熔融热核240
ServerEvents.recipes(event => {
    // 1. 移除旧的熔融热核配方
    event.remove({id:"mekanism_extras:reaction/molten_thermonuclear_gasification/molten_thermonuclear"})

    // 2. 新配方：液态数据流 + 锂 + 下界合金锭 -> 熔融热核
    event.custom({
        "type": "mekanism:reaction",
        "duration": 900,
        "energyRequired": 1000,
        "fluid_input": {
            "amount": 3,
            "fluid": "kubejs:fluid_data_flow"
        },
        "chemical_input": {
            "amount": 500,
            "chemical": "mekanism:lithium"
        },
        "item_input": {
            "count": 1,
            "tag": "c:ingots/netherite"
        },
        "chemical_output": {
            "amount": 240,
            "id": "mekanism_extras:molten_thermonuclear"
        }
    })
})
