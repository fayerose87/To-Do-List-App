// Add code so that list item is added when return is pressed
$('#input').keypress(function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    newItem();
  }
});

function newItem(){

 // Add a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

     if (inputValue === '') {
       alert("You must write something!");
     } else {
       $('#list').append(li);
       $('#input').val('');
     }
  
  // Cross out an item from the list of items:'
   function crossOut() {
    li.toggleClass('strike');
  }
    li.on('dblclick', crossOut);
      
  
  // Add the delete button "X": 
     let crossOutButton = $('<crossOutButton></crossOutButton>');
     crossOutButton.append(document.createTextNode('X'));
     li.append(crossOutButton);

     crossOutButton.on('click', deleteListItem);
  
  // Add CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem () {
     li.addClass('delete')
    }

   // Reorder the items: 
     $('#list').sortable();
  }