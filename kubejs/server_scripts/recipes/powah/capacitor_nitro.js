// Powah「下界电容」配方调整
// 中文名对应（Powah 6.2.10 自带 zh_cn）：
//   下界电容       = powah:capacitor_nitro
//   基础电容（大型）= powah:capacitor_basic_large
//   富生电容       = powah:capacitor_spirited
//
// 原配方 powah:crafting/capacitor_nitro（工作台，有序合成）：
//   p b p        b = 下界水晶
//   b c b        c = 基础电容（大型）  <- 改这一格
//   p b p        p = 绝缘膏
// 需求：把中间那格「基础电容（大型）」换成「富生电容」，配方形状与位置不变。

ServerEvents.recipes(event => {
    // 有序配方用 replaceInput 替换材料，会保留它在九宫格中的原位置
    event.replaceInput(
        { id: 'powah:crafting/capacitor_nitro' },
        'powah:capacitor_basic_large',   // 基础电容（大型）
        'powah:capacitor_spirited'       // 富生电容
    )
})
