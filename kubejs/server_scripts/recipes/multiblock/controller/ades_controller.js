// 湮灭数据提取站控制器 - 混沌级聚合配方（kubejsde 专用 API）
// 配方类型：draconicevolution:fusion_crafting，科技等级 chaotic（混沌级）
// 中心（催化剂）：1 极限承载接口  data_energistics:data_sanctum_interface
// 环绕注入：4 奇点立方 + 2 ME虚空元件 + 4 256M ECO存储组件 + 4 中子锭（共 14）
// 产出：1 湮灭数据提取站控制器 kubejs:ades_controller
ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        // 中心催化剂：极限承载接口
        'data_energistics:data_sanctum_interface',
        [
            // 4 奇点立方
            'data_energistics:singularity_block',
            'data_energistics:singularity_block',
            'data_energistics:singularity_block',
            'data_energistics:singularity_block',
            // 2 ME虚空元件
            'extendedae:void_cell',
            'extendedae:void_cell',
            // 4 256M ECO存储组件
            'neoecoae:eco_cell_component_256m',
            'neoecoae:eco_cell_component_256m',
            'neoecoae:eco_cell_component_256m',
            'neoecoae:eco_cell_component_256m',
            // 4 中子锭
            'avaritia:neutron_ingot',
            'avaritia:neutron_ingot',
            'avaritia:neutron_ingot',
            'avaritia:neutron_ingot'
        ],
        // 产出
        '1x kubejs:ades_controller',
        // 科技等级：混沌级
        'chaotic',
        // 能量（FE），与包内其它混沌级控制器配方保持一致
        128000000
    )
})
