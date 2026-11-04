// glow_squid 预测产物 -> 产出所有对应产物（entity: minecraft:glow_squid）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:glow_squid"]'
    const drops = [
        '32x croptopia:glowing_calamari',
        '32x minecraft:glow_ink_sac',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
