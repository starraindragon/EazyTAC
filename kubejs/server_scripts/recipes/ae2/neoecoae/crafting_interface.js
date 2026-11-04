// neoecoae 配方：neoecoae:crafting_interface —— 把输入 ae2:singularity 替换为 data_energistics:singularity_block
ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:crafting_interface' })
    event.custom(
        {
          "type": "minecraft:crafting_shaped",
          "category": "misc",
          "key": {
            "A": {
              "item": "neoecoae:crafting_casing"
            },
            "B": {
              "item": "ae2:engineering_processor"
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
            "id": "neoecoae:crafting_interface"
          }
        }
    )
})
