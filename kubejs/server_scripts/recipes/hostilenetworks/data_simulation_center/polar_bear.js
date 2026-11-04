// polar_bear 预测产物 -> 产出所有对应产物（entity: minecraft:polar_bear）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:polar_bear"]'
    const drops = [
        '32x minecraft:cod',
        '16x potionsmaster:gallbladder',
        '8x minecraft:salmon',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
