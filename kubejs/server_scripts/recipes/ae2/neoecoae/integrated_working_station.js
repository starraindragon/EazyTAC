// ECO 集成工作站（neoecoae:integrated_working_station）配方改造
// 制作机器：改为「超级水晶装配器」extendedae_plus:crystal_assembler_plus
// 材料替换：分子装配室 → 扩展分子装配室
//           压印器     → 扩展压印器
//           充能器     → 扩展充能器
// 其余材料（超导处理器 x2、256k 合成存储器、元件工作台、铝合金外壳、凝聚器）保持不变
ServerEvents.recipes(event => {
    // 删除原来的工作台合成配方
    event.remove({ id: 'neoecoae:integrated_working_station' })

    // 在超级水晶装配器中重新制作
    event.custom({
        "type": "extendedae_plus:crystal_assembler_plus",
        "input_items": [
            {
                // 扩展分子装配室（原：分子装配室 ae2:molecular_assembler）
                "ingredient": { "item": "extendedae:ex_molecular_assembler" }
            },
            {
                "amount": 2,
                "ingredient": { "item": "neoecoae:superconducting_processor" }
            },
            {
                "ingredient": { "item": "ae2:256k_crafting_storage" }
            },
            {
                "ingredient": { "item": "ae2:cell_workbench" }
            },
            {
                "ingredient": { "item": "neoecoae:aluminum_alloy_casing" }
            },
            {
                "ingredient": { "item": "ae2:condenser" }
            },
            {
                // 扩展压印器（原：压印器 ae2:inscriber）
                "ingredient": { "item": "extendedae:ex_inscriber" }
            },
            {
                // 扩展充能器（原：充能器 ae2:charger）
                "ingredient": { "item": "extendedae:ex_charger" }
            }
        ],
        "output": {
            "count": 1,
            "id": "neoecoae:integrated_working_station"
        }
    })
})
