ServerEvents.recipes(event =>{
    event.shaped(
        Item.of('kubejs:time_pickaxe',1)
        .enchant('minecraft:silk_touch', 1),
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A:'kubejs:time_crystal_block',
            B:'alltheores:iron_rod'
        }
    )
    
    event.smithing(
        'kubejs:time_pickaxe[minecraft:unbreakable={}]',
        'kubejs:time_upgrade_template',
        Item.of('kubejs:time_pickaxe',1),
        'kubejs:2x_time_crystal_block'
    )

})
