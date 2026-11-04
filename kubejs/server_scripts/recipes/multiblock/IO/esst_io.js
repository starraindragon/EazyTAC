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

    // 数蚀液分离塔 流体输入端口（A=萤石粉，B=铜块，C=终极液体罐）
    io(
        'kubejs:esst_fluid_input',
        'minecraft:glowstone_dust',
        'minecraft:packed_ice',
        'mekanism:ultimate_fluid_tank'
    )

    // 数蚀液分离塔 流体输出端口（A=红石粉，B=铜块，C=终极液体罐）
    io(
        'kubejs:esst_fluid_output',
        'minecraft:redstone',
        'minecraft:packed_ice',
        'mekanism:ultimate_fluid_tank'
    )
})