// warden 预测产物 -> 产出所有对应产物（entity: minecraft:warden）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:warden"]'
    const drops = [
        '1x deeperdarker:heart_of_the_deep',
        '1x deeperdarker:warden_carapace',
        '1x apothic_enchanting:warden_tendril',
        '2x minecraft:echo_shard',
        '4x minecraft:sculk_catalyst',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
