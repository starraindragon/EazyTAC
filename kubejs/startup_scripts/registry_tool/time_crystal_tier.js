ItemEvents.toolTierRegistry(event => {
    event.addBasedOnExisting('time_crystal_tier','iron',tier =>{
        tier.setUses(700);
        tier.setSpeed(7.3);
        tier.setAttackDamageBonus(2.6);
        tier.setEnchantmentValue(16);
    })
})
