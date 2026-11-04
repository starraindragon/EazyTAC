ServerEvents.recipes(event => {
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "mekanism:pellet_antimatter", "count": 1 }
            ],
            "fluids": [
                { "fluid": "kubejs:fluid_data_flow", "amount": 200 }
            ]
        },
        "outputs": {
            "items": [
                { "id": "mekanism:pellet_antimatter", "count": 4 }
            ]
        }
    })
})
