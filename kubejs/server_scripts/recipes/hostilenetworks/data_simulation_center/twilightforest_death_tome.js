// twilightforest/death_tome 预测产物 -> 产出所有对应产物（entity: twilightforest:death_tome）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/death_tome"]'
    const drops = [
        '32x minecraft:paper',
        '16x minecraft:book',
        '4x minecraft:writable_book',
        '1x twilightforest:magic_map_focus',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
