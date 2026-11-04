ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('kubejs:time_shovel',1)
        .enchant('apothic_enchanting:miners_fervor',5),
        [
            'A',
            'B',
            'B'
        ],
        {
            A:'kubejs:time_crystal_block',
            B:'alltheores:iron_rod'
        }
    )

    event.smithing(
        'kubejs:time_shovel[minecraft:unbreakable={}]',
        'kubejs:time_upgrade_template',
        Item.of('kubejs:time_shovel',1),
        'kubejs:2x_time_crystal_block'
    )
})
