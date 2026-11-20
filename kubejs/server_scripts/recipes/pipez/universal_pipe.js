ServerEvents.recipes(event =>{

    event.remove({id:"pipez:universal_pipe"})
    event.shaped(
        Item.of("pipez:universal_pipe",8),
        [
            'ABC',
            'DED',
            'ABC'
        ],
        {
            A:'pipez:item_pipe',
            B:'pipez:fluid_pipe',
            C:'pipez:energy_pipe',
            D:'pipez:gas_pipe',
            E:'minecraft:redstone_block'
        }
    )

})