 
 let form = document.getElementById("form");
 let mailList = document.getElementById("mailList");

 const input = document.createElement("input");
 const label = document.createElement("input");
 getEmailList();
 createHTML();

/*******************testar att fetchen fungerar************/
 function getEmailList () {
    fetch("http://localhost:3006/users/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }) 
}

/***************skapar html strukturen*************/
 function createHTML (){
    const header = document.createElement("h1");
    header.innerText ="Mail övning";

    const button = document.createElement("button");

    input.placeholder = "e-mail";
    button.innerText="Save";
    label.placeholder= "username"

    button.addEventListener("click", addEmail)

    form.append(header, label, input, button );
 }


/************lägg till ny users************/
 function addEmail(){

        const newUser = {
            userName: label.value,
            userEmail: input.value
        };
        getEmail(newUser);
    }

/**********skicka till servern*********** */
    function getEmail(newUser){
    console.log("hej", newUser);

    fetch("http://localhost:3006/users/add/", {
        method: "POST",
        headers: {
        "Content-type": "application/json",
    },
    body:JSON.stringify(newUser)
    })    
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }) 
 }


