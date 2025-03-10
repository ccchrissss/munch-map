// ~~~~~~~~~
// Meal Plan Form Submission Location Reload
// ~~~~~~~~~

// const postReqReloadFix = (e) => {
//     e.preventDefault()
//     window.location.reload()
//     // setTimeout( e => {
//     //     // do i need to use prevent default before setTimeout?
//     //     // console.log('window.location.reload()')
//     //     window.location.reload()
//     // }, 1000 )
// }

const mondaySubmitBtn = document.querySelector('#monday-submit-btn')
const mondayFormEl = document.querySelector('#monday-form')

// mondayFormEl.addEventListener('submit', event => {
//     event.preventDefault()

//     const formData = new FormData(mondayFormEl)
//     const data = new URLSearchParams(formData)
//     fetch(`meal-plan/createMPFetch`, {
//         method: 'POST',
//         body: data
//     }).then(res => res.json())
//       .then(data => {
//         console.log('data: ', data)
//         location.reload()
//       })
//       .catch(error => console.log(error))
// })

   
// This one mostly works. the below function is the event handler that goes after 'submit'. The location.reload does not work. Also it throws a JSON.parse SyntaxError
mondayFormEl.addEventListener('submit', async event => {

    event.preventDefault()


    const formData = new FormData(mondayFormEl)
    const data = new URLSearchParams(formData)
    
    try {
        const response = await fetch(`meal-plan/createMPFetch`, {
            method: 'POST',
            body: data 
        })
        const jsonRes = await response.json()
        console.log('jsonRes: ', jsonRes)
        // console.log(response.json())
        location.reload()

    } catch(error) { 
        console.log(error)
    }

    // fetch(`meal-plan/createMPFetch`, {
    //     method: 'POST',
    //     body: data
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log('data: ', data)
    //     location.reload()
    //   })
    //   .catch(error => console.log(error))
})




const completeMealPlan = document.querySelectorAll('#meal-plan .item span.item-name.incomplete')
const incompleteMealPlan = document.querySelectorAll('#meal-plan .item span.item-name.complete')
const itemsMealPlan = document.querySelectorAll('#meal-plan .item span.item-name')

// const itemCompleted = document.querySelectorAll('.item span.completed')
// const deleteBtn = document.querySelectorAll('.fa-trash')

// addNumOfItem.addEventListener('click', _ => {
//     const itemCategory = 
//     fetch('/addNum', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             // numItem: tLikes
//         })
//     })
// })

// subNumOfItem.addEventListener('click', _ => {
//     fetch('/subNum', {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
            
//         })
//     })
// })


// ~~~~~~~~~
// Meal Plan Delete Functionality Start
// ~~~~~~~~~
// const deleteBtn = document.querySelectorAll('.fa-trash')
const deleteBtn = document.querySelectorAll('.meal-plan-trash')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

async function deleteItem(){
    // const itemText = this.parentNode.childNodes[1].innerText
    let id = this.parentNode.id
    // console.log(this.parentNode)

    try{
        const response = await fetch('meal-plan/deleteMealPlanItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'idFromJS': id
            })
        })
      const data = await response.json()
    //   console.log('data: ', data)
      location.reload()

  }catch(err){
      console.log(err)
  }
}
// ~~~~~~~~~
// Meal Plan Delete Functionality End
// ~~~~~~~~~

// ~~~~~~~~~
// Meal Plan Mark Complete Functionality Start
// ~~~~~~~~~
Array.from(completeMealPlan).forEach((element)=>{
    element.addEventListener('click', markCompleteMealPlan)
})

// console.log('complete: ', Array.from(completeMealPlan))

Array.from(incompleteMealPlan).forEach((element)=>{
    element.addEventListener('click', markIncompleteMealPlan)
})

// console.log('incomplete: ', Array.from(incompleteMealPlan))


async function markCompleteMealPlan(){

    let id = this.parentNode.id

    // console.log('id: ', id)
    // console.log('markIncomplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`meal-plan/markCompleteMealPlan`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromJS': id
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncompleteMealPlan(){

    let id = this.parentNode.id

    // console.log('id: ', id)
    // console.log('markIncomplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`meal-plan/markIncompleteMealPlan`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromJS': id
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// ~~~~~~~~~
// Meal Plan Mark Complete Functionality End
// ~~~~~~~~~


// ~~~~~~~~~
// Meal Plan Edit Functionality Start
// ~~~~~~~~~
const showNoteBtn = document.querySelectorAll('.fa-sticky-note')
// const noteInput = document.querySelector('.item-note-form')
const notes = document.querySelector('.item-note')
const notesSaveBtn = document.querySelectorAll('.save-button')

Array.from(showNoteBtn).forEach( element => {
    // console.log('Array.from(showNoteBtn): ', showNoteBtn)
    element.addEventListener('click', addNoteToItem)
})

function addNoteToItem() {
    // console.log('notes: ', notes)
    // console.log('this: ', this)

    // console.log('the node list: ', this.parentNode.parentNode.childNodes)
    // console.log('the node list: ', this.parentNode.childNodes)
    // document.querySelector('.item-note-form').style.display = 'block'

    // notes.classList.toggle('item-note-display-toggle')
    this.parentNode.childNodes[11].classList.toggle('item-note-display-toggle')
    // notesSaveBtn.classList.toggle('button-display-toggle')
    this.parentNode.childNodes[13].classList.toggle('button-display-toggle')
    // console.log('Note button has been clicked')
}


Array.from(notesSaveBtn).forEach( element => {
    // console.log('Array.from(showNoteBtn): ', showNoteBtn)
    element.addEventListener('click', editNote)
})


async function editNote(){
    const noteText = this.parentNode.childNodes[11].innerText
    const id = this.parentNode.id
    const checkmark = this.parentNode.childNodes[14]

    // console.log('id', id)
    // console.log(this.parentNode.childNodes)

    // id = id.charAt(0).toUpperCase() + id.slice(1)
    // console.log('editNote id: ', id)
    // console.log(itemText)
    // console.log(noteText)

    try{
        const response = await fetch(`meal-plan/editNoteMealPlan`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromJS': id,
                'noteFromJS': noteText
            })
          })
        const data = await response.json()
        // console.log(data)

        checkmark.classList.add('checkmark-display')
        setTimeout( _ => {
            checkmark.classList.remove('checkmark-display')
        }, 2000)
        // location.reload()
    }catch(err){
        console.log(err)
    }
}



