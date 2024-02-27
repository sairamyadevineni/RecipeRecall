function fillForm(){
    let name = document.getElementById("name").value;
    let step1 = document.getElementById("step1").value;
    let step2 = document.getElementById("step2").value;
    let step3 = document.getElementById("step3").value;
    let step4 = document.getElementById("step4").value;
}

// function to show data from local storage
function showData(){
    var recipeList;
    if(localStorage.getItem("recipeList") == null){
        recipeList = [];
    }
    else{
        recipeList = JSON.parse(localStorage.getItem("recipeList"))
    }

    var html = "";
    
    recipeList.forEach(function (element , index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.step1 +"<br>"+ element.step2 +"<br>"+ element.step3 +"<br>"+ element.step4 +"<br>"+ "</td>";
        html += '<td><button onclick= "deleteData('+index+')" class="btn btn-danger">Delete</button><button onclick= "updateData('+index+')" class="btn btn-warning">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Loads all data when document or page loads
document.onload = showData();

// function to add data to local storage
function AddData(){
    let name = document.getElementById("name").value;
    let step1 = document.getElementById("step1").value;
    let step2 = document.getElementById("step2").value;
    let step3 = document.getElementById("step3").value;
    let step4 = document.getElementById("step4").value;

    var recipeList;
    if(localStorage.getItem("recipeList") == null){
        recipeList = [];
    }
    else{
        recipeList = JSON.parse(localStorage.getItem("recipeList"))
    }

    recipeList.push({
        name: name,
        step1: step1,
        step2: step2,
        step3: step3,
        step4: step4
    });

    localStorage.setItem("recipeList" , JSON.stringify(recipeList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("step1").value = "";
    document.getElementById("step2").value = "";
    document.getElementById("step3").value = "";
    document.getElementById("step4").value = "";
}

// function to delete data from local storage
function deleteData(index){
    var recipeList;
    if(localStorage.getItem("recipeList") == null){
        recipeList = [];
    }
    else{
        recipeList = JSON.parse(localStorage.getItem("recipeList"))
    }

    recipeList.splice(index , 1);
    localStorage.setItem("recipeList", JSON.stringify(recipeList));
    showData();
}

// function to update/edit data in local storage
function updateData(index){
    //Submit button will hide and update button will show for 
    //updating of data in local storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Edit").style.display = "block";

    var recipeList;
    if(localStorage.getItem("recipeList") == null){
        recipeList = [];
    }
    else{
        recipeList = JSON.parse(localStorage.getItem("recipeList"))
    }

    document.getElementById("name").value = recipeList[index].name;
    document.getElementById("step1").value = recipeList[index].step1;
    document.getElementById("step2").value = recipeList[index].step2;
    document.getElementById("step3").value = recipeList[index].step3;
    document.getElementById("step4").value = recipeList[index].step4;

    document.querySelector("Edit").onclick = function(){
        recipeList[index].name = document.getElementById("name").value;
        recipeList[index].step1 = document.getElementById("step1").value;
        recipeList[index].step2 = document.getElementById("step2").value;
        recipeList[index].step3 = document.getElementById("step3").value;
        recipeList[index].step4 = document.getElementById("step4").value;

        localStorage.setItem("recipeList", JSON.stringify(recipeList));
        showData();

        document.getElementById("name").value = "";
        document.getElementById("step1").value = "";
        document.getElementById("step2").value = "";
        document.getElementById("step3").value = "";
        document.getElementById("step4").value = "";

        //Update button will hide and submit will show
        document.getElementById("Submit").style.display = "block";
        document.getElementById("Edit").style.display = "none";
    };


 
}
