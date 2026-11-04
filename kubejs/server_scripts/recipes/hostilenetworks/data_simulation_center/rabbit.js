// rabbit 预测产物 -> 产出所有对应产物（entity: minecraft:rabbit）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:rabbit"]'
    const drops = [
        '32x minecraft:rabbit_hide',
        '32x minecraft:rabbit',
        '8x minecraft:rabbit_foot',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
