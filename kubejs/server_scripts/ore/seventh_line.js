ServerEvents.recipes(event => {
    event.recipes.create.pressing('chemlib:francium_plate', 'chemlib:francium_ingot'),
    event.recipes.create.pressing('chemlib:radium_plate','chemlib:radium_ingot'),
    event.recipes.create.pressing('chemlib:thorium_plate','chemlib:thorium_ingot'),
    event.recipes.create.pressing('chemlib:actinium_plate','chemlib:actinium_ingot'),
    event.recipes.create.pressing('chemlib:protactinium_plate','chemlib:protactinium_ingot'),
    event.remove({ output: 'chemlib:uranium_metal_block' }),
    event.remove({ output: 'chemlib:uranium_nugget' }),
    event.remove({ output: 'chemlib:uranium_ingot' }),
    event.remove({ output: 'chemlib:uranium_dust' }),
    event.remove({ input: 'chemlib:uranium_metal_block' }),
    event.remove({ input: 'chemlib:uranium_nugget' }),
    event.remove({ input: 'chemlib:uranium_ingot' }),
    event.remove({ input: 'chemlib:uranium_dust' }),
    event.custom({
            "type": "forge:conditional",
            "recipes": [
              {
                "conditions": [
                  {
                    "type": "forge:not",
                    "value": {
                      "type": "forge:tag_empty",
                      "tag": "forge:pellets/plutonium"
                    }
                  }
                ],
                "recipe": {
                  "type": "alchemistry:dissolver",
                  "group": "alchemistry:dissolver",
                  "input": {
                    "count": 1,
                    "ingredient": {
                      "tag": "forge:pellets/plutonium"
                    }
                  },
                  "output": {
                    "groups": [
                      {
                        "probability": 100.0,
                        "results": [
                          {
                            "count": 16,
                            "item": "chemlib:plutonium"
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
            "item": "chemlib:plutonium"
          }
        },
        "result": {
          "item": "forge:pellets/plutonium"
        }
      })
})