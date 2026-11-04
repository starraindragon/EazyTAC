// spider 预测产物 -> 产出所有对应产物（entity: minecraft:spider）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:spider"]'
    const drops = [
        '32x minecraft:string',
        '16x minecraft:spider_eye',
        '4x minecraft:cobweb',
        '3x silentgear:fine_silk',
        '2x reliquary:chelicerae',
        '1x kubejs:time_crystal',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
