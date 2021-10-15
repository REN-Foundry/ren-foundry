import * from 'constants'

function getDamage(ca, cd, dmg, va){
  var diff = ca- cd;
  var mult = 0;
  if (diff<0){
    retun Math.ceil(diff/2);
  }
  cd = cd + va;
  diff = ca - cd;
  if (diff < 4){
    mult=0;
  }else if (diff <6){
    mult = 0.25;
  }else if (diff < 9) {
    mult = 0.5;
  }else if (diff < 11){
    mult = 0.75;
  }else if (diff < 14) {
    mult = 1;
  }else if (diff < 19){
    mult = 1.5;
  }else if (diff < 24) {
    mult = 2;
  }else if (diff < 30){
    mult = 3;
  }else if(diff < 38){
    mult = 4;
  }else{
    mult = 6;
  }
  return Math.floor(mult*dng);
}

function rollDice(failModifier){
  var res = 0;
  var d10 = Math.floor(Math.random() * 10)+1;
  res = res + d10;
  while (d10 == 10){
     d10 = Math.floor(Math.random() * 10)+1;
     res = res + d10;
  }
  if (res == 1){
    d10 = Math.floor(Math.random() * 10)+ 1 + failModifier;
    if (d10 >10){
      d10=10;
    }
    res = FAIL_MOD[d10];
  }
  return res;
}
