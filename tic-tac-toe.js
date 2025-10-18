document.addEventListener('DOMContentLoaded',() => {

    const board = document.getElementById('board');
    const cells= board.querySelectorAll('div');
    const newGameBtn = document.querySelector('.btn');
    const status=document.getElementById('status');

    const OGstatus= status.textContent;

    cells.forEach(cell=>cell.classList.add('square'));


    



    let c_player='X';
    let gamestate=["","","","","","","","",""];
    let gameOv = false;

    const wins = [
     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7], 
     [2,5,8],[0,4,8],[2,4,6]
    ];

    function winner_C(){
        for (let i=0; i < wins.length; i++) {
            const a= wins[i][0], b= wins[i][1], c= wins[i][2];
            if(gamestate[a]!== ""&& gamestate[a]===gamestate[b]&&
               gamestate[a]===gamestate[c]
            ) {
              
               status.textContent = "Congratulation! "+  gamestate[a]  +" is the Winner"
               status.classList.add('you-won');
               return true;

            }

        }
        return false;
    }
    
    cells.forEach((cell,index) => {
        cell.addEventListener('click',() => {

        if(gameOv)return;

        if(cell.textContent===''){
            cell.textContent = c_player;
            cell.classList.add(c_player);
            gamestate[index]=c_player;

            if(winner_C()){
                gameOv =true;
                return;
            }

            if (c_player==='X'){
                c_player ='O';
            } else {
                c_player ='X';
            }
        }

        });

        cell.addEventListener('mouseover',()=> {
            cell.classList.add('hover');

        });

        cell.addEventListener('mouseout',()=>{
            cell.classList.remove('hover');

        });
    });

    newGameBtn.addEventListener('click',() => {

        cells.forEach(cell => {
            cell.textContent='';
            cell.classList.remove('X');
            cell.classList.remove('O');
            cell.classList.remove('hover');

        });

         gamestate=["","","","","","","","",""];
         c_player = 'X';
         gameOv = false;

         status.textContent =OGstatus;
         status.classList.remove('you-won');
    });


   });