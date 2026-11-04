// ATM合金镐尖斧 - 混沌级聚合配方（kubejsde 专用 API，相同物品交错排列）
ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        'allthemodium:alloy_pick',
        [
            'allthemodium:alloy_axe',
            'allthemodium:piglich_heart',
            'allthemodium:alloy_shovel',
            'allthemodium:piglich_heart',
            'allthemodium:unobtainium_allthemodium_alloy_block',
            'allthemodium:piglich_heart',
            'allthemodium:unobtainium_vibranium_alloy_block',
            'allthemodium:piglich_heart',
            'allthemodium:vibranium_allthemodium_alloy_block',
            'allthemodium:piglich_heart'
        ],
        '1x allthemodium:alloy_paxel',
        'chaotic',
        128000000
    )
})
