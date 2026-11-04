// witch 预测产物 -> 产出所有对应产物（entity: minecraft:witch）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:witch"]'
    const drops = [
        '16x minecraft:redstone',
        '16x minecraft:glowstone_dust',
        '32x minecraft:sugar',
        '32x minecraft:stick',
        '16x minecraft:spider_eye',
        '16x minecraft:glass_bottle',
        '2x reliquary:witch_hat',
        '2x kubejs:time_crystal',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
