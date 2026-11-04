ServerEvents.recipes(event =>{
    event.remove(
        {output:'torcherino:torcherino'}
    )

    event.shaped('torcherino:torcherino',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A:'kubejs:time_crystal_block',
            B:'minecraft:clock',
            C:'minecraft:torch'
        }
    )
})
