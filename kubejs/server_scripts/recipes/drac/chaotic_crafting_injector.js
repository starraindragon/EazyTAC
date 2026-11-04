// 混沌聚合注入器 - 融合配方重写（kubejsde 专用 API）
// 2 个大的混沌残片 -> 混沌核心，相同物品交错排列
// 注：专用 API 仅支持物品 id，原 tag 已展开：#c:gems/diamond->minecraft:diamond
ServerEvents.recipes(event => {
    event.remove({ id: 'draconicevolution:machines/chaotic_crafting_injector' })

    event.recipes.draconicevolution.fusion_crafting(
        'draconicevolution:awakened_crafting_injector',
        [
            'minecraft:diamond',
            'draconicevolution:chaotic_core',
            'minecraft:diamond',
            'draconicevolution:large_chaos_frag',
            'minecraft:diamond',
            'minecraft:dragon_egg',
            'minecraft:diamond',
            'draconicevolution:large_chaos_frag',
            'draconicevolution:chaotic_core'
        ],
        '1x draconicevolution:chaotic_crafting_injector',
        'draconic',
        8000000
    )
})
