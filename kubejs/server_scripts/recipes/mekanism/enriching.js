ServerEvents.recipes(event =>{
    event.recipes.mekanism.enriching(
        '2x minecraft:black_dye',
        'mekanism:dust_coal'
    )

    // 第二个配方改为使用粉碎机（Crusher）
    event.recipes.mekanism.crushing(
        '4x minecraft:red_dye',
        'minecraft:redstone'
    )
})
