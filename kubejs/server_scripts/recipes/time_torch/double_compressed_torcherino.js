// 二重压缩加速火把 - 混沌级聚合配方（kubejsde 专用 API，相同物品交错排列）
ServerEvents.recipes(event => {
    // 移除原版二重压缩加速火把的合成配方（9压缩 -> 1二重）
    event.remove({ id: 'torcherino:double_compressed_torcherino' })

    // 混沌级聚合注入器：
    // 9 压缩加速火把 + 9 二重压缩时间水晶块 + 4 时间核心 -> 2 二重压缩加速火把
    event.recipes.draconicevolution.fusion_crafting(
        'kubejs:time_upgrade_template',
        [
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'kubejs:2x_time_crystal_block',
            'data_energistics:time_core',
            'data_energistics:time_core',
            'data_energistics:time_core',
            'data_energistics:time_core',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino',
            'torcherino:compressed_torcherino'
        ],
        '2x torcherino:double_compressed_torcherino',
        'chaotic',
        128000000
    )
})
