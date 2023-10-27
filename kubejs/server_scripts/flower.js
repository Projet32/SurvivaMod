// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.shapeless('1x ecologics:azalea_flower',[ 'minecraft:flowering_azalea_leaves'	]
	)
})


ServerEvents.tags('item', event => {

})