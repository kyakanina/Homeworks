const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
    const item = document.getElementsByTagName('p')[2]
    console.log(item.innerText)
    item.innerHTML = 'XENIA'
}

node_for_click_name.addEventListener("click",find_edit_name)


const node_for_click_surname = document.getElementById("for_click_surname")
function find_edit_surname(){
    const item = document.getElementsByTagName('p')[1]
    console.log(item.innerText)
    item.innerHTML = 'YAKANINA'
}

node_for_click_surname.addEventListener("click",find_edit_surname)
