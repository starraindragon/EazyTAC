// neoecoae 配方：集成工作台 —— 4 干冰 + 4 带电雪球 + 10000mb 水 → 10000mb 凛冰溶液
ServerEvents.recipes(event => {
    event.custom(
        {
          "type": "neoecoae:integrated_working_station",
          "energy": 1000,
          "inputFluid": {
            "amount": 10000,
            "tag": "minecraft:water"
          },
          "inputItems": [
            {
              "count": 4,
              "item": "powah:dry_ice"
            },
            {
              "count": 4,
              "item": "powah:charged_snowball"
            }
          ],
          "fluidOutput": {
            "amount": 10000,
            "id": "neoecoae:cryotheum_solution"
          }
        }
    )
})
