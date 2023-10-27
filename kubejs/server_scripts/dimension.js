ServerEvents.recipes(event => {
	event.shaped(
        Item.of('mining_dimension:teleporter'),
        [ 
          'WGW', 
          'DPD', 
          'WGW'  
        ],
        {
          P: 'minecraft:iron_pickaxe', 
          G: 'minecraft:gold_ingot',
          D: 'minecraft:cobbled_deepslate',
          W: '#minecraft:logs'
        }
      )
    event.remove({ id: 'mining_dimension:teleporter' })
    event.shapeless(
        Item.of('mekanism:block_salt'),
        [ 
          'biomesoplenty:dried_salt',
          'minecraft:water_bucket'
        ]   
      )
    event.smelting('biomesoplenty:dried_salt', 'mekanism:block_salt')

})