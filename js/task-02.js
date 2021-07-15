const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const parentOfList = document.querySelector('#ingredients');


const listOfProducts = ingredients.map(item => {
  const itemOfProduct = document.createElement('li');
  itemOfProduct.textContent = item;

  return itemOfProduct;
});

parentOfList.append(...listOfProducts);



