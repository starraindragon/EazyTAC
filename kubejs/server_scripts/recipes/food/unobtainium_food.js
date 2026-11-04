ServerEvents.recipes(event =>{
    const map=[
            'AAA',
            'BAB',
            'AAA'
    ]

    event.shaped('kubejs:unobtainium_apple',
        map,
        {
            B:'kubejs:vibranium_apple',
            A:'allthemodium:unobtainium_nugget'
        }
    )

    event.shaped('kubejs:unobtainium_carrot',
        map,
        {
            B:'kubejs:vibranium_carrot',
            A:'allthemodium:unobtainium_nugget'
        }
    )
})
