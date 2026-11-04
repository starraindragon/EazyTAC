// neoecoae 配方：neoecoae:eco_omni_cell_16m —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/eco_omni_cell_16m' })
    event.custom(
        {
          "neoforge:conditions": [
            {
              "type": "neoforge:mod_loaded",
              "modid": "ae2omnicells"
            }
          ],
          "type": "neoecoae:integrated_working_station",
          "energy": 1000,
          "inputItems": [
            {
              "count": 10,
              "item": "ae2omnicells:omni_cell_component_16m"
            },
            {
              "count": 2,
              "item": "ae2omnicells:omni_link_processor"
            },
            {
              "count": 1,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 1,
              "item": "neoecoae:eco_omni_cell_housing"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_omni_cell_16m"
          }
        }
    )
})
