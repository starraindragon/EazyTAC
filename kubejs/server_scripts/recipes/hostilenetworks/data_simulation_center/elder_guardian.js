// elder_guardian 预测产物 -> 产出所有对应产物（entity: minecraft:elder_guardian）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:elder_guardian"]'
    const drops = [
        '16x minecraft:cod',
        '2x minecraft:salmon',
        '2x minecraft:pufferfish',
        '2x minecraft:tropical_fish',
        '8x minecraft:prismarine_crystals',
        '24x minecraft:prismarine_shard',
        '32x minecraft:wet_sponge',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
