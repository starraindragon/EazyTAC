// 混沌发电总站控制器 - 混沌级聚合配方（kubejsde 专用 API，相同物品交错排列）
// 中心：1 致密通量单元；环绕：2 绝对控制电路、2 混沌能量核心、2 通量发电机(256k)、2 奇点发电机(256k)
ServerEvents.recipes(event => {
    event.recipes.draconicevolution.fusion_crafting(
        'appgen:dense_flux_cell',
        [
            'appgen:singularity_generator_256m',
            'appgen:flux_generator_256m',
            'appgen:singularity_generator_256m',
            'appgen:flux_generator_256m',
            'mekanism_extras:absolute_control_circuit',
            'draconicevolution:chaotic_energy_core',
            'mekanism_extras:absolute_control_circuit',
            'draconicevolution:chaotic_energy_core'
        ],
        '1x kubejs:cpgs_controller',
        'chaotic',
        128000000
    )
})
