// 粉碎机：1 龙锭 -> 1 龙尘
ServerEvents.recipes(event =>{
    event.recipes.mekanism.crushing(
        'draconicevolution:draconium_dust',
        'draconicevolution:draconium_ingot'
    )
})
