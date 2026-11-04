// Powah「下界水晶」配方调整
// 中文名对应关系（Powah 6.2.10 自带 zh_cn）：
//   下界水晶   = powah:crystal_nitro    （Nitro Crystal）
//   烈焰晶体块 = powah:blazing_crystal_block
//   富生晶体块 = powah:spirited_crystal_block
// 注意：不要和 powah:crystal_niotic 搞混，那个中文叫「钻石水晶」。
//
// 原配方 powah:energizing/nitro_crystal（充能台，20,000,000 FE）：
//   下界之星 x1 + 红石块 x2 + 烈焰晶体块 x1  ->  下界水晶 x16
// 需求：把「烈焰晶体块」换成「富生晶体块」，其它材料和能量保持不变。

ServerEvents.recipes(event => {
    // 删除原有充能配方
    event.remove({ id: 'powah:energizing/nitro_crystal' })

    // 按原配方重建，仅替换烈焰晶体块 -> 富生晶体块
    event.recipes.powah.energizing(
        [
            '#c:nether_stars',                 // 下界之星
            '#c:storage_blocks/redstone',      // 红石块
            '#c:storage_blocks/redstone',      // 红石块
            'powah:spirited_crystal_block'     // 富生晶体块（原为 powah:blazing_crystal_block）
        ],
        Item.of('powah:crystal_nitro', 16),    // 下界水晶 x16
        20000000                               // 所需能量（FE）
    )
})
