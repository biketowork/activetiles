const activeTile=document.querySelectorAll('.tile').length;

const clickedTiles=[];


 document.addEventListener('click', function () {
    if(!event.target.classList.contains('tile')) return;
    if (clickedTiles.includes(event.target)) return;
    event.target.classList.add('active');
    clickedTiles.push(event.target);
    console.log(clickedTiles)

    if (clickedTiles.length >=activeTile) {
        const interval=setInterval (()=>{

            const tile=clickedTiles.shift();
            tile.classList.remove('active');
            if (clickedTiles.length===0) {
            clearInterval(interval);
            }
        },300)
       
    }
 });
