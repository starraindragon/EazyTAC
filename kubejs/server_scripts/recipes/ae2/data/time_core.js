ServerEvents.recipes(event => {
    // 移除原版 time_shift 时间核心配方
    event.remove({ output: 'data_energistics:time_core' })

    // 改为数据重组器配方：移除沉重核心，添加 3桶(3000mb) 数蚀液 + 55000 数据流
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "ae2:singularity", "count": 8 },
                { "item": "minecraft:clock", "count": 1 },
                { "item": "minecraft:echo_shard", "count": 4 },
                { "item": "kubejs:2x_time_crystal_block", "count": 1 }
            ],
            "fluids": [
                { "fluid": "data_energistics:data_corrosion_liquid", "amount": 3000 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 55000
            }
        },
        "outputs": {
            "items": [
                { "id": "data_energistics:time_core", "count": 1 }
            ]
        }
    })
})
