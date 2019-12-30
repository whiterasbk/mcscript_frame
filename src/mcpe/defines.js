
function defineItems() {
	
}
function defineBlocks() {
	
	//var blocksJsonText = null;
//	if (package_test_debug) 
		//blocksJsonText = readText("/storage/emulated/0/JavaScriptProjects/Library/testDir/blocks.json");
//	else
//		blocksJsonPath = getTextForomPackage(PackageFiles.blocks);
//		
	
	var blocksJsonText = getTextFromPackage(PackageFiles.blocks);
	var root = new org.json.JSONArray(blocksJsonText);
	
    for(var i = 0; i < root.length(); i++) {
		var block = root.getJSONObject(i);
		if (block.isNull("name") || block.isNull("id") || block.isNull("texture")) throw ArgumentException("name, id or texture can't be null");
        var id = (block.getInt("id"));
		
		if (! (block.isNull("isLiquid"))) {
			if ((block.getBoolean("isLiquid"))) Liquiddefiner(block); else Blockdefiner(block);
		} else {
			Blockdefiner(block);
		}
		
		SetBlockProperties(block);
	}
}

function Liquiddefiner(block){
	
	var name = (block.getString("name"));
    var id = (block.getInt("id"));
	var textureObject = block.getJSONObject("texture");
	var extendsFrom = 8;//MCPEDefaultProperties.LiquidBlock.def_extendsFrom;//水
	
	var LiquidTexture = {
		still:null,
		flow: null
	};
				
	if (!block.isNull("extendsFrom")) {extendsFrom = (block.getInt("extendsFrom"));}
	if (!block.isNull("ef")) {extendsFrom = (block.getInt("ef"));}
					
	LiquidTexture.still = (textureObject.getString("still"));
	if (!textureObject.isNull("s")) LiquidTexture.still = textureObject.getString("s");
	LiquidTexture.flow = (textureObject.getString("flow"));
	if (!textureObject.isNull("f")) LiquidTexture.flow = textureObject.getString("f");
				
	Block.defineLiquidBlock(id, name, [["" + LiquidTexture.still], ["" + LiquidTexture.flow]], extendsFrom);
}

function Blockdefiner(block){
	
	var name = (block.getString("name"));
    var id = (block.getInt("id"));
	var textureObject = block.getJSONArray("texture");
	var blockTextures = [];
	var model = 0;//MCPEDefaultProperties.Block.def_model;
	var extendsFrom = 1;//MCPEDefaultProperties.Block.def_extendsFrom;
	var isHyaline = false;//MCPEDefaultProperties.Block.def_isHyaline;
	
	if (!block.isNull("model")) {model = (block.getInt("model"));}
	if (!block.isNull("isHyaline")) {isHyaline = (block.getBoolean("isHyaline"));}
	if (!block.isNull("extendsFrom")) {extendsFrom = (block.getInt("extendsFrom"));}
	if (!block.isNull("m")) {model = (block.getInt("m"));}
	if (!block.isNull("isH")) {isHyaline = (block.getBoolean("isH"));}
	if (!block.isNull("ef")) {extendsFrom = (block.getInt("ef"));}
				
	for (var r = 0; r < textureObject.length(); r++) {
		
		var singe = textureObject.getJSONObject(r);
		var defPermutation = MCPEDefaultProperties.Block.def_permutation;
		var blockTexture = {down:[null, defPermutation],up:[null, defPermutation],back:[null, defPermutation],front:[null, defPermutation],left:[null, defPermutation],right:[null, defPermutation]};
					
		//标准
		var tags = [["down", "d"], ["up", "u"], ["back", "b"], ["front", "f"], ["left", "l"], ["right", "r"]];
		for (var m in tags) {
			if (!singe.isNull(tags[m][0])) {
				blockTexture[tags[m][0]][0] = textureValueDisposer(singe.getJSONArray(tags[m][0]).getString(0), singe);
				blockTexture[tags[m][0]][1] = singe.getJSONArray(tags[m][0]).getInt(1);
			}
			if (!singe.isNull(tags[m][1])) {
				blockTexture[tags[m][0]][0] = textureValueDisposer(singe.getJSONArray(tags[m][1]).getString(0), singe);
				blockTexture[tags[m][0]][1] = singe.getJSONArray(tags[m][1]).getInt(1);
			}
		}
					
		blockTextures.push(blockTexture);
	}
				
	var objArr = [];
	for (var h in blockTextures) {
		objArr.push(blockTextures[h].down);
		objArr.push(blockTextures[h].up);
		objArr.push(blockTextures[h].back);
		objArr.push(blockTextures[h].front);
		objArr.push(blockTextures[h].left);
		objArr.push(blockTextures[h].right);
	}
	runOnUiThread(function(){
		MessageDialog("\nid :" + id + "\nname: " + name + "\nobjArr: " + objArr + "\nef: " + extendsFrom + "\nisH: " + isHyaline + "\nmodel: " + model);
	});
	Block.defineBlock(id, name, objArr, extendsFrom, isHyaline, model);
	
	function textureValueDisposer(value, json){
		if (value.length == 0 || typeof value == "number")
			return value;
		
		var head_str = value.substring(0, 1);
		if (head_str.equals("@")) {
			
			var head = value.split(": ");
			
			if (head[0] == BlockJsonTags.disposer.script) return eval("" + head[1]);
			if (head[0] == BlockJsonTags.disposer.file) return readText("" + head[1]);
			if (head[0] == BlockJsonTags.disposer.code) return eval("" + head[1]);
			if (head[0] == BlockJsonTags.disposer.package) return getTextFromPackage(head[1]);
			
			var heads = BlockJsonTags.rank;// [["down", "d"], ["up", "u"], ["back", "b"], ["front", "f"], ["left", "l"], ["right", "r"]];
			
			for (var each in heads){
				
				if (head[0].equals("@" + heads[each][0])) {
					return textureValueDisposer(json.getJSONArray("" + (head[0].replace("@", ""))).getString(0), json);
				}
				if (head[0] == ("@" + heads[each][1])) {
					return textureValueDisposer(json.getJSONArray("" + (head[0].replace("@", ""))).getString(0), json);
				}
			}
		} else {
			return value;
		}
	}
}

