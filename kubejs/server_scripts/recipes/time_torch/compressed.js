ServerEvents.recipes(event =>{

    event.remove({output:'torcherino:compressed_torcherino'})
    
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "torcherino:torcherino", "count": 9 },
                { "item": "kubejs:2x_time_crystal_block", "count": 1 }
            ],
            "fluids": [
                { "fluid": "data_energistics:data_corrosion_liquid", "amount": 200 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 1000
            }
        },
        "outputs": {
            "items": [
                { "id": "torcherino:compressed_torcherino", "count": 1 }
            ]
        }
    })
})
