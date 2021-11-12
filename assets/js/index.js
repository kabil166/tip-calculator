

const calc=()=>{

    let CurID = document.getElementById("currency");
    let Currency = CurID[CurID.selectedIndex].value;

    let Amount = document.getElementById("amount").value;

    let SerID = document.getElementById("service");
    let Service = SerID[SerID.selectedIndex].value;

    let People = document.getElementById("people").value;

    let Tip = (parseInt(Amount)*parseInt(Service))/(100*parseInt(People)).toFixed(2);
    if(isNaN(Tip)){
        const String = "Wrong Input";
        document.getElementById("tip").innerHTML = String;
    }else{
        const String = "Per Person";
        document.getElementById("curr").innerText = Currency;
        document.getElementById("tip").innerText = Tip.toFixed(2);
        document.getElementById("default").innerText = String;
    }
    

}

const reset=()=>{
    document.getElementById("inputs").reset();
}