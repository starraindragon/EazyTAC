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

    // 湮灭数据提取站 物品输入端口（A=萤石粉，B=磨制深板岩，C=箱子）
    io(
        'kubejs:ades_item_input',
        'minecraft:glowstone_dust',
        'minecraft:polished_deepslate',
        'minecraft:chest'
    )

    // 湮灭数据提取站 物品输出端口（A=红石粉，B=磨制深板岩，C=箱子）
    io(
        'kubejs:ades_item_output',
        'minecraft:redstone',
        'minecraft:polished_deepslate',
        'minecraft:chest'
    )

    // 湮灭数据提取站 电能输入端口（A=萤石粉，B=磨制深板岩，C=绝对能量立方）
    io(
        'kubejs:ades_energy_input',
        'minecraft:glowstone_dust',
        'minecraft:polished_deepslate',
        'mekanism_extras:absolute_energy_cube'
    )
})
