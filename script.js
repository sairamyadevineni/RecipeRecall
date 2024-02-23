function fillForm(){
    let name = document.getElementById("name").value;
    let step1 = document.getElementById("step1").value;
    let step2 = document.getElementById("step2").value;
    let step3 = document.getElementById("step3").value;
    let step4 = document.getElementById("step4").value;
}

function showData(){
    var recipeList;
    if(localStorage.getItem("recipeList") == null){
        recipeList = [];
    }
    else{
        recipeList = JSON.parse(localStorage.getItem("recipeList"))
    }

    var html = "";
    
}