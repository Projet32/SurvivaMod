// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.shaped('1x jobsplus:miners_hammer_level_1',[
		"BPB",
		"ISI",
		" S "
	], {
		I:'minecraft:iron_ingot',
		P: "#forge:tools/pickaxes",
		S: "minecraft:stick",
		B: "minecraft:iron_block"	}
	),
	event.shaped('1x jobsplus:miners_hammer_level_2',[
		"BDB",
		"BSB",
		" S "
	], {
		D: "jobsplus:miners_hammer_level_1",
		S: "minecraft:stick",
		B: "minecraft:gold_block"	}
	),
	event.shaped('1x jobsplus:miners_hammer_level_3',[
		"IDI",
		"ISI",
		"BSB"
	], {
		I:'minecraft:diamond',
		D: "jobsplus:miners_hammer_level_2",
		S: "minecraft:stick",
		B: "minecraft:netherite_scrap"	}
	),
	event.shaped('1x jobsplus:miners_hammer_level_4',[
		"BDB",
		"BSB",
		"ISI"
	], {
		I:'minecraft:netherite_ingot',
		D: "jobsplus:miners_hammer_level_3",
		S: "minecraft:stick",
		B: "minecraft:emerald_block"	}
	),
	event.shaped('1x jobsplus:lumberjack_axe_level_1',[
		"BDI",
		"BS ",
		"IS "
	], {
		I:'minecraft:iron_ingot',
		D: "#forge:tools/axes",
		S: "minecraft:stick",
		B: "minecraft:iron_block"	}
	),
	event.shaped('1x jobsplus:lumberjack_axe_level_2',[
		"BDI",
		"BS ",
		"IS "
	], {
		I:'minecraft:gold_ingot',
		D: "jobsplus:lumberjack_axe_level_1",
		B: "minecraft:gold_block",
		S: "minecraft:stick"	}
	),
	event.shaped('1x jobsplus:lumberjack_axe_level_3',[
		"EDI",
		"IS ",
		"BS "
	], {
		I:'minecraft:diamond',
		E:"minecraft:diamond_block",
		D: "jobsplus:lumberjack_axe_level_2",
		B: "minecraft:netherite_scrap",
		S: "minecraft:stick"	}
	),
	event.shaped('1x jobsplus:lumberjack_axe_level_4',[
		"BDB",
		"BSI",
		"IS "
	], {
		I:'minecraft:netherite_ingot',
		D: "jobsplus:lumberjack_axe_level_3",
		B: "minecraft:emerald_block",
		S: "minecraft:stick"	}
	)
})


ServerEvents.tags('item', event => {

})