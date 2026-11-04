// twilightforest/alpha_yeti 预测产物 -> 产出所有对应产物（entity: twilightforest:alpha_yeti）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/alpha_yeti"]'
    const drops = [
        '32x twilightforest:ice_bomb',
        '4x twilightforest:alpha_yeti_trophy',
        '16x twilightforest:alpha_yeti_fur',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
