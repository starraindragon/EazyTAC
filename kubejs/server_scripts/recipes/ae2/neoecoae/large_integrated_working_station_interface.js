// neoecoae 配方：neoecoae:large_integrated_working_station_interface —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:large_integrated_working_station_interface' })
    event.custom(
        {
          "type": "neoecoae:integrated_working_station",
          "energy": 256000,
          "inputItems": [
            {
              "count": 4,
              "item": "neoecoae:large_integrated_working_station_casing"
            },
            {
              "count": 1,
              "item": "ae2:interface"
            },
            {
              "count": 2,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 1,
              "item": "neoecoae:eco_cell_component_64m"
            },
            {
              "count": 4,
              "item": "neoecoae:energized_superconductive_ingot"
            },
            {
              "count": 4,
              "item": "neoecoae:superconducting_processor"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:large_integrated_working_station_interface"
          }
        }
    )
})
