ServerEvents.recipes(event => {
    event.recipes.create.pressing('chemlib:neodymium_plate', 'chemlib:neodymium_ingot'),
    event.recipes.create.pressing('chemlib:praseodymium_plate','chemlib:praseodymium_ingot'),
    event.recipes.create.pressing('chemlib:lanthanum_plate','chemlib:lanthanum_ingot'),
    event.recipes.create.pressing('chemlib:cerium_plate','chemlib:cerium_ingot'),
    event.recipes.create.pressing('chemlib:cesium_plate','chemlib:cesium_ingot'),
    event.recipes.create.pressing('chemlib:barium_plate','chemlib:barium_ingot'),
    event.recipes.create.pressing('chemlib:samarium_plate','chemlib:samarium_ingot'),
    event.recipes.create.pressing('chemlib:europium_plate','chemlib:europium_ingot'),
    event.recipes.create.pressing('chemlib:gadolinium_plate','chemlib:gadolinium_ingot'),
    event.recipes.create.pressing('chemlib:tungsten_plate','chemlib:tungsten_ingot'),
    event.recipes.create.pressing('chemlib:terbium_plate','chemlib:terbium_ingot'),
    event.recipes.create.pressing('chemlib:holmium_plate','chemlib:holmium_ingot'),
    event.recipes.create.pressing('chemlib:dysprosium_plate','chemlib:dysprosium_ingot'),
    event.recipes.create.pressing('chemlib:thulium_plate','chemlib:thulium_ingot'),
    event.recipes.create.pressing('chemlib:erbium_plate','chemlib:erbium_ingot'),
    event.recipes.create.pressing('chemlib:lutetium_plate','chemlib:lutetium_ingot'),
    event.recipes.create.pressing('chemlib:ytterbium_plate','chemlib:ytterbium_ingot'),
    event.recipes.create.pressing('chemlib:hafnium_plate','chemlib:hafnium_ingot'),
    event.recipes.create.pressing('chemlib:tantalum_plate','chemlib:tantalum_ingot'),
    event.recipes.create.pressing('chemlib:rhenium_plate','chemlib:rhenium_ingot'),
    event.recipes.create.pressing('chemlib:iridium_plate','chemlib:iridium_ingot'),
    event.recipes.create.pressing('chemlib:platinum_plate','chemlib:platinum_ingot'),
    event.recipes.create.pressing('chemlib:thallium_plate','chemlib:thallium_ingot'),
    event.recipes.create.pressing('chemlib:bismuth_plate','chemlib:bismuth_ingot'),
    event.remove({ output: 'chemlib:lead_metal_block' }),
    event.remove({ output: 'chemlib:lead_nugget' }),
    event.remove({ output: 'chemlib:lead_ingot' }),
    event.remove({ output: 'chemlib:lead_dust' }),
    event.remove({ input: 'chemlib:lead_metal_block' }),
    event.remove({ input: 'chemlib:lead_nugget' }),
    event.remove({ input: 'chemlib:lead_ingot' }),
    event.remove({ input: 'chemlib:lead_dust' }),
    event.recipes.create.pressing('chemlib:lead_plate','mekanism:ingot_lead'),
    event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "type": "forge:not",
                "value": {
                  "type": "forge:tag_empty",
                  "tag": 'forge:pellets/polonium'
                }
              }
            ],
            "recipe": {
              "type": "alchemistry:dissolver",
              "group": "alchemistry:dissolver",
              "input": {
                "count": 1,
                "ingredient": {
                  "tag": 'forge:pellets/polonium'
                }
              },
              "output": {
                "groups": [
                  {
                    "probability": 100.0,
                    "results": [
                      {
                        "count": 16,
                        "item": 'chemlib:polonium'
                      }
                    ]
                  }
                ],
                "rolls": 1,
                "weighted": false
              }
            }
          }
        ]
      }
    ),
event.custom({
    "type": "alchemistry:compactor",
    "group": "alchemistry:compactor",
    "input": {
      "count": 16,
      "ingredient": {
        "item": 'chemlib:polonium'
      }
    },
    "result": {
      "item": 'forge:pellets/polonium'
    }
  }),
  event.recipes.create.pressing('mekanism:pellet_polonium','chemlib:polonium_plate'),
  event.recipes.create.pressing('chemlib:polonium_plate','chemlib:polonium_ingot'),
  event.recipes.create.crushing('chemlib:polonium_dust', 'mekanism:pellet_polonium').processingTime(400),
  event.recipes.create.pressing('chemlib:osmium_plate','mekanism:osmium_ingot'),
  event.custom({
    "type": "alchemistry:compactor",
    "group": "alchemistry:compactor",
    "input": {
      "count": 16,
      "ingredient": {
        "item": 'chemlib:osmium'
      }
    },
    "result": {
      "item": 'mekanism:dust_osmium'
    }
  }),
  event.remove({ output: 'chemlib:tin_nugget' }),
  event.remove({ input: 'chemlib:tin_nugget' }),
  event.remove({ output: 'chemlib:tin_ingot' }),
  event.remove({ input: 'chemlib:tin_ingot' }),
  event.remove({ output: 'chemlib:tin_block' }),
  event.remove({ input: 'chemlib:tin_block' }),
  event.recipes.create.pressing('chemlib:osmium_plate','mekanism:ingot_osmium'),
  event.remove({ output: 'chemlib:gold_plate' }),
  event.remove({ input: 'chemlib:gold_plate' }),
  event.remove({input: 'chemlib:gold_dust'}),
  event.remove({output: 'chemlib:gold_dust'})
})