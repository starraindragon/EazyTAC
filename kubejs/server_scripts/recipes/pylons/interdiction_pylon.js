ServerEvents.recipes(event =>{
    event.remove({id:'pylons:interdiction_pylon'})

    event.shaped('pylons:interdiction_pylon',
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            A:'minecraft:quartz_slab',
            B:'pylons:expulsion_pylon',
            C:'minecraft:iron_bars',
            D:'minecraft:netherite_block',
            E:'minecraft:polished_blackstone'
        }
    )
})
