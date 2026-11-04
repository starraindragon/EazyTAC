// twilightforest/snow_queen 预测产物 -> 产出所有对应产物（entity: twilightforest:snow_queen）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/snow_queen"]'
    const drops = [
        '32x minecraft:snowball',
        '24x minecraft:packed_ice',
        '4x twilightforest:snow_queen_trophy',
        '1x twilightforest:triple_bow',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
