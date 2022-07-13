
let turn = 'x'; 
let title = document.querySelector(".title")
let equares = [] ;
function run( num1 , num2 , num3 ){  
    title.innerHTML = `${equares[num1]} winner`;  
    document.getElementById('item' + num1 ).style.background = '#000' ;
    document.getElementById('item' + num2).style.background = '#000' ;
    document.getElementById('item' + num3).style.background = '#000' ;
    setInterval(() => {
        title.innerHTML += '.';
    }, 1000) // infintly 
    setTimeout(() => {
      location.reload()   
    }, 3000); // once 
}
function Winner(){
   for(let i = 1  ; i < 10 ; i++ ){
    equares[i]  =  document.getElementById('item'+i ).innerHTML}
   if (equares[1] == equares[2] && equares[2] == equares[3] && equares[1] != '' ){
      run(1 , 2 ,3 )
   }else if (equares[4] == equares[5] && equares[5] == equares[6] && equares[4] != ''){
      run(4 ,5 ,6 )
   }else if (equares[7] == equares[8] && equares[8] == equares[9] && equares[7] != ''){
     run(7 , 8 ,9 )
}    else if (equares[1] == equares[4] && equares[4] == equares[7] && equares[1] != ''){
     run(1 ,4 ,7)
 }  else if (equares[2] == equares[5] && equares[5] == equares[8] && equares[2] != ''){
     run(2 ,5 ,8 )
}else if (equares[3] == equares[6] && equares[6] == equares[9] && equares[3] != ''){
     run(3 , 6 , 9 )
}else if (equares[3] == equares[5] && equares[5] == equares[7] && equares[3] != ''){
     run(3 ,5 ,7 )
 }else if (equares[1] == equares[5] && equares[5] == equares[9] && equares[1] != ''){
 run(1, 5 ,9 )

 }
}
 

 function game(id){ // equal add ebeny listner 
let element = document.getElementById(id);
   if (turn == 'x'  && element.innerHTML == ''){
       element.innerHTML = 'X' ;   
       turn = 'O' ; 
       title.innerHTML = 'O';
   }else if (turn === 'O'  && element.innerHTML == ''){
    element.innerHTML = 'O' ;   
    turn = 'x' ; 
    title.innerHTML = 'X ';
   }
   Winner();
}