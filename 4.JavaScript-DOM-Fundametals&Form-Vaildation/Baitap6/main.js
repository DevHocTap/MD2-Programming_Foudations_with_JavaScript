const itemList = document.getElementById('item-List');
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

addButton.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem);
});

removeButton.addEventListener('click', function() {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }else {
        alert('Danh sách đã trống!');
    }
});