// cow 预测产物 -> 产出所有对应产物（entity: minecraft:cow）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:cow"]'
    const drops = [
        '32x minecraft:beef',
        '24x minecraft:leather',
        '16x hexerei:animal_fat',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
