// neoecoae 配方：neoecoae:computation_network_switch —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/computation_network_switch' })
    event.custom(
        {
          "type": "neoecoae:integrated_working_station",
          "energy": 2000000,
          "inputItems": [
            {
              "count": 2,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 16,
              "item": "ae2:calculation_processor"
            },
            {
              "count": 8,
              "item": "neoecoae:superconducting_processor"
            },
            {
              "count": 16,
              "item": "neoecoae:energized_superconductive_ingot"
            },
            {
              "count": 8,
              "item": "neoecoae:computation_casing"
            },
            {
              "count": 4,
              "item": "ae2:cell_workbench"
            },
            {
              "count": 4,
              "item": "ae2:cell_component_256k"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:computation_network_switch"
          }
        }
    )
})
