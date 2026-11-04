// 富集光谱配方调整
// 原：富集闪光1 + 反物质(chemical 1) -> 富集光谱1（mekanism:compressing）
// 改：富集闪光1 + uu物质(chemical 1) -> 富集光谱1（等量替换）
ServerEvents.recipes(event => {
    // 1. 移除旧的富集光谱配方（消耗反物质的版本）
    event.remove({ output: "mekanism_extras:enriched_spectrum" })

    // 2. 新配方：富集闪光 + uu物质(等量1) -> 富集光谱
    event.custom({
        "type": "mekanism:compressing",
        "chemical_input": {
            "amount": 1,
            "chemical": "mekmm:uu_matter"
        },
        "item_input": {
            "count": 1,
            "item": "mekanism_extras:enriched_shining"
        },
        "output": {
            "count": 1,
            "id": "mekanism_extras:enriched_spectrum"
        },
        "per_tick_usage": true
    })
})
