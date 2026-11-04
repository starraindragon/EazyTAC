// priority: 0
// 给予所有 Hostile Neural Networks 生物数据模型（满数据）
// 用法：/givedatamodels

const DATA_MODELS = [
    'hostilenetworks:bat',
    'hostilenetworks:blaze',
    'hostilenetworks:breeze',
    'hostilenetworks:chicken',
    'hostilenetworks:cod',
    'hostilenetworks:cow',
    'hostilenetworks:creeper',
    'hostilenetworks:drowned',
    'hostilenetworks:elder_guardian',
    'hostilenetworks:ender_dragon',
    'hostilenetworks:enderman',
    'hostilenetworks:evoker',
    'hostilenetworks:ghast',
    'hostilenetworks:glow_squid',
    'hostilenetworks:guardian',
    'hostilenetworks:hoglin',
    'hostilenetworks:iron_golem',
    'hostilenetworks:magma_cube',
    'hostilenetworks:mooshroom',
    'hostilenetworks:phantom',
    'hostilenetworks:pig',
    'hostilenetworks:polar_bear',
    'hostilenetworks:rabbit',
    'hostilenetworks:sheep',
    'hostilenetworks:shulker',
    'hostilenetworks:skeleton',
    'hostilenetworks:slime',
    'hostilenetworks:snow_golem',
    'hostilenetworks:spider',
    'hostilenetworks:squid',
    'hostilenetworks:vindicator',
    'hostilenetworks:warden',
    'hostilenetworks:witch',
    'hostilenetworks:wither',
    'hostilenetworks:wither_skeleton',
    'hostilenetworks:zombie',
    'hostilenetworks:zombified_piglin',
    'hostilenetworks:allthemodium/piglich',
    'hostilenetworks:ars_nouveau/wilden_mobs',
    'hostilenetworks:artifacts/mimic',
    'hostilenetworks:thermal/basalz',
    'hostilenetworks:thermal/blitz',
    'hostilenetworks:thermal/blizz',
    'hostilenetworks:twilightforest/alpha_yeti',
    'hostilenetworks:twilightforest/carminite_golem',
    'hostilenetworks:twilightforest/death_tome',
    'hostilenetworks:twilightforest/deer',
    'hostilenetworks:twilightforest/fire_beetle',
    'hostilenetworks:twilightforest/giant',
    'hostilenetworks:twilightforest/goblin',
    'hostilenetworks:twilightforest/helmet_crab',
    'hostilenetworks:twilightforest/hydra',
    'hostilenetworks:twilightforest/kobold',
    'hostilenetworks:twilightforest/lich',
    'hostilenetworks:twilightforest/minoshroom',
    'hostilenetworks:twilightforest/minotaur',
    'hostilenetworks:twilightforest/naga',
    'hostilenetworks:twilightforest/raven',
    'hostilenetworks:twilightforest/redcap',
    'hostilenetworks:twilightforest/skeleton_druid',
    'hostilenetworks:twilightforest/snow_queen',
    'hostilenetworks:twilightforest/stable_ice_core',
    'hostilenetworks:twilightforest/towerwood_borer',
    'hostilenetworks:twilightforest/troll',
    'hostilenetworks:twilightforest/ur_ghast',
    'hostilenetworks:twilightforest/winter_wolf',
    'hostilenetworks:twilightforest/wraith',
    'hostilenetworks:twilightforest/yeti'
]

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event

    event.register(Commands.literal('givedatamodels')
        .requires(source => source.hasPermission(2))
        .executes(ctx => {
            const player = ctx.source.player
            let count = 0

            DATA_MODELS.forEach(modelId => {
                const item = Item.of('hostilenetworks:data_model[hostilenetworks:data_model="' + modelId + '",hostilenetworks:data=1255,hostilenetworks:iterations=1249]')
                player.give(item)
                count++
            })

            player.tell(Text.green('已给予 ' + count + ' 个生物数据模型（满数据）'))
            return 1
        })
    )
})
