ServerEvents.recipes(event =>{
    const map=[
            'AAA',
            'BAB',
            'AAA'
    ]

    event.shaped('kubejs:vibranium_apple',
        map,
        {
            B:'allthemodium:allthemodium_apple',
            A:'allthemodium:vibranium_nugget'
        }
    )

    event.shaped('kubejs:vibranium_carrot',
        map,
        {
            B:'allthemodium:allthemodium_carrot',
            A:'allthemodium:vibranium_nugget'
        }
    )
})
