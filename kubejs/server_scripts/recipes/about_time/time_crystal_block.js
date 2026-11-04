ServerEvents.recipes(event =>{
    event.shaped('kubejs:time_crystal_block',
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {A:'kubejs:time_crystal'}
    )

    event.shapeless('9x kubejs:time_crystal_block',
        [
            'kubejs:2x_time_crystal_block'
        ]
    )
})
