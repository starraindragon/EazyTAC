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

    io(
        'kubejs:dmm_item_output',
        'minecraft:redstone',
        'minecraft:red_concrete',
        'minecraft:chest'
    )

    io(
        'kubejs:dmm_energy_input',
        'minecraft:glowstone_dust',
        'minecraft:red_concrete',
        'mekanism_extras:absolute_energy_cube'
    )
})