// twilightforest/naga 预测产物 -> 产出所有对应产物（entity: twilightforest:naga）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/naga"]'
    const drops = [
        '4x twilightforest:naga_trophy',
        '16x twilightforest:naga_scale',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
