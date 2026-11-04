ServerEvents.recipes(event => {
    event.remove({id: 'fluxnetworks:flux_core'})

    event.shaped(
        '16x fluxnetworks:flux_core',
        [
            'fof',
            'oeo',
            'fof'
        ],
        {
            f: 'fluxnetworks:flux_dust',
            o: 'minecraft:obsidian',
            e: 'minecraft:ender_eye'
        }
    )
})
