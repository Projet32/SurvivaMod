// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.shaped('1x jobsplus:hunters_sword_level_1',[
		"I I",
		"BD ",
		"SBI"
	], {
		I:'minecraft:iron_ingot',
		D: "minecraft:diamond",
		S: "minecraft:stick",
		B: "minecraft:iron_block"	}
	),
	event.shaped('1x jobsplus:hunters_sword_level_2',[
		"I I",
		"BD ",
		"SBI"
	], {
		I:'minecraft:gold_ingot',
		D: "jobsplus:hunters_sword_level_1",
		S: "minecraft:stick",
		B: "minecraft:gold_block"	}
	),
	event.shaped('1x jobsplus:hunters_sword_level_3',[
		"I I",
		"BD ",
		"SBI"
	], {
		I:'minecraft:diamond',
		D: "jobsplus:hunters_sword_level_2",
		S: "minecraft:stick",
		B: "minecraft:netherite_scrap"	}
	),
	event.shaped('1x jobsplus:hunters_sword_level_4',[
		"I I",
		"BD ",
		"SBI"
	], {
		I:'minecraft:netherite_ingot',
		D: "jobsplus:hunters_sword_level_3",
		S: "minecraft:stick",
		B: "minecraft:emerald_block"	}
	),
	event.shaped('1x jobsplus:hunters_bow_level_1',[
		"SI ",
		"SBD",
		"SI "
	], {
		I:'minecraft:iron_block',
		D: "minecraft:diamond",
		S: "minecraft:string",
		B: "minecraft:bow"	}
	),
	event.shaped('1x jobsplus:hunters_bow_level_2',[
		"IB ",
		"IDB",
		"IB "
	], {
		I:'minecraft:gold_ingot',
		D: "jobsplus:hunters_bow_level_1",
		B: "minecraft:gold_block"	}
	),
	event.shaped('1x jobsplus:hunters_bow_level_3',[
		"BI ",
		"BDE",
		"BI "
	], {
		I:'minecraft:diamond',
		E:"minecraft:diamond_block",
		D: "jobsplus:hunters_bow_level_2",
		B: "minecraft:netherite_scrap"	}
	),
	event.shaped('1x jobsplus:hunters_bow_level_4',[
		"IB ",
		"IDB",
		"IB "
	], {
		I:'minecraft:netherite_ingot',
		D: "jobsplus:hunters_bow_level_3",
		B: "minecraft:emerald_block"	}
	),
	event.shaped('1x jobsplus:curse_breaker',[
		"IBI",
		"BDB",
		"IBI"
	], {
		I:'minecraft:glow_lichen',
		D: "minecraft:book",
		B: "minecraft:emerald"	}
	)
})


ServerEvents.tags('item', event => {

})