// evoker 预测产物 -> 产出所有对应产物（entity: minecraft:evoker）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:evoker"]'
    const drops = [
        '2x minecraft:totem_of_undying',
        '16x minecraft:emerald',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
