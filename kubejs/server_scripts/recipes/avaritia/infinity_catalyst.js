// 无尽催化剂（avaritia:infinity_catalyst）配方加料
// 说明：两个配方都要改
//   1) avaritia:infinity_catalyst        普通配方（group=default，游戏内会自动附加所有奇点）
//   2) avaritia:infinity_catalyst_eternal 永恒奇点配方（group=eternal_singularity，材料按列表来）
// 追加的 11 种材料：混沌核心、奇点、奇点立方、量子合金板、时间核心、
//                   256M 量子存储组件、256M ME产能组件、256M ME能源存储组件、
//                   ECO 无限存储组件、悖论无限控制电路、下界水晶
ServerEvents.recipes(event => {
    // 原配方自带的 7 种材料
    const base = [
        'minecraft:bedrock',
        'avaritia:crystal_matrix_ingot',
        'avaritia:neutron_ingot',
        'avaritia:cosmic_meatballs',
        'avaritia:ultimate_stew',
        'avaritia:endest_pearl',
        'avaritia:record_fragment'
    ]

    // 新追加的 11 种材料
    const extra = [
        'draconicevolution:chaotic_core',                  // 混沌核心
        'ae2:singularity',                                 // 奇点
        'data_energistics:singularity_block',              // 奇点立方
        'advanced_ae:quantum_alloy_plate',                 // 量子合金板
        'data_energistics:time_core',                      // 时间核心
        'ae2omnicells:quantum_omni_cell_component_256m',   // 256M 量子存储组件
        'appgen:generating_component_256m',                // 256M ME产能组件
        'appflux:core_256m',                               // 256M ME能源存储组件
        'neoecoae:eco_infinite_cell_component',            // ECO 无限存储组件
        'mekanism_extras:infinite_control_circuit',        // 悖论无限控制电路
        'powah:crystal_nitro'                              // 下界水晶
    ]

    const toItems = ids => ids.map(id => ({ item: id }))

    // ---- 1) 普通无尽催化剂配方 ----
    event.remove({ id: 'avaritia:infinity_catalyst' })
    event.custom({
        "type": "avaritia:infinity_catalyst",
        "ingredients": toItems(base.concat(extra))
    })

    // ---- 2) 永恒奇点版无尽催化剂配方（保留 group 与永恒奇点）----
    event.remove({ id: 'avaritia:infinity_catalyst_eternal' })
    event.custom({
        "type": "avaritia:infinity_catalyst",
        "group": "eternal_singularity",
        "ingredients": toItems(base.concat(['avaritia:eternal_singularity'], extra))
    })
})
