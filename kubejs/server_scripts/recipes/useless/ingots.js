// 无用之物 一~九阶无用锭 —— 制作机器：炼狱工作台（无序）
// 炼狱工作台 = avaritia:nether_crafting_table，在 avaritia:shapeless_table 里 tier = 2
// 材料与原配方完全一致：
//   一阶：6 种材料各 ×2（共 12 个）
//   二~九阶：3 种主题材料各 ×2 + 2 种公共材料各 ×2 + 上一阶锭 ×1（共 11 个）
// 无序配方没有格子，重复材料通过重复填写条目实现
ServerEvents.recipes(event => {
    const TIER = 2 // 炼狱工作台

    // 一阶：6 种材料
    const tier1 = [
        'minecraft:mutton',        // 羊肉
        'minecraft:beef',          // 牛肉
        'minecraft:chicken',       // 鸡肉
        'minecraft:iron_ingot',    // 铁锭
        'minecraft:gold_ingot',    // 金锭
        'minecraft:diamond'        // 钻石
    ]

    // 二~九阶
    const tiers = {
        2: { theme: ['minecraft:rotten_flesh', 'minecraft:gunpowder', 'minecraft:bone'],
             common: ['minecraft:gold_ingot', 'minecraft:diamond'] },
        3: { theme: ['minecraft:nether_wart', 'minecraft:blaze_rod', 'minecraft:nether_brick'],
             common: ['minecraft:gold_ingot', 'minecraft:diamond'] },
        4: { theme: ['minecraft:ender_pearl', 'minecraft:chorus_fruit', 'minecraft:shulker_shell'],
             common: ['minecraft:gold_block', 'minecraft:diamond_block'] },
        5: { theme: ['minecraft:wither_skeleton_skull', 'minecraft:phantom_membrane', 'minecraft:sea_lantern'],
             common: ['minecraft:gold_block', 'minecraft:diamond_block'] },
        6: { theme: ['minecraft:dragon_breath', 'minecraft:totem_of_undying', 'minecraft:enchanted_golden_apple'],
             common: ['minecraft:gold_block', 'minecraft:diamond_block'] },
        7: { theme: ['minecraft:nether_star', 'minecraft:wither_rose', 'minecraft:ghast_tear'],
             common: ['minecraft:diamond_block', 'minecraft:netherite_ingot'] },
        8: { theme: ['minecraft:dragon_head', 'minecraft:echo_shard', 'minecraft:conduit'],
             common: ['minecraft:diamond_block', 'minecraft:netherite_ingot'] },
        9: { theme: ['minecraft:turtle_helmet', 'minecraft:goat_horn', 'minecraft:rabbit_foot'],
             common: ['minecraft:diamond_block', 'minecraft:netherite_block'] }
    }

    // 某种物品填 n 份
    const repeat = (id, n) => Array.from({ length: n }, () => ({ item: id }))

    const add = (n, ingredients) => {
        event.remove({ id: 'useless_mod:advanced_alloy/ingot/useless_ingot_tier_' + n })
        event.custom({
            "type": "avaritia:shapeless_table",
            "tier": TIER,
            "ingredients": ingredients,
            "result": {
                "count": 1,
                "id": "useless_mod:useless_ingot_tier_" + n
            }
        })
    }

    // ---- 一阶：6 种材料各 2 个 ----
    add(1, tier1.flatMap(id => repeat(id, 2)))

    // ---- 二~九阶：主题 ×2 + 公共 ×2 + 上一阶锭 ×1 ----
    Object.keys(tiers).forEach(n => {
        const t = tiers[n]
        const items = [].concat(
            t.theme.flatMap(id => repeat(id, 2)),
            t.common.flatMap(id => repeat(id, 2)),
            repeat('useless_mod:useless_ingot_tier_' + (n - 1), 1)
        )
        add(Number(n), items)
    })
})
