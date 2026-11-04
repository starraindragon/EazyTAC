//仅单纯移除配方，不考虑添加配方的写在这

ServerEvents.recipes(event =>{
    event.remove({id:'useless_mod:crafting/ae2_gift_package'})

    // 移除万象合金炉（useless_mod:advanced_alloy_furnace_block）的合成配方
    event.remove({id:'useless_mod:advanced_alloy_furnace_block'})

    // 移除万象合金炉的全部加工配方（该配方类型共 31 条：无用锭/有用锭、齿轮、玻璃、压缩配方等）
    // 注意：九阶无用锭已在 ingots.js 里改成炼狱工作台的无序配方，不受影响
    event.remove({type: 'useless_mod:advanced_alloy_furnace'})

    // 彻底禁掉万象合金炉：多方块结构件也移除，让玩家无法搭建
    //   multiblock_alloy_furnace_core   = 多方块核心
    //   omniversal_furnace_casing       = 外壳方块
    event.remove({output: 'useless_mod:multiblock_alloy_furnace_core'})
    event.remove({output: 'useless_mod:omniversal_furnace_casing'})

    // 配方转换已在 config/useless_mod-common.toml 里全部关闭（61 个开关），
    // 那 4390 条转换配方不会再进目录，日志里的
    // "Built alloy-furnace recipe catalog: recipes=4390" 会大幅下降。
})
