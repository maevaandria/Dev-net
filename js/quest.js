// ------- D E C L A R A T I O N
// all btn rep
let btnRep = document.querySelectorAll(".btnRep");
//btn valid
let btnValid = document.querySelector(".btnValide");
let btnValid2 = document.querySelector('.btnValide2')
//elem quest 
let questAff = document.querySelector(".questionAff");

//valiud Btn section
let sectionValidBtn = document.querySelector(".validBtnSection");

//Compliment 
let compliment = document.querySelector(".compliment");
let repExact = document.querySelector(".reponse-exact");

//progress
let progress = document.querySelector(".nb-Progress");

let body = document.querySelector("body");



//BD QUEST
let questCatteg1 = [
    [
        "Quelle est la bonne syntaxe pour déclarer une variable en javascript ?",
        "Que fait la methode return dans une fonction ?",
        "Comment ajouter un élément à la fin d'un tableau en JS ?",
        "Comment accède-t-on à une proprieté d'un objet ?"
    ],
    [
        "Pourquoi les poules traversent-elles la route ?",
        "Que dit une baleine à l'autre baleine ?",
        "Pourquoi les bannane ne bronzent-elles jamais ?",
        "Que fait une abeille dans un bar ?"
    ],
    [
        "Quelle est la plus grande ile du monde ?",
        "Quelle est la capitale du Canada ?",
        "Qui a écrit les misérables ?",
        "Quel peintre est célèbre pour ces tableaux de nénuphars ?"
    ],
    [
        "Quelle est la capital de Madagascar ?",
        "Qui était le premier président de Madagascar après l'independance en 1960 ?",
        "Quel animale emblématique de Madagascar est connu pour ses grands yeux et son cri ?",
        "Quelle culture agricole est une source de revenu importante pour Madagascar ?"
    ]
]
let answerCatt1 = [
    [
        "var maVariable",
        "Renvoie une valeur",
        "array.push('elt')",
        "obj.property"
    ],
    [
        "Se rendre de l'autre coté",
        "Tu veux faire des bulles ?",
        "Elles se pèlent",
        "Elle prend une bzzz"
    ],
    [
        "Groeland",
        "Ottawa",
        "Victor Hugo",
        "Claude Monet"
    ],
    [
        "Antananarivo",
        "Philbert Tsiranana",
        "Lémurien",
        "Riz"
    ]
]
let suggAnswerCatt1 = [
    [
        ["var maVariable", "int maVariable", "variable maVariable"],
        ["Réinitialise la fonction", "Renvoie une valeur", "Arreter l'execution"],
        ["array.add('elt')","array.push('elt')", "array.insert('elt')"],
        ["obj.property","obj[property]", "obj->property"]
    ],
    [
        ["Eviter le poulailler", "Aller chez le coiffeur", "Se rendre de l'autre coté"],
        ["Salut !", "Tu veux faire des bulles ?", "Glou Glou"],
        ["Elles n'aiment pas le soleil","Elles restent à l'ombre", "Elles se pèlent"],
        ["Elle prend une bzzz","Faire des blagues", "Commande un soda"]
    ],
    [
        ["Madagascar", "Australie", "Groeland"],
        ["Montréal", "Ottawa", "Toronto"],
        ["Victor Hugo","Emille Zola", "Gustave FL"],
        ["Pablo Picasso","Salvador Dali", "Claude Monet"]
    ],
    [
        ["Mahajanga", "Antananarivo", "Toliara"],
        ["Didier Ratsiraka", "A.Rajoelina", "Philbert Tsiranana"],
        ["Lémurien","Cameléon", "Fosa"],
        ["Blé","Riz", "Cacao"]
    ]
    
]


let exitToOtherPage = (chemin) => {
    sessionStorage.clear();
    window.location.replace(chemin);
}

// compteur question
let cpt = 0;
//pogress value
let progresCpt = 0;
// compteur rep
let cptRepTMp = 0;

let catt = 0;
if(sessionStorage.getItem("categ") !== null)
    catt = parseInt(sessionStorage.getItem("categ"))

