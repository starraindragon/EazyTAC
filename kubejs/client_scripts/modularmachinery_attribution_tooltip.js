// 多方块组件（控制器/端口）—— 贴图引用 ModularMachinery (HellFirePvP) 的署名（GPL-3.0）
const MODULAR_MACHINERY_PARTS = [
    // 控制器
    'kubejs:ucac_controller',
    'kubejs:dmm_controller',
    'kubejs:ades_controller',
    'kubejs:cpgs_controller',
    'kubejs:esst_controller',
    // 端口
    'kubejs:ucac_item_input',
    'kubejs:ucac_item_output',
    'kubejs:ucac_fluid_input',
    'kubejs:ucac_energy_input',
    'kubejs:dmm_energy_input',
    'kubejs:dmm_item_output',
    'kubejs:ades_item_input',
    'kubejs:ades_item_output',
    'kubejs:ades_energy_input',
    'kubejs:cpgs_item_input',
    'kubejs:cpgs_gasfluid_input',
    'kubejs:cpgs_gasfluid_output',
    'kubejs:cpgs_energy_output',
    'kubejs:esst_fluid_input',
    'kubejs:esst_fluid_output'
]

ItemEvents.modifyTooltips(event => {
    MODULAR_MACHINERY_PARTS.forEach(id => {
        event.modify(id, tooltip => {
            tooltip.add(Text.gray('贴图来源：本多方块组件贴图引用 ModularMachinery（HellFirePvP）'))
            tooltip.add(Text.gray('授权：ModularMachinery 采用 GNU GPL-3.0；'))
            tooltip.add(Text.gray('使用需保留其版权声明并遵守 GPL-3.0 开源条款'))
        })
    })
})
