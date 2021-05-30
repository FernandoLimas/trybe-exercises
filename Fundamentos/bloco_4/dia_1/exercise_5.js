let angOne=60;
let angDois=60;
let angTres=60;
let somaDosAngulos= angOne+angDois+angTres;

let positive= angOne>0 && angDois>0 && angTres>0;

if(positive){
  if(somaDosAngulos==180){
    console.log(true);
  }else{
    console.log(false);
  }
}else{
  console.log('erro');
}