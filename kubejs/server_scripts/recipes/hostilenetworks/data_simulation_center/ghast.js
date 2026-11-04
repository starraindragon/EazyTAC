// ghast 预测产物 -> 产出所有对应产物（entity: minecraft:ghast）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ghast"]'
    const drops = [
        '16x minecraft:ghast_tear',
        '32x minecraft:gunpowder',
        '2x reliquary:catalyzing_gland',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
