// 可能有用锭（useless_mod:possible_useful_ingot）
// 改为「数据重组器」(data_energistics:data_reassembler) 制作
// 配方：九阶无用锭各 1 + 液态数据流 2000 mB -> 可能有用锭 ×1
ServerEvents.recipes(event => {
    // 删除原工作台配方
    event.remove({ id: 'useless_mod:crafting/possible_useful_ingot' })

    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "useless_mod:useless_ingot_tier_1", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_2", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_3", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_4", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_5", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_6", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_7", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_8", "count": 1 },
                { "item": "useless_mod:useless_ingot_tier_9", "count": 1 }
            ],
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 2000 }
            ]
        },
        "outputs": {
            "items": [
                { "id": "useless_mod:possible_useful_ingot", "count": 1 }
            ]
        }
    })
})
