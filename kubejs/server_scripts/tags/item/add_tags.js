ServerEvents.tags('item', event => {
    // 把自定义模板加入原版锻造模板标签，JEI识别为锻造模板
    event.add('minecraft:smithing_templates', 'kubejs:time_upgrade_template')
})
