// twilightforest/winter_wolf 预测产物 -> 产出所有对应产物（entity: twilightforest:winter_wolf）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/winter_wolf"]'
    const drops = [
        '16x twilightforest:arctic_fur',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
