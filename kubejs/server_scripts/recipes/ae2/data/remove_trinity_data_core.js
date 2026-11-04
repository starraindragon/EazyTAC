// 移除 DataEnergistics 的 trinity_data_core（三位一体数位化核心）合成配方
ServerEvents.recipes(event => {
    event.remove({ id: 'data_energistics:crafting/trinity_data_core' })
})