//session variable
const cptEtapeClef = "cptEtape";
const progreeEtapeClef = "progressEtape";

//avoir les donnés cpt etape
if(sessionStorage.getItem(cptEtapeClef) === null )
    sessionStorage.setItem(cptEtapeClef, 0);
else
    cpt = parseInt(sessionStorage.getItem(cptEtapeClef))

//progress etape
if(sessionStorage.getItem(progreeEtapeClef) === null)
    sessionStorage.setItem(progreeEtapeClef, 0);
else
    progresCpt = parseInt(sessionStorage.getItem(progreeEtapeClef));

//affichage progress bar
progress.value = progresCpt.toString();

//point par etape
let pointPerEtap = 0;
let clefPointPerEtape = "pointPerEtap";
if(sessionStorage.getItem(clefPointPerEtape) === null)
    sessionStorage.setItem(clefPointPerEtape, 0);
else
    pointPerEtap = parseInt(sessionStorage.getItem(clefPointPerEtape));

document.getElementById("cptPointPerEtape").textContent = pointPerEtap.toString();


let questContainer = document.querySelector("#mainContainer");
let affReslt = document.querySelector("#resultMainContainer");
//condition d'arret
if(cpt >= answerCatt1[catt].length)
{
    questContainer.classList.add("mainContainer-is-desactive");
    affReslt.classList.add("resultMainContainer-is-active");
    document.querySelector(".poinObt").textContent = pointPerEtap + " pts";
}else{
    questContainer.classList.remove("mainContainer-is-desactive");
    affReslt.classList.remove("resultMainContainer-is-active");
}
    





let suivant = (cptt) => {
    
    // init data question and  reponse
    questAff.textContent = questCatteg1[catt][cptt];
    btnRep.forEach( oneBtn => {
        oneBtn.textContent = suggAnswerCatt1[catt][cptt][cptRepTMp++];
    })
    // Event Btn rep
    btnRep.forEach( selectedBtn => {
        selectedBtn.addEventListener("focus", (e) => {
            //reinit to focus one
            btnRep.forEach( btn => btn.classList.remove("btnRep-is-focus"));
            //focus
            selectedBtn.classList.add("btnRep-is-focus");

            //is-btnRep-clicked => active Valid Btn
            btnValid.classList.add("btnValide-is-success");

            //valeur choisi
            let answer = selectedBtn.textContent;

            btnValid.addEventListener("click", (e2) => {
                //visibility compliment
                compliment.classList.add("compliment-active");
                if(answer == answerCatt1[catt][cptt])
                {
                    //css
                    sectionValidBtn.classList.add("validBtnSection-is-success");
                    compliment.classList.add("compliment-is-succes");
                    compliment.textContent = "Bonne réponse !";
                    
                }else{
                    //css
                    sectionValidBtn.classList.add("validBtnSection-is-lose")
                    compliment.textContent = "Mauvaise réponse !";
                    btnValid.classList.add("btnValide-is-lose");
                    repExact.classList.add("reponse-exact-is-active");
                    //compliment content
                    repExact.textContent = "La bonne : " + answerCatt1[catt][cptt];
                }
                //btn continue after validation
                btnValid.textContent = "Continuer";
                //event de cet btn
                btnValid.addEventListener("click", (e3) => {
                    //incrementation point
                    if(answer == answerCatt1[catt][cptt])
                        pointPerEtap+=5;
                    //progress bar value
                    progresCpt+= 100 / answerCatt1[catt].length ;
                    //incrementation etape (ème quest)
                    cpt++;
                    //envoie des information à stocker dans la session storage(Memoire d'un navigateur)
                    sessionStorage.setItem(cptEtapeClef, cpt);
                    sessionStorage.setItem(progreeEtapeClef, progresCpt);
                    sessionStorage.setItem(clefPointPerEtape, pointPerEtap);
                    //reactualisation de la page
                    window.location.reload();
                })
                
            });
        })
    })
}
suivant(cpt);

document.querySelector(".exitQuestion").addEventListener("click", (e) => exitToOtherPage("../page/categ.html"));