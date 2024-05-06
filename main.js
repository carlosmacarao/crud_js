'use strict'

function openModal() {
    document.getElementById('modal').classList.add('active')
}


function closeModal() {
    document.getElementById('modal').classList.remove('active')
}   
     
const temClient = {
    nome: "Agnel",
    email: "agnelgapa@gmail.com",
    celular: "840167324",
    cidade: "Beira"
}

// CRUD 

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    console.log(db_client)
    db_client.push(client)
     localStorage.setItem("db_client", JSON.stringify(db_client))
}

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)    

document.getElementById('modalClose')
    .addEventListener('click', closeModal)   
    
 //   git config --global user.email "you@example.com"
 //   git config --global user.name "Your Name"