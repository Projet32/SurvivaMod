ServerEvents.recipes(event => {
    event.recipes.create.pressing('chemlib:sodium_plate', 'chemlib:sodium_ingot'),
    event.recipes.create.pressing('chemlib:magnesium_plate','chemlib:magnesium_ingot'),
    event.recipes.create.pressing('chemlib:aluminum_plate','chemlib:aluminum_ingot'),
    event.remove({ output: 'mekanism:dust_sulfur' }),
    event.remove({ input: 'mekanism:dust_sulfur' }),
    event.remove({ id: 'sulfurpotassiummod:gunpowder' }),
    event.smelting('chemlib:sulfur_dust', 'sulfurpotassiummod:sulfur'),
    event.blasting('chemlib:sulfur_dust', 'sulfurpotassiummod:sulfur'),
    event.shapeless(
        Item.of('minecraft:gunpowder', 2),
        [
            'chemlib:sulfur_dust',
            'sulfurpotassiummod:potassium'
        ]
    ),
    event.shapeless(Item.of('minecraft:yellow_dye', 3),['chemlib:sulfur_dust'])
})