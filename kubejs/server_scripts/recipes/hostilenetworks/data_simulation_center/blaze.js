// blaze 预测产物 -> 产出所有对应产物（entity: minecraft:blaze）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:blaze"]'
    const drops = [
        '16x minecraft:blaze_rod',
        '2x reliquary:molten_core',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
