// drowned 预测产物 -> 产出所有对应产物（entity: minecraft:drowned）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:drowned"]'
    const drops = [
        '64x minecraft:rotten_flesh',
        '8x minecraft:copper_ingot',
        '2x kubejs:time_crystal',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
