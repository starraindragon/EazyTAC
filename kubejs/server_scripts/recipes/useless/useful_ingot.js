// 有用锭（useless_mod:useful_ingot）—— 终焉工作台配方
// 终焉工作台 = avaritia:extreme_crafting_table，avaritia:shaped_table tier = 4，9×9
// 图案按参考图还原成锭形：
//   A = 可能有用锭（主体，33 个）
//   B = 无尽之锭（高光带上，5 个）
ServerEvents.recipes(event => {
    event.remove({ id: 'useless_mod:advanced_alloy/ingot/useful_ingot' })

    event.custom({
        "type": "avaritia:shaped_table",
        "tier": 4,
        "key": {
            "A": { "item": "useless_mod:possible_useful_ingot" },
            "B": { "item": "avaritia:infinity_ingot" }
        },
        "pattern": [
            "         ",
            "         ",
            "   AAAA  ",
            " AAAAAAA ",
            "AAAAABBA ",
            "AABAABAA ",
            "AABAAAA  ",
            " AAAA    ",
            "         "
        ],
        "result": {
            "count": 1,
            "id": "useless_mod:useful_ingot"
        }
    })
})
