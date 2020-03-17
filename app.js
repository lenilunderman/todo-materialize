const form = document.querySelector('.form')
const listItems = document.querySelector('.collection')



form.addEventListener('submit', e => {
    e.preventDefault()
    
    const business = form.business.value.trim();
    const location = form.location.value.trim();
    
    if (business.length <= 0 || location.length <= 0){
        window.alert("Please complete the form.")
    }
    else {

        displayTodo(business,location)
        form.reset()
    }
    
});


// create a function to display the li tag
const displayTodo = (business,location) => {
    const layoutHTML = ` <li class="collection-item">
                            <span > ${business} <br> <i class="material-icons secondary-content">delete</i> <h6> ${location}</h6></span>
                        </li>`
    listItems.innerHTML += layoutHTML

};

// delete todo Function
// delete todos
listItems.addEventListener('click', e => {
    if(e.target.classList.contains('material-icons')){
        console.log(e.target.parentElement.remove())
    }
 });

