// Somar todos os numeros do array e tirar a média deles

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media;

for(let i=0; i<numbers.length; i+=1){
  media=(soma+=numbers[i])/numbers.length
    
}
console.log(media);