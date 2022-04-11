let form = document.getElementById('add-form');
let itemList = document.getElementById('items');
let filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);


//filter event
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value

    //create a new li Element
    let li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text to the input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    let deleteBtn = document.createElement('button');

    //    //add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm delete position-absolute bottom-0 end-0';

    //    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    // //append li to list
    itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you Sure')){
          let li =e.target.parentElement;
          itemList.removeChild(li);
      }
    }
}
//filter items
function filterItems(e){
    //convert text to lowercase
    let text=e.target.value.toLowerCase();
    //get list
    let items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function (item){
        let itemName=item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text)!=-1){
          item.style.display='block';
      }
      else{
          item.style.display='none';
      }
    });
}