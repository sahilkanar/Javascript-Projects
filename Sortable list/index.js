const items = document.querySelector(".sortable-list");
const b = document.querySelectorAll('.l');

b.forEach(item =>{
    item.addEventListener("dragstart",() => {
        setTimeout(() => item.classList.add('dragging'),0);
    });

    item.addEventListener("dragend",() => 
        item.classList.remove("dragging"));
    
});

const initlist = (e) =>{
    e.preventDefault();
    const dragitem = items.querySelector('.dragging');
    const siblings = [...items.querySelectorAll('.l:not(.dragging')];

    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight/2;
    });
    items.insertBefore(dragitem,nextSibling);
}


items.addEventListener("dragover",initlist);




