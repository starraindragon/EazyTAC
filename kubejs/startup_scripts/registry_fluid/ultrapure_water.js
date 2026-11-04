StartupEvents.registry('fluid', event => {
    event.create('ultrapure_water')
        .stillTexture('kubejs:fluid/ultrapure_water_still')   // 本地材质，可自行上色
        .flowingTexture('kubejs:fluid/ultrapure_water_flow')  // 本地材质，可自行上色
        .displayName('Ultrapure Water')                       // 英文名硬编码，中文由 lang 文件覆盖
})
