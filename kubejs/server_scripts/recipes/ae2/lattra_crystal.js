ServerEvents.recipes(event =>{

    event.remove({output:'extendedae_plus:lattra_crystal'})

    event.custom({
        "type": "ae2:transform",
        "ingredients": [
          {
            "item": "extendedae:entro_crystal"
          },
          {
            "item": "advanced_ae:quantum_alloy_plate"
          },
          {
            "item": "data_energistics:digisidian_memorize_ingot"
          }
        ],
        "result": {
          "count": 32,
          "id": "extendedae_plus:lattra_crystal"
        }
    })

    event.custom({
          "type": "extendedae_plus:crystal_assembler_plus",
          "input_fluid": {
            "amount": 100,
            "ingredient": {
              "fluid": "minecraft:water"
            }
          },
          "input_items": [
            {
              "amount": 2,
              "ingredient": {
                "item": "extendedae:entro_crystal"
              }
            },
            {
              "amount": 2,
              "ingredient": {
                "item": "advanced_ae:quantum_alloy_plate"
              }
            },
            {
              "amount": 2,
              "ingredient": {
                "item": "data_energistics:digisidian_memorize_ingot"
              }
            }
          ],
          "output": {
            "count": 64,
            "id": "extendedae_plus:lattra_crystal"
          }
        })

})