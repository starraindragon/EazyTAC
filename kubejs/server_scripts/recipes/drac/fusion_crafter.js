// 聚合封包合成器 - 融合配方重写（kubejsde 专用 API，原 packageddraconic:fusion_crafter_ae）
// 删除原版觉醒材料，改为 4 飞龙核心 + 6 龙芯 + 1 龙之心，聚合等级降为基础（相同物品交错排列）
// 注：专用 API 仅支持物品 id，原 tag 已展开：#c:nether_stars->minecraft:nether_star
ServerEvents.recipes(event => {
    event.remove({ id: 'packageddraconic:fusion_crafter_ae' })

    event.recipes.draconicevolution.fusion_crafting(
        'draconicevolution:crafting_core',
        [
            'draconicevolution:wyvern_core',
            'draconicevolution:draconium_core',
            'draconicevolution:wyvern_core',
            'draconicevolution:draconium_core',
            'draconicevolution:wyvern_core',
            'draconicevolution:draconium_core',
            'draconicevolution:wyvern_core',
            'draconicevolution:draconium_core',
            'minecraft:ender_pearl',
            'draconicevolution:draconium_core',
            'minecraft:ender_pearl',
            'draconicevolution:draconium_core',
            'minecraft:ender_eye',
            'minecraft:nether_star',
            'minecraft:ender_eye',
            'packagedauto:me_package_component',
            'draconicevolution:dragon_heart',
            'minecraft:dragon_egg'
        ],
        '1x packageddraconic:fusion_crafter',
        'draconium',
        50000000
    )
})
