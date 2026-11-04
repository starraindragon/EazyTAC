// 回收机：1 数据碎片(tag) -> 4 废料（100%）
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "tag": "kubejs:data_shard"
        },
        "chance": 1.0,
        "output": {
            "count": 32,
            "id": "mekmm:scrap"
        }
    })
})
