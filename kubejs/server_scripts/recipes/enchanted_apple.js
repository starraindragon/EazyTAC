ServerEvents.recipes(event =>{
    event.remove({id:'mekanism:nucleosynthesizing/enchanted_golden_apple'}),

    event.shaped('minecraft:enchanted_golden_apple',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A:'minecraft:gold_block',
            B:'minecraft:apple'
        }
    )
})
