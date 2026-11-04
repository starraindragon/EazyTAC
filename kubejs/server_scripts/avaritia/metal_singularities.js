// ================================================================
// 无尽贪婪（Re-Avaritia）奇点注册 — All The Modium 系列
// ----------------------------------------------------------------
// 脚本类型：SERVER（AvaritiaEvents.singularity 为服务器事件，
//           必须放在 server_scripts 下，放 startup_scripts 会报错）
// 生效方式：/reload（无需重启游戏）
// 命名空间：统一使用 kubejs
// 颜色说明：setColors(覆盖色, 底层色)，十六进制整数
// ================================================================
AvaritiaEvents.singularity(event => {

    // ---------- ATM 奇点 ----------
    // 原料：ATM锭（allthemodium:allthemodium_ingot），橙黄色
    event.register("kubejs:atm", s => {
        s
            .setDisplayName("singularity.kubejs.atm")   // 显示名（翻译键，见 zh_cn.json）
            .setColors(0xFFB300, 0xB2700A)              // [覆盖色, 底层色] ATM橙黄色
            .setIngredient(Ingredient.of("allthemodium:allthemodium_ingot"))
            .setCount(1000)                             // 所需材料数量
            .setTimeCost(240)                           // 压缩时间（游戏刻）
            .setEnabled(true)                           // 是否启用此奇点
            .setRecipeEnabled(true)                     // 是否生成对应压缩机配方
    })

    // ---------- 振金奇点 ----------
    // 原料：振金锭（allthemodium:vibranium_ingot），青绿色
    event.register("kubejs:vibranium", s => {
        s
            .setDisplayName("singularity.kubejs.vibranium")
            .setColors(0x2FE6C6, 0x0A7A68)              // [覆盖色, 底层色] 振金青绿色
            .setIngredient(Ingredient.of("allthemodium:vibranium_ingot"))
            .setCount(1000)
            .setTimeCost(240)
            .setEnabled(true)
            .setRecipeEnabled(true)
    })

    // ---------- 难得素奇点 ----------
    // 原料：难得素锭（allthemodium:unobtainium_ingot），紫色
    event.register("kubejs:unobtainium", s => {
        s
            .setDisplayName("singularity.kubejs.unobtainium")
            .setColors(0xC15AFF, 0x7720B8)              // [覆盖色, 底层色] 难得素紫色
            .setIngredient(Ingredient.of("allthemodium:unobtainium_ingot"))
            .setCount(1000)
            .setTimeCost(240)
            .setEnabled(true)
            .setRecipeEnabled(true)
    })

    // ---------- 时间奇点 ----------
    // 原料：时间水晶（kubejs:time_crystal），亮黄色
    event.register("kubejs:time", s => {
        s
            .setDisplayName("singularity.kubejs.time")
            .setColors(0xFFE000, 0xB8A000)              // [覆盖色, 底层色] 亮黄色
            .setIngredient(Ingredient.of("kubejs:time_crystal"))
            .setCount(500)                              // 所需材料数量（用户指定）
            .setTimeCost(240)
            .setEnabled(true)
            .setRecipeEnabled(true)
    })

    // ---------- 数据碎片奇点 ----------
    // 原料：数据碎片（kubejs:data_shard），青蓝色
    event.register("kubejs:data_shard", s => {
        s
            .setDisplayName("singularity.kubejs.data_shard")
            .setColors(0x00D7FF, 0x006A8F)              // [覆盖色, 底层色] 青蓝色
            .setIngredient(Ingredient.of("#kubejs:data_shard"))
            .setCount(1000)                             // 所需材料数量
            .setTimeCost(240)                           // 压缩时间（游戏刻）
            .setEnabled(true)
            .setRecipeEnabled(true)
    })
})
