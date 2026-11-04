ServerEvents.recipes(event => {
    event.remove({id: 'ae2omnicells:components/shaped/quantum_omni_cell_component_1k'})
    event.shaped(
        Item.of('ae2omnicells:quantum_omni_cell_component_1k', 1),
        [
            'NPN',
            'XCY',
            'NEN'
        ],
        {
            N: '#c:dusts/ender_pearl',
            P: 'ae2omnicells:multidimensional_expansion_processor',
            X: 'ae2omnicells:omni_cell_component_1k',
            C: 'ae2:cell_component_1k',
            Y: 'ae2omnicells:complex_omni_cell_component_1k',
            E: 'ae2omnicells:charged_ender_ingot'
        }
    )
})