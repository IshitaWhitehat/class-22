function isTouching(P1,P2){

    if(P1.x-P2.x<(P1.width+P2.width)/2&&P2.x-P1.x<(P1.width+P2.width)/2&&
      P1.y-P2.y<(P1.height+P2.height)/2&&P2.y-P1.y<(P1.height+P2.height)/2
    ){
      return true;
    }
    
    else{
      return false;
    }
}

function bounce(P1,P2){

if(P1.x-P2.x<(P1.width+P2.width)/2&&P2.x-P1.x<(P1.width+P2.width)/2){
  P1.velocityX *=-1;
  P2.velocityX *=-1;
}
if(P1.y-P2.y<(P1.height+P2.height)/2&&P2.y-P1.y<(P1.height+P2.height)/2){
  P1.velocityY *=-1;
  P2.velocityY *=-1;
}
}