var PackageFiles = {
	blocks : "ini/mcpe/blocks.json"
};
var MCPEDefaultProperties = {
	LiquidBlock: {
		def_extendsFrom: 8
	},
	Block: {
		def_permutation: 0,
		def_model: 0,
		def_isHyaline: false,
		def_extendsFrom: 1
	}
};
var BlockJsonTags = {
	name: "name",
	id: "id",
	extendsFrom: "extendsFrom",
	isLiquid: "isLiquid",
	texture: "texture",
	still: "still",
	flow: "flow",
	model: "model",
	isHyaline: "isHyaline",
	shape: "shape", 
	FromX: "FromX",
	FromY: "FromY",
	FromZ: "FromZ",
	ToX: "ToX", 
	ToY: "ToY", 
	ToZ: "ToZ",
	
	shortening: {
		extendsFrom: "ef",
		still: "s",
		flow: "f",
		model: "m",
		isHyaline: "isH",
		shape: "s",
		FromX: "fx",
		FromY: "fy",
		FromZ: "fz",
		ToX: "tx", 
		ToY: "ty", 
		ToZ: "tz"
	},
	
	rank: [["down", "d"], ["up", "u"], ["back", "b"], ["front", "f"], ["left", "l"], ["right", "r"]],
	extraSets: [["color", "c", "getString"], ["destroyTime", "dt", "getDouble"], ["explosionResistance", "er", "getDouble"], ["friction", "f", "getDouble"], ["lightLevel", "ll", "getInt"], ["lightOpacity", "lo", "getInt"], ["redstoneConsumer", "rc", "getBoolean"], ["renderLayer", "rl", "getString"], ["shape", "s", "null"]],
	disposer: {
		script: "@script",
		code: "@code",
		file: "@file",
		package: "@package"
	}
};
