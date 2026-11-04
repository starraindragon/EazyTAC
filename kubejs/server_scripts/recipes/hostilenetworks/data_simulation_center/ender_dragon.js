// ender_dragon 预测产物 -> 产出所有对应产物（entity: minecraft:ender_dragon）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:ender_dragon"]'
    const drops = [
        '16x minecraft:dragon_breath',
        '1x minecraft:dragon_egg',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
