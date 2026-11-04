// mooshroom 预测产物 -> 产出所有对应产物（entity: minecraft:mooshroom）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:mooshroom"]'
    const drops = [
        '32x minecraft:beef',
        '24x minecraft:leather',
        '16x minecraft:red_mushroom',
        '16x minecraft:brown_mushroom',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
