// artifacts/mimic 预测产物 -> 产出所有对应产物（entity: artifacts:mimic）
ServerEvents.recipes(event => {
    const input = 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:artifacts/mimic"]'
    const drops = [
        '1x artifacts:steadfast_spikes',
        '1x artifacts:shock_pendant',
        '1x artifacts:crystal_heart',
        '1x artifacts:superstitious_hat',
        '1x artifacts:power_glove',
        '1x artifacts:night_vision_goggles',
        '1x artifacts:kitty_slippers',
        '1x artifacts:flame_pendant',
        '1x artifacts:charm_of_sinking',
        '1x artifacts:villager_hat',
        '1x artifacts:lucky_scarf',
        '1x artifacts:fire_gauntlet',
        '1x artifacts:feral_claws',
        '1x artifacts:cloud_in_a_bottle',
        '1x artifacts:aqua_dashers',
        '1x artifacts:scarf_of_invisibility',
        '1x artifacts:thorn_pendant',
        '1x artifacts:pocket_piston',
        '1x artifacts:obsidian_skull',
        '1x artifacts:antidote_vessel',
        '1x artifacts:flippers',
        '1x artifacts:panic_necklace',
        '1x artifacts:digging_claws',
        '1x artifacts:bunny_hoppers',
        '1x artifacts:universal_attractor',
        '1x artifacts:whoopee_cushion',
        '1x artifacts:golden_hook',
        '1x artifacts:cross_necklace',
        '1x artifacts:vampiric_glove',
        '1x artifacts:snorkel',
        '1x artifacts:running_shoes',
        '1x artifacts:plastic_drinking_hat',
        '1x artifacts:helium_flamingo',
        '1x artifacts:novelty_drinking_hat',
        '1x artifacts:everlasting_beef',
        '1x artifacts:umbrella',
    ].filter(s => Item.exists(s.split(' ')[1]))

    if (drops.length === 0) return

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)
        .inputFE(5000)   // 耗电：5000 FE
        .inputItems(input)
        .outputItems(drops)
})
