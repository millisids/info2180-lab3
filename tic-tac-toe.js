document.addEventListener('DOMContentLoaded',() => {

    const board = document.getElementById('board');
    const cells= board.querySelectorAll('div');

    cells.forEach(cell=>cell.classList.add('square'));


    



    let c_player='X';
    let gamestate=["","","","","","","","",""];

    cells.forEach((cell,index) => {
        cell.addEventListener('click',() => {

        if(cell.textContent===''){
            cell.textContent = c_player;
            cell.classList.add(c_player);
            gamestate[index]=c_player;

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


   });