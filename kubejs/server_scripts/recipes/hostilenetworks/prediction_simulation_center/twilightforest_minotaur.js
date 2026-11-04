// twilightforest/minotaur 自我意识数据模型 -> 对应生物预测产物 + 世界预测产物（紧凑型预测模拟中心）
ServerEvents.recipes(event => {
    const outputs = ['1x hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:twilightforest/minotaur"]', '1x hostilenetworks:twilight_prediction']
    event.recipes.kubejs.compact_prediction_simulation_center_recipe()
        .duration(10)
        .inputFE(1000)
        .slotName('data_char', b => b.uiName('ui:data_char', b2 => b2.chance(0, b3 => b3.inputItems('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:twilightforest/minotaur",hostilenetworks:data=1255]'))))
        .inputFluids('100x minecraft:lava')
        .inputItems('hostilenetworks:prediction_matrix')
        .outputItems(outputs)
})
