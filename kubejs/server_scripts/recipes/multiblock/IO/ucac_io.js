ServerEvents.recipes(event =>{
    function io(output, in_1, in_2, in_3) {
        event.shaped(
            output,
            [
                'AAA',
                'BCB',
                'AAA'
            ],
            {
                A:in_1,
                B:in_2,
                C:in_3
            }
        )
    }

    // 物品输入端口（A=萤石粉）
    io(
        'kubejs:ucac_item_input',
        'minecraft:glowstone_dust',
        'minecraft:smooth_quartz',
        'minecraft:hopper'
    )

    // 物品输出端口（A=红石粉）
    io(
        'kubejs:ucac_item_output',
        'minecraft:redstone',
        'minecraft:smooth_quartz',
        'minecraft:hopper'
    )

    // 流体输入端口（A=萤石粉）
    io(
        'kubejs:ucac_fluid_input',
        'minecraft:glowstone_dust',
        'minecraft:smooth_quartz',
        'mekanism:elite_fluid_tank'
    )

    // 电能输入端口（A=萤石粉）
    io(
        'kubejs:ucac_energy_input',
        'minecraft:glowstone_dust',
        'minecraft:smooth_quartz',
        'mekanism_extras:absolute_energy_cube'
    )
})
