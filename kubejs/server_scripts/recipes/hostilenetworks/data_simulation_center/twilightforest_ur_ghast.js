// twilightforest/ur_ghast 预测产物 -> 产出所有对应产物（entity: twilightforest:ur_ghast）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/ur_ghast"]'
    const drops = [
        '32x twilightforest:carminite',
        '16x twilightforest:fiery_tears',
        '4x twilightforest:ur_ghast_trophy',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
