// ============================================================
// MBD2 机器「紧凑数据模拟中心」(compact_data_simulation_center) 配方
// 配方类型：kubejs:compact_data_simulation_center_recipe
//
// 输入：带 data_model 组件的通用预测（allthemodium/piglich 猪灵）
//       即 hostilenetworks:prediction[data_model="hostilenetworks:allthemodium/piglich"]
// 输出：allthemodium:piglich_heart（猪巫妖之心）× 4
//
// 说明：KubeJS 的 InputItem 原生支持物品组件匹配，故能精确匹配
//       指定 data_model 的预测，其他生物的 prediction 不匹配本配方。
// ============================================================
ServerEvents.recipes(event => {

    event.recipes.kubejs.compact_data_simulation_center_recipe()
        .duration(10)   // 加工时长（tick）
        .inputFE(5000)   // 耗电：每产出1个物品消耗5000 FE × 4个 = 20000 FE
        .inputItems('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:allthemodium/piglich"]')
        .outputItems('4x allthemodium:piglich_heart')
})
