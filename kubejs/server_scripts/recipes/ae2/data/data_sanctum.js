// 维度解离总站（data_energistics:data_sanctum）
// 重写数据重组器配方：64M-ME 数位化存储组件 → 1M-ME 数位化存储组件（数量不变，仍为 7 个）
ServerEvents.recipes(event => {
    // 删除原配方（data_energistics:data_reassembler/data_sanctum）
    event.remove({ id: 'data_energistics:data_reassembler/data_sanctum' })

    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:terminal", "count": 4 },
                { "tag": "data_energistics:interface" },
                { "item": "data_energistics:data_framework", "count": 23 },
                { "item": "data_energistics:data_processor", "count": 48 },
                { "item": "data_energistics:budding_data_crystal_2", "count": 4 },
                { "item": "data_energistics:data_crystal_cluster", "count": 24 },
                // 唯一改动：64m → 1m
                { "item": "data_energistics:data_storage_component_1m", "count": 7 },
                { "tag": "c:ingots/digisidian_memorize", "count": 14 },
                { "item": "data_energistics:time_core", "count": 7 }
            ],
            "fluids": [
                { "fluid": "data_energistics:ender", "amount": 6625 },
                { "fluid": "data_energistics:data_corrosion_liquid", "amount": 7250 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 102350
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:data_sanctum" }
            ]
        }
    })
})
