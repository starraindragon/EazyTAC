// 紫水晶粉（data_energistics:amethyst_dust）—— 新增 Mekanism 粉碎机配方
// 紫水晶碎片 -> 紫水晶粉（1:1）
ServerEvents.recipes(event => {
    event.recipes.mekanism.crushing(
        'data_energistics:amethyst_dust',   // 产出：紫水晶粉
        'minecraft:amethyst_shard'          // 输入：紫水晶碎片
    )
})
