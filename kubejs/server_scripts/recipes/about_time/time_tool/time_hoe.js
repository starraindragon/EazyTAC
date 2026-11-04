ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('kubejs:time_hoe',1)
        .enchant('apothic_enchanting:natures_blessing',7),
        [
            'AA ',
            ' B ',
            ' B '
        ],
        {
            A:'kubejs:time_crystal_block',
            B:'alltheores:iron_rod'
        }
    )

    event.smithing(
        'kubejs:time_hoe[minecraft:unbreakable={}]',
        'kubejs:time_upgrade_template',
        Item.of('kubejs:time_hoe',1),
        'kubejs:2x_time_crystal_block'
    )
})
