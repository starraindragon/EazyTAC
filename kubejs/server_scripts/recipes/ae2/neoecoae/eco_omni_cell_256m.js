// neoecoae 配方：neoecoae:eco_omni_cell_256m —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/eco_omni_cell_256m' })
    event.custom(
        {
          "neoforge:conditions": [
            {
              "type": "neoforge:mod_loaded",
              "modid": "ae2omnicells"
            }
          ],
          "type": "neoecoae:integrated_working_station",
          "energy": 144000,
          "inputItems": [
            {
              "count": 10,
              "item": "ae2omnicells:omni_cell_component_256m"
            },
            {
              "count": 8,
              "item": "ae2omnicells:omni_link_processor"
            },
            {
              "count": 16,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 1,
              "item": "neoecoae:eco_omni_cell_housing"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_omni_cell_256m"
          }
        }
    )
})
