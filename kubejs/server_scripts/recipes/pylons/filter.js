ServerEvents.recipes(event =>{
    event.replaceInput(
        {id:'pylons:lifeless_filter'},
        'minecraft:green_dye',
        'pylons:mob_filter'
    )

    event.replaceInput(
        {id:'pylons:mob_filter'},
        'minecraft:green_dye',
        'pylons:player_filter'
    )

    event.replaceInput(
        {id:'pylons:potion_filter'},
        'minecraft:green_dye',
        Item.of('minecraft:potion', {
            potion_contents: {
                potion: "minecraft:awkward"
            }
        })
    )
})
