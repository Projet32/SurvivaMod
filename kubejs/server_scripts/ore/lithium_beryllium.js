ServerEvents.recipes(event => {
        event.recipes.create.pressing('chemlib:lithium_plate', 'chemlib:lithium_ingot'),
        event.recipes.create.pressing('chemlib:beryllium_plate', 'chemlib:beryllium_ingot'),
        event.remove({ output: 'mekanism:dust_lithium' }),
        event.remove({ input: 'mekanism:dust_lithium' }),
        event.recipes.create.sandpaper_polishing(Item.of('miningmaster:divine_beryl').withChance(0.10), 'chemlib:beryl_dust'),
        event.recipes.create.crushing(['chemlib:beryl_dust', Item.of('chemlib:beryl_dust').withChance(0.25)], 'miningmaster:divine_beryl').processingTime(300)
})