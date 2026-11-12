// 龙之心 - 飞龙等级聚合配方（kubejsde 专用 API）
// 中心催化剂：1 猪巫妖之心 allthemodium:piglich_heart
// 环绕注入：1 龙蛋 minecraft:dragon_egg + 4 末地水晶 minecraft:end_crystal
//   （不用「龙息」：龙息带剩余物，喝完返还玻璃瓶会占住注入器槽位导致卡合成）
// 产出：1 龙之心 draconicevolution:dragon_heart
ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        // 中心催化剂：猪巫妖之心
        'allthemodium:piglich_heart',
        [
            // 1 龙蛋
            'minecraft:dragon_egg',
            // 4 末地水晶
            'minecraft:end_crystal',
            'minecraft:end_crystal',
            'minecraft:end_crystal',
            'minecraft:end_crystal'
        ],
        // 产出
        '1x draconicevolution:dragon_heart',
        // 科技等级：飞龙级
        'wyvern',
        // 能量（FE）
        256000
    )
})
