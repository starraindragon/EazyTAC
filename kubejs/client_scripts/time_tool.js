ItemEvents.modifyTooltips(event =>{

    event.modify('kubejs:time_crystal',tooltip =>{
        tooltip.add(Text.gold("仅在击杀某些魔物时掉落"))
        tooltip.add(Text.darkGray("打开JER查看哪些魔物掉落"))
    })

    const timeTools = [
        "kubejs:time_pickaxe",
        "kubejs:time_axe",
        "kubejs:time_shovel",
        "kubejs:time_sword",
        "kubejs:time_hoe"
    ]

    timeTools.forEach(itemId => {
        event.modify(itemId, tooltip => {
            tooltip.add(Text.gold("仅在制作时才会掺入神奇的魔力"))
        })
    })
})
RecipeViewerEvents.addInformation('item', event => {
    // 给配方查看器中的该物品增加一页信息面板
    event.add('kubejs:time_crystal', [
        '只掉落1个:',
        '僵尸、骷髅、蜘蛛、洞穴蜘蛛、尸壳、幻翼',
        '掉落2个:',
        '苦力怕、女巫、溺尸'
    ])

    event.add('kubejs:time_upgrade_template',[
        '挖掘§62重压缩时间水晶§r时有§410%§r的概率掉落'
    ])
})