function SetBlockProperties(block){
	
    var id = (block.getInt("id"));
	var extraSets = BlockJsonTags.extraSets;
		
	for (var k in extraSets)
	{
		var method = "set" + extraSets[k][0].substring(0, 1).toUpperCase() + extraSets[k][0].substring(1, extraSets[k][0].length);
		if (!block.isNull(extraSets[k][0])) {
				
			if (extraSets[k][0] == (BlockJsonTags.shape)) {
				var shape = block.getJSONObject(BlockJsonTags.shape);
				var fromX = shape.getDouble(BlockJsonTags.FromX), toX = shape.getDouble(BlockJsonTags.ToX);
				var fromY = shape.getDouble(BlockJsonTags.FromY), toY = shape.getDouble(BlockJsonTags.ToY);
				var fromZ = shape.getDouble(BlockJsonTags.FromZ), toZ = shape.getDouble(BlockJsonTags.ToZ);
				Block.setShape(id, fromX, fromY, fromZ, toX, toY, toZ, 0);
			} else {
				Block[method](id, (block[extraSets[k][2]](extraSets[k][0])));
			}
				
		}
			
		if (!block.isNull(extraSets[k][1])) {
				
			if (extraSets[k][1] == (BlockJsonTags.shortening.shape)) {
				var shape = block.getJSONObject(BlockJsonTags.shortening.shape);
				var fromX = shape.getDouble(BlockJsonTags.shortening.FromX), toX = shape.getDouble(BlockJsonTags.shortening.ToX);
				var fromY = shape.getDouble(BlockJsonTags.shortening.FromY), toY = shape.getDouble(BlockJsonTags.shortening.ToY);
				var fromZ = shape.getDouble(BlockJsonTags.shortening.FromZ), toZ = shape.getDouble(BlockJsonTags.shortening.ToZ);
			
				Block.setShape(id, fromX, fromY, fromZ, toX, toY, toZ, 0);
			} else {
				Block[method](id, (block[extraSets[k][2]](extraSets[k][1])));
			}
		}
	}
}

function valueDisposer(value) {
	if (typeof value == "number" || typeof value == "boolean" || value.length == 0)
		return value;
			
	var head_str = value.substring(0, 1);
	if (head_str == "@") {
			
		var head = value.split(": ");
		if (head[0] == BlockJsonTags.disposer.script) return eval("" + head[1]);
		if (head[0] == BlockJsonTags.disposer.file) return readText("" + head[1]);
		if (head[0] == BlockJsonTags.disposer.code) return eval("" + head[1]);
		if (head[0] == BlockJsonTags.disposer.package) return getTextFromPackage(head[1]);
			
	} else {
		return value + "";
	}
}

function printf(tag, obj) {
	print(tag + ":" + obj);
}
