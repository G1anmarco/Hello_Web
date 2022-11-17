let btn=document.getElementById("submit");
btn.addEventListener("click", function(evt){
    evt.preventDefault();
    console.log("bottone cliccato");
    let x=parseInt(document.querySelector("#x").value);
    let y=parseInt(document.querySelector("#y").value);
    let sum=x+y;
    console.log(sum);
    let result=document.querySelector("#result");
    result.innerHTML=`la somma dei due numeri è ${sum} ` ;
});
let z={
    nome:"Ciccio",
    cognome:"Pasticcio",
    saluta: function(){
        console.log("ciao da "+this.nome);
    }
};
z.saluta();
function loadData(){
    let xhttp=new XMLHttpRequest();
    xhttp.onload=function(){
        console.log(this.responseText);
    };
    xhttp.open("get", "clients.json", true);
    xhttp.send();
    console.log(xhttp.responseText);
}
// loadData();
async function loadDataFetch(){
    // let pc=fetch("clients.json");
    // let pt=pc.then(function(response){
    //     return response.text();
    // });
    // pt.then(function(t){
    //     console.log(t);
    // });

    //1) Inserire bottone sulla pagina con scritto "carica dati"
    //2) Al click deve partire una funzione che scarica i dati di clients.json
    //3) Creare nuove righe in una tabella vuota con i dati di clients.json

    // fetch("clients.json")
    // .then(r=>r.json())
    // .then(t=>console.log(t));


    let response=await fetch("clients.json");
    let csArray=await response.json();
    console.log(csArray);
}
loadDataFetch();