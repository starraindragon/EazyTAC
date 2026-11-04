// twilightforest/lich 预测产物 -> 产出所有对应产物（entity: twilightforest:lich）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/lich"]'
    const drops = [
        '4x twilightforest:lich_trophy',
        '24x minecraft:ender_pearl',
        '32x minecraft:bone',
        '1x twilightforest:lifedrain_scepter',
        '1x twilightforest:fortification_scepter',
        '1x twilightforest:zombie_scepter',
        '1x twilightforest:twilight_scepter',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
