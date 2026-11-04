// 造化垂青之杖（useless_mod:endless_beaf_item）—— 终焉工作台配方
// 终焉工作台 = avaritia:extreme_crafting_table，avaritia:shaped_table tier = 4，9×9
// 图案按截图逐格还原：
//   A = 无尽之锭      avaritia:infinity_ingot
//   B = 八阶无用锭    useless_mod:useless_ingot_tier_8
//   C = 中子锭        avaritia:neutron_ingot
//   D = 有用锭        useless_mod:useful_ingot
//   E = 可能有用锭    useless_mod:possible_useful_ingot
//   F = ATM合金镐尖斧  allthemodium:alloy_paxel
//   G = ATM合金剑      allthemodium:alloy_sword
//   H = 无尽催化剂    avaritia:infinity_catalyst
ServerEvents.recipes(event => {
    // 删除模组自带的 3×3 工作台配方
    event.remove({ id: 'useless_mod:endless_beaf_item' })

    event.custom({
        "type": "avaritia:shaped_table",
        "tier": 4,
        "key": {
            "A": { "item": "avaritia:infinity_ingot" },
            "B": { "item": "useless_mod:useless_ingot_tier_8" },
            "C": { "item": "avaritia:neutron_ingot" },
            "D": { "item": "useless_mod:useful_ingot" },
            "E": { "item": "useless_mod:possible_useful_ingot" },
            "F": { "item": "allthemodium:alloy_paxel" },
            "G": { "item": "allthemodium:alloy_sword" },
            "H": { "item": "avaritia:infinity_catalyst" }
        },
        "pattern": [
            "     ABEA",
            "  AF  CDE",
            "  DA CDCB",
            "    CDC A",
            "   CDC   ",
            "  CDC AG ",
            " CDC  DA ",
            "HDC      ",
            "HH       "
        ],
        "result": {
            "count": 1,
            "id": "useless_mod:endless_beaf_item"
        }
    })
})
