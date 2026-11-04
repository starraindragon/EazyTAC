ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('kubejs:time_sword',1)
        .enchant('apothic_enchanting:scavenger', 3)
        .enchant('minecraft:looting', 8),
        [
            'A',
            'A',
            'B'
        ],
        {
            A:'kubejs:time_crystal_block',
            B:'alltheores:iron_rod'
        }
    )

    event.smithing(
        'kubejs:time_sword[minecraft:unbreakable={}]',
        'kubejs:time_upgrade_template',
        Item.of('kubejs:time_sword',1),
        'kubejs:2x_time_crystal_block'
    )
})
