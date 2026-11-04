// neoecoae 配方：neoecoae:eco_infinite_cell_component —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:eco_infinite_cell_component' })
    event.custom(
        {
          "type": "neoecoae:integrated_working_station",
          "energy": 1000000,
          "inputFluid": {
            "amount": 64000,
            "fluid": "neoecoae:cryotheum_solution"
          },
          "inputItems": [
            {
              "count": 64,
              "item": "neoecoae:eco_cell_component_256m"
            },
            {
              "count": 1,
              "item": "avaritia:eternal_singularity"
            },
            {
              "count": 64,
              "item": "neoecoae:energized_superconductive_ingot"
            },
            {
              "count": 64,
              "item": "neoecoae:superconducting_processor"
            },
            {
              "count": 64,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 16,
              "item": "neoecoae:crystal_ingot"
            },
            {
              "count": 2,
              "item": "neoecoae:storage_system_l9"
            },
            {
              "count": 16,
              "item": "ae2:drive"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_infinite_cell_component"
          }
        }
        
    )
})
