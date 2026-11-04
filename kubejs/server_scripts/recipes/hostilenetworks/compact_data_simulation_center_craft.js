// 紧凑型数据模拟中心 - 数据重组器合成配方
// 输入：5 灰色染色玻璃、3 黑曜石、2 256x并行处理单元、1 战利品制造机
//       10b(10000mb) 数蚀液 + 1000000 数据流
// 产出：1 紧凑型数据模拟中心 (kubejs:compact_data_simulation_center)
ServerEvents.recipes(event => {
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "minecraft:gray_stained_glass", "count": 5 },
                { "item": "minecraft:obsidian", "count": 3 },
                { "item": "extendedae_plus:256x_crafting_accelerator", "count": 2 },
                { "item": "hostilenetworks:loot_fabricator", "count": 1 }
            ],
            "fluids": [
                { "fluid": "data_energistics:data_corrosion_liquid", "amount": 10000 }
            ],
            "resource": {
                "key_type": "data_energistics:digitalization",
                "resource": "data_energistics:data_flow",
                "amount": 1000000
            }
        },
        "outputs": {
            "items": [
                { "id": "kubejs:compact_data_simulation_center", "count": 1 }
            ]
        }
    })
})
