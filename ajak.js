let res=document.getElementById("data");

let xhr=new XMLHttpRequest();

let fet=document.getElementById("submit");
fet.onclick=function(){
    let con=document.getElementById("s");
    xhr.open("GET" ,`http://www.omdbapi.com/?t=${con.value}&apikey=94b577fc`);
    xhr.send();
    xhr.onloadend=function(){
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let Name=response["Title"];
            let Director=response["Director"];
            let Rating=response["imdbRating"];
            
            res.innerHTML="Name: "+Name+"<br>"+"Director: "+Director+"<br>"+"Imdb Rating: "+Rating+"<br>";
            
        } else {
            res[0].innerHTML = "Something went wrong.";
        };
    }; 
};

    
