// 玩家登录，给予夜视
PlayerEvents.loggedIn(event => {
    const player = event.player
    // 夜视，时长999999tick，等级1，关闭粒子，显示效果图标
    player.potionEffects.add("minecraft:night_vision", 999999, 1, true, true)
})

// 玩家死亡重生，给予夜视
PlayerEvents.respawned(event => {
    event.player.potionEffects.add("minecraft:night_vision", 999999, 1, true, true)
})
