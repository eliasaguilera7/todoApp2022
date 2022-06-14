const addForm = document.querySelector('.add');
const list =document.querySelector('.todos');
const deleteLi = document.querySelectorAll('li');
const search =document.querySelector('.search input');




const generateTemplate = todo => {
 html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`

list.innerHTML += html;
}

addForm.addEventListener('submit', x=>{
    x.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', e=> {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodo = (term) =>{

Array.from(list.children)
.filter(x=>!x.textContent.toLowerCase().includes(term))
.forEach(x =>
x.classList.add('filtered'))

Array.from(list.children)
.filter(x=>x.textContent.toLocaleLowerCase().includes(term))
.forEach(x =>
x.classList.remove('filtered'))


};

// Search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodo(term);
});






/*const deleteButton = document.querySelectorAll('li');
const ula = document.querySelector('.list-group-item');
const ul= document.querySelector('ul');
const inputTodo= document.querySelector('.form-control')
const submitMsg = document.querySelector('.add');

//console.log(toDelete);
deleteButton.forEach(x => {

    x.addEventListener('click', x =>{
       // x.setAttribute('class', 'd-none')
       x.target.remove();
    ;})
});


//submitMsg.addEventListener('submit', x =>{
ula.addEventListener('submit', x =>{
x.preventDefault();
const msg ='Elias';
const li = document.createElement('li');
li.setAttribute('class','list-group-item d-flex justify-content-between align-items-center');
li.textContent = msg;



ula.prepend(li) ;
//.innerHTML+=`<li>${msg}</li>`
console.log('HEllo ' + `${msg}`);
});*/

/*ula.addEventListener('submit', x=>{
    console.log(x.target);
} )*/