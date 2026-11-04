// neoecoae 配方：neoecoae:eco_quantum_omni_cell_64m —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/eco_quantum_omni_cell_64m' })
    event.custom(
        {
          "neoforge:conditions": [
            {
              "type": "neoforge:mod_loaded",
              "modid": "ae2omnicells"
            }
          ],
          "type": "neoecoae:integrated_working_station",
          "energy": 12000,
          "inputItems": [
            {
              "count": 10,
              "item": "ae2omnicells:quantum_omni_cell_component_64m"
            },
            {
              "count": 4,
              "item": "ae2omnicells:multidimensional_expansion_processor"
            },
            {
              "count": 16,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 1,
              "item": "neoecoae:eco_quantum_omni_cell_housing"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_quantum_omni_cell_64m"
          }
        }
    )
})
