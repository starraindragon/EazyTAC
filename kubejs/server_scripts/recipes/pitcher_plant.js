// 瓶子草（minecraft:pitcher_plant）有序合成
// 5 个自然精华摆成瓶状：左侧竖 3 格 + 底行 3 格（左下角共用）
// 自然精华：mysticalagriculture:nature_essence
ServerEvents.recipes(event =>{
    event.shaped(
        'minecraft:pitcher_plant',
        [
            'A  ',
            'A  ',
            'AAA'
        ],
        {
            A: 'mysticalagriculture:nature_essence'
        }
    )
})
