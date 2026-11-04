ServerEvents.recipes(event =>{
    event.shaped('2x kubejs:time_upgrade_template',
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A:'kubejs:time_crystal',
            B:'kubejs:time_upgrade_template',
            C:'kubejs:time_crystal_block'
        }
    )
})