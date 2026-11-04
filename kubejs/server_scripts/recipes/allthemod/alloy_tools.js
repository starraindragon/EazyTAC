ServerEvents.recipes(event =>{

    const tool = ["allthemodium:alloy_sword",
        "allthemodium:alloy_axe",
        "allthemodium:alloy_shovel"]

    tool.forEach(toolid =>{

        const intool = toolid.replace("alloy","unobtainium")

        event.custom({
            "type": "data_energistics:data_reassembler",
            "inputs": {
                "items": [
                    { "item": "allthemodium:vibranium_allthemodium_alloy_ingot", "count": 1 },
                    { "item": "allthemodium:unobtainium_allthemodium_alloy_ingot", "count": 1 },
                    { "item": "allthemodium:unobtainium_vibranium_alloy_ingot", "count": 1 },
                    { "item": intool, "count": 1 }
                ],
                "resource": {
                    "key_type": "data_energistics:digitalization",
                    "resource": "data_energistics:data_flow",
                    "amount": 5000
                }
            },
            "outputs": {
                "items": [
                    { "id": toolid, "count": 1 }
                ]
            }
        })
    })

    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "allthemodium:vibranium_allthemodium_alloy_ingot", "count": 1 },
                { "item": "allthemodium:unobtainium_allthemodium_alloy_ingot", "count": 1 },
                { "item": "allthemodium:unobtainium_vibranium_alloy_ingot", "count": 1 },
                { "item": "allthemodium:unobtainium_pickaxe", "count": 1 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 5000
            }
        },
        "outputs": {
            "items": [
                { "id": "allthemodium:alloy_pick", "count": 1 }
            ]
        }
    })

})
