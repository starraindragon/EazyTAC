ServerEvents.recipes(event =>{

    event.custom({
      "type": "extendedae:crystal_assembler",
      "input_items": [
        {
          "ingredient": {
            "item": "extendedae:machine_frame"
          }
        },
        {
            "ingredient": {
                "item": "extendedae:circuit_cutter"
            }
        },
        {
            "amount": 2,
            "ingredient": {
                "item": "extendedae:ex_inscriber"
            }
        },
        {
            "amount": 4,
            "ingredient": {
                "item": "extendedae:concurrent_processor"
            }
        }
      ],
      "output": {
        "count": 1,
        "id": "kubejs:circuit_etcher"
      }
    })

})