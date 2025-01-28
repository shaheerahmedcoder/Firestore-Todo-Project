import { database } from "./firebaseconfig.js";

import { addDoc, collection , getDocs } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"; 


const form = document.querySelector("#form")
const description = document.querySelector("#description")
const text = document.querySelector("#text")
const div = document.querySelector(".div")
const dbArr = []

async function getData() {
    const querySnapshot = await getDocs(collection(database, "Todos"));
querySnapshot.forEach((doc) => {
  console.log(doc.id , doc.data());
    dbArr.push(doc.data())
    
});
renderItems()
console.log(dbArr);
}

getData()

function renderItems() {
    dbArr.map((item)=>{
        div.innerHTML += `<div class="container">
            <h1>Title : ${item.title}</h1>
            <p>Description : ${item.description}</p>
        </div>`
    })
}

form.addEventListener("submit",async (event)=>{
    event.preventDefault()
    console.log(text.value);
    console.log(description.value);
    
    try {
        const docRef = await addDoc(collection(database, "Todos"), {
            title : text.value,
            description : description.value

        });
        div.innerHTML += `<div class="container">
        <h1>Title : ${text.value}</h1>
        <p>Description : ${description.value}</p>
        </div>`
        if(title.value == "undefined" || description.value == "undefined"){
            div.innerHTML = `<div class="container">
        <h1>Title : </h1>
        <p>Description : </p>
        </div>`
        }else{
            div.innerHTML += `<div class="container">
        <h1>Title : ${text.value}</h1>
        <p>Description : ${description.value}</p>
        </div>`
        }
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    text.value = ""
    description.value = ""
})
