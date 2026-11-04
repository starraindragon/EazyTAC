// twilightforest/giant 预测产物 -> 产出所有对应产物（entity: twilightforest:giant_miner）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/giant"]'
    const drops = [
        '1x twilightforest:giant_sword',
        '1x twilightforest:giant_pickaxe',
        '16x twilightforest:giant_cobblestone',
        '16x twilightforest:giant_log',
        '16x twilightforest:giant_leaves',
        '16x twilightforest:giant_obsidian',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
