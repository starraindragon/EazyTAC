// neoecoae 配方：neoecoae:computation_high_energy_network_switch —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/computation_high_energy_network_switch' })
    event.custom(
        {
          "type": "neoecoae:integrated_working_station",
          "energy": 8000000,
          "inputItems": [
            {
              "count": 2,
              "item": "neoecoae:computation_network_switch"
            },
            {
              "count": 8,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 32,
              "item": "neoecoae:superconducting_processor"
            },
            {
              "count": 64,
              "item": "neoecoae:energized_superconductive_ingot"
            },
            {
              "count": 16,
              "item": "neoecoae:black_tungsten_alloy_block"
            },
            {
              "count": 2,
              "item": "neoecoae:eco_cell_component_256m"
            },
            {
              "count": 64,
              "item": "ae2:cell_component_256k"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:computation_high_energy_network_switch"
          }
        }
        
    )
})
