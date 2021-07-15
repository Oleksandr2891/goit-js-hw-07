console.log(`В списке ${document.querySelectorAll('li.item').length} категории`);


const arrElements = document.querySelectorAll('li.item').forEach(item => {

    console.log(`Категория: "${item.children[0].textContent}" \nКоличество єлементов: ${item.children[1].children.length}`);

});
