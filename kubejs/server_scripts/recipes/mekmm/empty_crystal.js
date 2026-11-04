// 空晶体相关：删除原版损坏配方 + 回收机新配方
ServerEvents.recipes(event => {
    // 删除 mekmm 中引用空标签 c:fusion_fuel 的损坏反应配方（版本不匹配）
    event.remove({ id: 'mekmm:reaction/empty_crystal' })

    // 回收机：2 废料盒 -> 2 空晶体（100%）
    event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 2,
            "item": "mekmm:scrap_box"
        },
        "chance": 1.0,
        "output": {
            "count": 1,
            "id": "mekmm:empty_crystal"
        }
    })
})
