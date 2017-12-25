// Epilush opisthotomias


function georesection(selTrigonPointList, angleA, angleB){

angleA = angleA*Math.PI/200;	
angleB = angleB*Math.PI/200;

// var E1 = a[0]-c[0]+ ((c[1]-a[1]) / Math.tan(angleA));
// var E2 = b[0]-c[0]+ ((b[1]-c[1]) / Math.tan(angleB));

// var Z1 = a[1]-c[1]+ ((a[0]-c[0]) / Math.tan(angleA));
// var Z2 = b[1]-c[1]+ ((c[0]-b[0]) / Math.tan(angleB));

var E1 = (selTrigonPointList[0].x - selTrigonPointList[1].x) + (selTrigonPointList[0].y - selTrigonPointList[1].y)/ Math.tan(angleA);
var E2 = (selTrigonPointList[2].x - selTrigonPointList[1].x) + (selTrigonPointList[2].y - selTrigonPointList[1].y)/ Math.tan(angleB);

var Z1 = (selTrigonPointList[0].y - selTrigonPointList[1].y) + (selTrigonPointList[0].x - selTrigonPointList[1].x)/ Math.tan(angleA);
var Z2 = (selTrigonPointList[2].y - selTrigonPointList[1].y) + (selTrigonPointList[1].x - selTrigonPointList[2].x)/ Math.tan(angleB);

l=(E2-E1)/(Z1-Z2);

var x = selTrigonPointList[1].x + (E1+l*Z1)/(1+Math.pow(l,2));
var y = selTrigonPointList[1].y + l*(x-selTrigonPointList[1].x);

return [x,y];
};