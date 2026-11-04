ServerEvents.recipes(event => {
    event.shaped(
        'kubejs:singularity_block_infinity_cell',
        [
            'ABA',
            'BDB',
            'FFF'
        ],
        {
            A:'ae2:quartz_glass',
            B:'#kubejs:infinity_cell',
            D:'extendedae:void_cell',
            F:'data_energistics:singularity_block'
        }
    )
})
