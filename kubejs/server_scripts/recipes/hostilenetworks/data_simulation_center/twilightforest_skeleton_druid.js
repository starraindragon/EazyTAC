// twilightforest/skeleton_druid 预测产物 -> 产出所有对应产物（entity: twilightforest:skeleton_druid）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/skeleton_druid"]'
    const drops = [
        '32x twilightforest:torchberries',
        '32x minecraft:bone',
        '4x minecraft:skeleton_skull',
        '2x reliquary:rib_bone',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
