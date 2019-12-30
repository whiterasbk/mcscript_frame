function 生成矿块_others(id, 几率, 高度) {
	//by 轮回
	var 矿石判断 = 0;
	var 生成判断 = Math.round(Math.random()) * 3;
	if (矿石判断 < 几率)
	{
		矿石x = getPlayerX() - Math.random() * 512;
		矿石y = Math.random() * 高度;
		矿石z = getPlayerZ() - Math.random() * 512;
		if (getTile(矿石x, 矿石y, 矿石z) == 1 && 矿石判断 < 几率)
		{
			setTile(矿石x, 矿石y, 矿石z, id);
			setTile(矿石x, 矿石y, 矿石z - 1, id);
			if (生成判断 == 0)
			{
				setTile(矿石x - 1, 矿石y - 1, 矿石z, id);
				setTile(矿石x - 1, 矿石y, 矿石z + 1, id);
				setTile(矿石x, 矿石y - 1, 矿石z, id);
 			}
			else if (生成判断 == 3)
			{
				setTile(矿石x + 1, 矿石y - 1, 矿石z, id);
				setTile(矿石x + 1, 矿石y, 矿石z, id);
				setTile(矿石x, 矿石y, 矿石z - 1, id);
			}
		}
	}
	矿石判断++;
}

function 矿物生成(y, 几率, id, min, max) {
	var x = getPlayerX() + (randomAlgorithms.boolean() ? 50 : -50) - randomAlgorithms.range(-50, 50);
	var z = getPlayerZ() + (randomAlgorithms.boolean() ? 50 : -50) - randomAlgorithms.range(-50, 50);

	if (!Level.canSeeSky(x, y, z) && randomAlgorithms.boolean(几率))
	{
		生成矿块_mine(x, y, z, id, min, max);
	}

}

function 生成矿块_mine(x, y, z, id, min, max) {
	setTile(x, y, z, id, 0);
	var mark_count = randomAlgorithms.range(min, max) - 1;
	var inside_mark = 0;

	分支(x, y, z);
    function 分支(xx, yy, zz) {
		var sides =
		{
			top : 	 {x : xx, y : yy + 1, z : zz},
			bottom : {x : xx, y : yy - 1, z : zz},
			front :  {x : xx, y : yy, z : zz + 1},
			behind : {x : xx, y : yy, z : zz - 1},
			left :   {x : xx - 1, y : yy, z : zz},
			right :  {x : xx + 1, y : yy, z : zz},
			randon_side : function() {
				switch (randomAlgorithms.range(1, 6))
				{
					case 1 : return this.top;break;
					case 2 : return this.bottom;break;
					case 3 : return this.front;break;
					case 4 : return this.behind;break;
					case 5 : return this.left;break;
					case 6 : return this.right;break;
				}
			}
		};
		if (inside_mark <= mark_count)
		{
			var which_side = sides.randon_side();

			setTile(which_side.x, which_side.y, which_side.z, id, 0);
			inside_mark ++;
			分支(which_side.x, which_side.y, which_side.z);

		}
	}
}

