// neoecoae 配方：neoecoae:crafting_network_switch —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station/crafting_network_switch' })
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
              "item": "ae2:engineering_processor"
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
              "item": "neoecoae:crafting_casing"
            },
            {
              "count": 4,
              "item": "ae2:molecular_assembler"
            },
            {
              "count": 2,
              "item": "ae2:256k_crafting_storage"
            }
          ],
          "itemOutput": {
            "count": 1,
            "id": "neoecoae:crafting_network_switch"
          }
        }
    )
})
