let movimento='peão';


switch( movimento.toLowerCase()){
  case 'rei':
    console.log("Rei, movimento de uma casa em todas as direções");
    break;

    case 'bispo':
      console.log('Bispo, movimento nas diagonais');
      break;
    
    case 'peão':
      console.log('peão, move one home to forward ');
      break;

    default:console.log('Erro!');
}