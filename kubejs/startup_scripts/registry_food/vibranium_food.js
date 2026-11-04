StartupEvents.registry('item', event =>{
    event.create('vibranium_carrot')
    .displayName('vibranium carrot')
    .texture('kubejs:item/vibranium_carrot')
    .food(food =>{
        food
        .alwaysEdible()
        .nutrition(80)
        .saturation(8)
        .eatSeconds(0.5)
        // 伤害吸收3，1分钟 = 1500tick，等级3（参数是0开始，填2），概率100%
        .effect('minecraft:absorption', 1500, 2, 1.0)
        // 生命回复3，1分钟 =1500tick，等级3填2，概率100%
        .effect('minecraft:regeneration', 1500, 2, 1.0)
    })

    event.create('vibranium_apple')
    .displayName('vibranium apple')
    .texture('kubejs:item/vibranium_apple')
    .food(food =>{
        food
        .alwaysEdible()
        .nutrition(80)
        .saturation(2)
        .eatSeconds(0.5)
        // 伤害吸收3，1分钟 = 1500tick，等级3（参数是0开始，填2），概率100%
        .effect('minecraft:absorption', 1500, 2, 1.0)
        // 生命回复3，1分钟 =1500tick，等级3填2，概率100%
        .effect('minecraft:regeneration', 1500, 2, 1.0)
    })
})
