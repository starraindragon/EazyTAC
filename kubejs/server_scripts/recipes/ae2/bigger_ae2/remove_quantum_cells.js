ServerEvents.recipes(event => {
    // 删除 bigger_ae2 所有量子存储元件配方（含 cell_upgrade 升级配方）
    event.remove({ output: 'bigger_ae2:quantum_item_storage_cell' })
    event.remove({ output: 'bigger_ae2:quantum_fluid_storage_cell' })
    event.remove({ output: 'bigger_ae2:quantum_chemical_storage_cell' })
    // 注：bigger_ae2 无 quantum_source / quantum_experience 存储元件，引用已移除（否则 WARN：item does not exist）
    event.remove({ output: 'bigger_ae2:quantum_flux_storage_cell' })
    // 删除量子存储组件配方
    event.remove({ output: 'bigger_ae2:quantum_cell_component' })
})