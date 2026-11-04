// enderman 预测产物 -> 产出所有对应产物（entity: minecraft:enderman）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]'
    const drops = [
        '16x minecraft:ender_pearl',
        '1x minecraft:end_crystal',
        '4x evilcraft:ender_tear',
        '2x reliquary:nebulous_heart',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
