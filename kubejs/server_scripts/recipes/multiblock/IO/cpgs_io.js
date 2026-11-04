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

    // 物品输入端口（A=萤石粉，B=铜块，C=箱子）
    io(
        'kubejs:cpgs_item_input',
        'minecraft:glowstone_dust',
        'minecraft:copper_block',
        'minecraft:chest'
    )

    // 气液输入端口（gasfluid，A=萤石粉，中间=铜块，两侧=终极化学品罐+液体罐）
    event.shaped(
        'kubejs:cpgs_gasfluid_input',
        [
            'AAA',
            'XCY',
            'AAA'
        ],
        {
            A: 'minecraft:glowstone_dust',
            X: 'mekanism:ultimate_chemical_tank',
            C: 'minecraft:copper_block',
            Y: 'mekanism:ultimate_fluid_tank'
        }
    )

    // 气液输入端口（对调：左液体罐、右化学品罐）
    event.shaped(
        'kubejs:cpgs_gasfluid_input',
        [
            'AAA',
            'XCY',
            'AAA'
        ],
        {
            A: 'minecraft:glowstone_dust',
            X: 'mekanism:ultimate_fluid_tank',
            C: 'minecraft:copper_block',
            Y: 'mekanism:ultimate_chemical_tank'
        }
    )

    // 气液输出端口（gasfluid，A=红石粉，中间=铜块，两侧=终极化学品罐+液体罐）
    event.shaped(
        'kubejs:cpgs_gasfluid_output',
        [
            'AAA',
            'XCY',
            'AAA'
        ],
        {
            A: 'minecraft:redstone',
            X: 'mekanism:ultimate_chemical_tank',
            C: 'minecraft:copper_block',
            Y: 'mekanism:ultimate_fluid_tank'
        }
    )

    // 气液输出端口（对调：左液体罐、右化学品罐）
    event.shaped(
        'kubejs:cpgs_gasfluid_output',
        [
            'AAA',
            'XCY',
            'AAA'
        ],
        {
            A: 'minecraft:redstone',
            X: 'mekanism:ultimate_fluid_tank',
            C: 'minecraft:copper_block',
            Y: 'mekanism:ultimate_chemical_tank'
        }
    )

    // 电能输出端口（A=红石粉，B=铜块，C=至尊能量立方）
    io(
        'kubejs:cpgs_energy_output',
        'minecraft:redstone',
        'minecraft:copper_block',
        'mekanism_extras:supreme_energy_cube'
    )
})
