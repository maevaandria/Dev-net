
// -------------- Mouse animation --------------
let coord = {x:0, y:0};
let cercles = document.querySelectorAll(".circle");
//learnui.design/tools/gradient-generator.html
const couleur = [
    "#60dfcd",
    "#59decf",
    "#45dbd3",
    "#12d6da", 
    "#00d0e3",
    "#00c8ed",
    "#00bff6",
    "#00b5fc",
    "#00abff",
    "#00a3ff",
    "#009cff",
    "#1e9afe"
].reverse();
//init
cercles.forEach( (cercle, index) => {
    cercle.x = 0;
    cercle.y = 0;
    cercle.style.backgroundColor = couleur[index % couleur.length];
});
//get coord du curseur
window.addEventListener("mousemove", (e) => {
    coord.x = e.clientX;
    coord.y = e.clientY;
})
//anim du curseur
let cercleAnime = () => {
    //Pos
    let x = coord.x;
    let y = coord.y;

    cercles.forEach( (cercle, index) => {
        //rectif en f° pos curseur
        cercle.style.left = x - 5 + "px";
        cercle.style.top = y - 3 + "px";
        //retouche scale
        cercle.style.scale = (cercles.length - index) / cercles.length;

        cercle.x = x;
        cercle.y = y;
        //transition et pos de autre cercle pour créer l'animation
        const nextCercle = cercles[index + 1] || cercles[0];
        x+= (nextCercle.x - x) * 0.4;
        y+= (nextCercle.y - y) * 0.4;
    });
    //debug pos lors mvt curseur finished, pour ne former qu'un seule cercle 
    requestAnimationFrame(cercleAnime);
}
cercleAnime();
