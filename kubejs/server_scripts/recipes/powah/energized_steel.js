// Powah 充能钢配方（kubejspowah 专用 API）：铁锭 → 钢锭
// event.recipes.powah.energizing(输入材料[], 输出, 能量)
ServerEvents.recipes(event => {
    event.remove({ id: 'powah:energizing/energized_steel' })
    event.recipes.powah.energizing(
        ['#c:ingots/steel', '#c:ingots/gold'],
        '2x powah:steel_energized',
        10000
    )
})
