// neoecoae 配方：neoecoae:storage_interface —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:storage_interface' })
    event.custom(
        {
          "type": "minecraft:crafting_shaped",
          "category": "misc",
          "key": {
            "A": {
              "item": "neoecoae:storage_casing"
            },
            "B": {
              "item": "ae2:logic_processor"
            },
            "C": {
              "item": "data_energistics:singularity_block"
            },
            "D": {
              "item": "ae2:interface"
            }
          },
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "result": {
            "count": 1,
            "id": "neoecoae:storage_interface"
          }
        }
    )
})
