/**
* Get the modifier given a characteristic value.
* @param {Number} stat Value of the characteristic
* @return {Number} Modifier of the characteristic
**/
function getModifier(stat){
  let characteristic = [-10, -4, -3, -2, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6];
  return characteristic[stat];
}

/**
* Get the base value of the PV given the constitution.
* @param {Number} con Constitution value
* @return {Number} PV base
**/
function getPVBase(con){
  let PV = [0, 5, 15, 30, 55, 65, 75, 85, 95, 110, 125, 140, 155, 175, 195, 215, 240, 265, 300, 340, 400];
  return PV[con];
}

/**
* Get the base value of the speed given the dexterity.
* @param {Number} dex Dexterity value
* @return {Number} Speed base
**/
function getSpeedBase(dex){
  let speed = [0, 0.5, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 80, 160, 240, 520, 1000, 4000, 20000, 100000];
  return speed[dex];
}

/**
* Get the base value of the load given the strength.
* @param {Number} str Strength value
* @return {Number} Load base
**/
function getLoadBase(str){
  let load = [0, 1, 10, 20, 40, 60, 100, 150, 210, 280, 360, 450, 550, 660, 780, 1000, 1500, 2000, 4000, 10000, 100000];
  return load[str];
}

/**
* Get the base value of the range given the perception.
* @param {Number} per Perception value
* @return {Number} Range base
**/
function getRangeBase(per){
  let range = [0, 1, 5, 10, 25, 50, 75, 100, 125, 150, 200, 300, 500, 1000, 5000, 10000, 50000, 100000, 200000, 500000, -1];
  return range[per];
}

/**
* Get the Ignorance modifier given the intelligence.
* @param {Number} intel Intelligence value
* @return {Number} Ignorance modifier
**/
function getIgnoranceBase(intel){
	if (intel<4){
  	return -6;
  }else if (intel == 4){
  	return -4;
  }else if (intel < 7){
    return -3;
  }else if (intel < 10){
    return -2;
  }
  return -1;
}

/**
* Get the Mastery modifier given the intelligence.
* @param {Number} intel Intelligence value
* @return {Number} Ignorance modifier
**/
function getMasteryBase(intel){
	if (intel<4){
  	return 0;
  }else if (intel == 4){
  	return 1;
  }else if (intel < 7){
    return 2;
  }else if (intel < 10){
    return 3;
  }
  return 4;
}

/**
* Get the Fatigue or Tiredness penalty given its value.
* @param {Number} val Fatigue / Tiredness value
* @return {Number} Penalty 
**/
function getFatigueBase(val){
  if (val > 4){
  	return 0;
  }else	if (val == 0){
  	return -16;
  }else if (val == 1){
  	return -8;
  }else if (val == 2){
    return -4;
  }else if (val == 3){
    return -2;
  }
  return -1;
}
