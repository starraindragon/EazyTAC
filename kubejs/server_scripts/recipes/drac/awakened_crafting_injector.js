// 神龙聚合注入器 - 融合配方重写（kubejsde 专用 API）
// 原配方：双足飞龙核心 -> 觉醒核心，相同物品交错排列
// 注：专用 API 仅支持物品 id，原 tag 已展开：#c:gems/diamond->minecraft:diamond，#c:storage_blocks/draconium_awakened->draconicevolution:awakened_draconium_block
ServerEvents.recipes(event => {
    event.remove({ id: 'draconicevolution:machines/awakened_crafting_injector' })

    event.recipes.draconicevolution.fusion_crafting(
        'draconicevolution:wyvern_crafting_injector',
        [
            'minecraft:diamond',
            'draconicevolution:awakened_core',
            'minecraft:diamond',
            'draconicevolution:awakened_draconium_block',
            'minecraft:diamond',
            'draconicevolution:awakened_core',
            'minecraft:diamond'
        ],
        '1x draconicevolution:awakened_crafting_injector',
        'wyvern',
        256000
    )
})
