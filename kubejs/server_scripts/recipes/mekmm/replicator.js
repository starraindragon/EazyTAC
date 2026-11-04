// 三个复制机配方：移除原版，替换输入材料
// 原输入：mekanism:alloys/atomic（原子合金） + c:circuits/ultimate（终极控制电路）
// 新输入：mekanism_extras:alloy_shining（闪耀合金） + mekanism_extras:cosmic_control_circuit（寰宇支配控制电路）
ServerEvents.recipes(event => {
    const alloy = 'mekanism_extras:alloy_shining'
    const circuit = 'mekanism_extras:cosmic_control_circuit'

    // 复制机 replicator（原布局 A#A / CXC / ASA）
    event.remove({ id: 'mekmm:replicator' })
    event.shaped('mekmm:replicator', ['A#A', 'CXC', 'ASA'], {
        A: alloy,
        C: circuit,
        S: '#c:chests',
        X: 'mekanism:steel_casing',
        '#': 'mekmm:uu_matter'
    })

    // 流体复制机 fluid_replicator（原布局 A#A / CXC / ABA）
    event.remove({ id: 'mekmm:fluid_replicator' })
    event.shaped('mekmm:fluid_replicator', ['A#A', 'CXC', 'ABA'], {
        A: alloy,
        C: circuit,
        B: 'minecraft:bucket',
        X: 'mekanism:steel_casing',
        '#': 'mekmm:uu_matter'
    })

    // 化学品复制机 chemical_replicator（原布局 A#A / CXC / ATA）
    event.remove({ id: 'mekmm:chemical_replicator' })
    event.shaped('mekmm:chemical_replicator', ['A#A', 'CXC', 'ATA'], {
        A: alloy,
        C: circuit,
        T: 'mekanism:basic_chemical_tank',
        X: 'mekanism:steel_casing',
        '#': 'mekmm:uu_matter'
    })
})
