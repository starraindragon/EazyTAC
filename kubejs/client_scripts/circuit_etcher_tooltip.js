// 电路蚀刻器 (kubejs:circuit_etcher) —— 贴图来源与授权署名（CC BY-NC-SA 3.0）
ItemEvents.modifyTooltips(event => {
    event.modify('kubejs:circuit_etcher', tooltip => {
        tooltip.add(Text.gray('贴图来源：本机贴图引用 AE2 水晶科技（AE2-Crystal-Science / ExtremelyFrozen）的贴图'))
        tooltip.add(Text.gray('贴图授权：CC BY-NC-SA 3.0（署名-非商业-相同方式共享）'))
        tooltip.add(Text.gray('版权：MHanHanBing (2026)；'))
        tooltip.add(Text.gray('AE2 贴图版权：Ridanisaurus Rid、AlgorithmX2 et al'))
        tooltip.add(Text.gray('非商业用途；若修改并分发，须以 CC BY-NC-SA 3.0 或兼容许可发布'))
    })
})
