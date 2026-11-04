// neoecoae 配方：neoecoae:eco_mega_chemical_cell_4g —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:compat/megacells/eco_mega_chemical_cell_4g' })
    event.custom(
        {
          "neoforge:conditions": [
            {
              "type": "neoforge:mod_loaded",
              "modid": "megacells"
            },
            {
              "type": "neoforge:mod_loaded",
              "modid": "mekanism"
            },
            {
              "type": "neoforge:mod_loaded",
              "modid": "appmek"
            }
          ],
          "type": "neoecoae:integrated_working_station",
          "inputItems": [
            {
              "count": 10,
              "item": "megacells:cell_component_256m"
            },
            {
              "count": 8,
              "item": "megacells:accumulation_processor"
            },
            {
              "count": 64,
              "item": "data_energistics:singularity_block"
            },
            {
              "count": 1,
              "item": "neoecoae:mega_chemical_cell_housing"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:eco_mega_chemical_cell_4g"
          },
          "energy": 144000
        }
        
    )
})
