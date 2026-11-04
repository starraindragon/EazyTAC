// server_scripts/loot.js
// 批量敌对实体列表
const hostileList = [
    "minecraft:zombie",          // 僵尸
    "minecraft:skeleton",        // 骷髅
    "minecraft:spider",         // 蜘蛛
    "minecraft:cave_spider",    // 洞穴蜘蛛
    "minecraft:husk",           // 尸壳
    "minecraft:phantom"        // 幻翼
]


// 循环注册每个实体的drops事件
hostileList.forEach(mobId => {
    EntityEvents.drops(mobId, event => {
        event.addDrop('kubejs:time_crystal')
    })
})

const hostileList2 = [
    "minecraft:creeper",        // 苦力怕（爬行者）
    "minecraft:witch",          // 女巫
    "minecraft:drowned"        // 溺尸
]
hostileList2.forEach(mobId => {
    EntityEvents.drops(mobId, event => {
        event.addDrop('2x kubejs:time_crystal')
    })
})

BlockEvents.drops('kubejs:2x_time_crystal_block',event =>{
    if (Math.random() < 0.1){
        event.addItem('kubejs:time_upgrade_template')
    }
})

const list = [
    "ae2:calculation_processor_press",
    "ae2:silicon_press",
    "ae2:logic_processor_press",
    "ae2:engineering_processor_press",
    "data_energistics:data_inscriber_template",
    "extendedae:concurrent_processor_press"
]

BlockEvents.drops('ae2:mysterious_cube',event =>{
    event.removeItem('*')
    list.forEach( itemId =>{
        event.addItem(itemId)
    })
})