// ~~~~~~~~~
// Meal Plan Edit Functionality End
// ~~~~~~~~~















// ~~~~~~~~~
// Grocery List Start
// ~~~~~~~~~

const increase = document.querySelectorAll('.add-num-button')
const decrease = document.querySelectorAll('.sub-num-button')
const incompleteGroceryList = document.querySelectorAll('#grocery-list .item span.item-name.incomplete')
const completeGroceryList = document.querySelectorAll('#grocery-list .item span.item-name.complete')

// console.log(Array.from(incompleteGroceryList))
// const testIncGroceryList = document.querySelectorAll('#grocery-list .item span.item-name.incomplete')
// const testComGroceryList = document.querySelectorAll('#grocery-list .item span.item-name.complete')

// console.log('testIncGroceryList', Array.from(testIncGroceryList))
// console.log('testComGroceryList', Array.from(testComGroceryList))



Array.from(incompleteGroceryList).forEach((element)=>{
    element.addEventListener('click', markCompleteGroceryList)
})
Array.from(completeGroceryList).forEach((element)=>{
    element.addEventListener('click', markIncompleteGroceryList)
})

// console.log('incomplete: ', Array.from(incompleteGroceryList))
// console.log('complete: ', Array.from(completeGroceryList))



// Array.from(itemCompleted).forEach((element)=>{
//     element.addEventListener('click', markUnComplete)
// })

Array.from(increase).forEach(element => {
    element.addEventListener('click', increaseNumOfItem)
})

Array.from(decrease).forEach(element => {
    element.addEventListener('click', decreaseNumOfItem)
})

// console.log('increase: ', Array.from(increase))
// console.log('decrease: ', Array.from(decrease))

async function increaseNumOfItem(){
    // const itemName = this.parentNode.querySelector('.item-name').innerText
    const numItem = this.parentNode.querySelector('.num-of-item').innerText

    const id = this.parentNode.id
    // console.log('id ', id)

    // console.log('itemNameS', itemNameS)
    // console.log('numItemS:', numItemS)

    try{
        const response = await fetch('grocery-list/increaseNumItemGroceryList', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'idFromJS': id,
              'numItem': numItem
            })
          })
        const data = await response.json()
        // console.log(data)

        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function decreaseNumOfItem(){
    // const itemName = this.parentNode.querySelector('.item-name').innerText
    const numItem = this.parentNode.querySelector('.num-of-item').innerText

    const id = this.parentNode.id
    // console.log('id ', id)

    // console.log('itemNameS', itemNameS)
    // console.log('numItemS:', numItemS)

    try{
        const response = await fetch('grocery-list/decreaseNumItemGroceryList', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'idFromJS': id,
              'numItem': numItem
            })
          })
        const data = await response.json()
        // console.log(data)

        location.reload()

    }catch(err){
        console.log(err)
    }
}


async function markCompleteGroceryList(){

    let id = this.parentNode.id

    // console.log('id: ', id)
    // console.log('markComplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`grocery-list/markCompleteGroceryList`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromJS': id
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncompleteGroceryList(){

    let id = this.parentNode.id

    // console.log('id: ', id)
    // console.log('markIncomplete this.parentNode.id: ', this.parentNode.id)

    try{
        const response = await fetch(`grocery-list/markIncompleteGroceryList`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromJS': id
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}





// ~~~~~~~~~
// Grocery List Delete Functionality Start
// ~~~~~~~~~
const deleteBtnGroceryList = document.querySelectorAll('.grocery-list-trash')

Array.from(deleteBtnGroceryList).forEach((element)=>{
    element.addEventListener('click', deleteItemGroceryList)
})

async function deleteItemGroceryList(){
    // const itemText = this.parentNode.childNodes[1].innerText
    // console.log(itemText)

    const id = this.parentNode.id
    // console.log(id)

    try{
        const response = await fetch('grocery-list/deleteItemGroceryList', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'idFromJS': id
            })
        })
      const data = await response.json()
    //   console.log(data)
      location.reload()

  }catch(err){
      console.log(err)
  }
}
// ~~~~~~~~~
// Grocery List Delete Functionality End
// ~~~~~~~~~