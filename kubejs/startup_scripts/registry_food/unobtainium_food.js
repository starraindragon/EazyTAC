StartupEvents.registry('item', event =>{
    event.create('unobtainium_carrot')
    .displayName('unobtainium carrot')
    .texture('kubejs:item/unobtainium_carrot')
    .food(food =>{
        food
        .alwaysEdible()
        .nutrition(160)
        .saturation(16)
        .eatSeconds(0.5)
        // 伤害吸收3，1分钟 = 2600tick，等级3（参数是0开始，填2），概率100%
        .effect('minecraft:absorption', 2600, 2, 1.0)
        // 生命回复3，1分钟 =2600tick，等级3填2，概率100%
        .effect('minecraft:regeneration', 2600, 2, 1.0)
    })

    event.create('unobtainium_apple')
    .displayName('unobtainium apple')
    .texture('kubejs:item/unobtainium_apple')
    .food(food =>{
        food
        .alwaysEdible()
        .nutrition(160)
        .saturation(4)
        .eatSeconds(0.5)
        // 伤害吸收3，1分钟 = 2600tick，等级3（参数是0开始，填2），概率100%
        .effect('minecraft:absorption', 2600, 2, 1.0)
        // 生命回复3，1分钟 =2600tick，等级3填2，概率100%
        .effect('minecraft:regeneration', 2600, 2, 1.0)
    })
})
