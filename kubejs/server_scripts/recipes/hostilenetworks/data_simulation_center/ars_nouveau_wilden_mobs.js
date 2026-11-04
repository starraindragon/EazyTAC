// ars_nouveau/wilden_mobs 预测产物 -> 产出所有对应产物（entity: ars_nouveau:wilden_hunter）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs"]'
    const drops = [
        '16x ars_nouveau:wilden_spike',
        '16x ars_nouveau:wilden_wing',
        '16x ars_nouveau:wilden_horn',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
