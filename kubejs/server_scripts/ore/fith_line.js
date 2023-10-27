ServerEvents.recipes(event => {
    event.recipes.create.pressing('chemlib:strontium_plate', 'chemlib:strontium_ingot'),
    event.recipes.create.pressing('chemlib:rubidium_plate','chemlib:rubidium_ingot'),
    event.recipes.create.pressing('chemlib:zirconium_plate','chemlib:zirconium_ingot'),
    event.recipes.create.pressing('chemlib:yttrium_plate','chemlib:yttrium_ingot'),
    event.recipes.create.pressing('chemlib:molybdenum_plate','chemlib:molybdenum_ingot'),
    event.recipes.create.pressing('chemlib:niobium_plate','chemlib:niobium_ingot'),
    event.recipes.create.pressing('chemlib:ruthenium_plate','chemlib:ruthenium_ingot'),
    event.recipes.create.pressing('chemlib:palladium_plate','chemlib:palladium_ingot'),
    event.recipes.create.pressing('chemlib:silver_plate','chemlib:silver_ingot'),
    event.recipes.create.pressing('chemlib:cadmium_plate','chemlib:cadmium_ingot'),
    event.recipes.create.pressing('chemlib:indium_plate', 'chemlib:indium_ingot'),
    event.recipes.create.pressing('chemlib:potassium_plate','chemlib:potassium_ingot'),
    event.recipes.create.pressing('chemlib:titanium_plate','chemlib:titanium_ingot'),
    event.recipes.create.pressing('chemlib:scandium_plate','chemlib:scandium_ingot'),
    event.recipes.create.pressing('chemlib:vanadium_plate','chemlib:vanadium_ingot'),
    event.remove({ output: 'chemlib:tin_nugget' }),
    event.remove({ input: 'chemlib:tin_nugget' }),
    event.remove({ input: 'chemlib:tin_plate' }),
    event.remove({ output: 'chemlib:tin_ingot' }),
    event.remove({ input: 'chemlib:tin_ingot' }),
    event.remove({ output: 'chemlib:tin_block' }),
    event.remove({ input: 'chemlib:tin_block' }),
    event.remove({id: 'mekanism:processing/tin/ingot/from_block'})
    event.shapeless(Item.of('mekanism:ingot_tin'), ["mekanism:block_tin"]),
    event.remove({id: 'alchemistry:dissolver/plates/tin'})
    event.remove({id: 'alchemistry:dissolver/plates/tin'})
})