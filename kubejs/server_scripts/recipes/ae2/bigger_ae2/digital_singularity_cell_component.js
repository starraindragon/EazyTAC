ServerEvents.recipes(event => {
    // 删除原版数字奇点存储组件配方
    event.remove({ id: 'bigger_ae2:digital_singularity_cell_component' })

    // 重写：陨石粉→莱卓罗水晶粉，工程处理器→多维展开处理器，量子存储组件→256M量子存储组件，赛特斯石英块→奇点块
    event.shaped(
        'bigger_ae2:digital_singularity_cell_component',
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'extendedae_plus:lattra_dust',
            B: 'ae2omnicells:multidimensional_expansion_processor',
            C: 'ae2omnicells:quantum_omni_cell_component_256m',
            D: 'ae2omnicells:singularity_block'
        }
    )
})