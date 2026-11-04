ServerEvents.recipes(event =>{ 
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "allthemodium:allthemodium_block", "count": 1 },
                { "item": "allthemodium:vibranium_block", "count": 1 },
                { "item": "allthemodium:piglich_heart", "count": 4 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 10000
            }
        },
        "outputs": {
            "items": [
                { "id": "allthemodium:vibranium_allthemodium_alloy_block", "count": 1 }
            ]
        }
    })
})
