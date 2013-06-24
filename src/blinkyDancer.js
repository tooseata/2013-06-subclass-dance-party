var BlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  var oldStep = blinkyDancer.step;
  return blinkyDancer;
};

BlinkyDancer.prototype.step = function(){
    oldStep();
    blinkyDancer.$node.toggle();
  };