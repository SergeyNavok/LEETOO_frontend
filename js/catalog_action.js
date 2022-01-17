const catalog = [
    {
        name: 'Сахарная паста для шугаринга "LEETOO" CLASSIC ULTRALIGHT (Ультрамягкая)',
        id: 1,
        category: 'уход за кожей',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem',
        price: 120,
        weight: 500
    },
    {
        name: 'Сахарная паста для шугаринга "LEETOO" CLASSIC LIGHT (Мягкая)',
        id: 2,
        category: 'уход за кожей',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: 80,
        weight: 1500
    },
    {
        name: 'Сахарная паста для шугаринга "LEETOO" CLASSIC MIDDLE (Средняя)',
        id: 3,
        category: 'скрабы',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        price: 100,
        weight: 700
    },
    {
        name: 'Сахарная паста для шугаринга "LEETOO" CLASSIC HARD (Плотная)',
        id: 4,
        category: 'гели',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        price: 70,
        weight: 500
    },
    {
        name: 'Сахарная паста Bandage Ананас (Бандажная)',
        id: 5,
        category: 'уход за кожей',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        price: 100,
        weight: 500
    },
    {
        name: 'Сахарная паста UltraLight Киви (Ультрамягкая)',
        id: 6,
        category: 'гели',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        price: 89,
        weight: 500
    },
    {
        name: 'Сахарная паста UltraLight Клубника (Ультрамягкая)',
        id: 7,
        category: 'уход за кожей',
        desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        price: 99,
        weight: 500
    }
]



const productsTag = document.getElementById('products');
const catalogDropdown = document.getElementById('dropdown_menu');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close');

catalogDropdown.addEventListener('change', changeCategory);
closeModalBtn.addEventListener('click', closeModalWindow);
modal.addEventListener('click', closeModalWindow);

const dropdownCategoryDefault = 'по умолчанию';
const dropdownCategoryAsc = 'сначала подешевле';
const dropdownCategoryDesc = 'сначала подороже';

renderDropdown();
renderCatalog(catalog);
//showProduct();



function getNewTag(tagName, className, content = null) {
    const newTag = document.createElement(tagName);
    newTag.classList.add(className);
    newTag.innerText = content;

    return newTag;
}


function getProductItem(item) {
    const productBlock = getNewTag('div', 'products__block');
    const productBlockItem = getNewTag('div', 'products__block-item');
    const productImg = getNewTag('img', 'img');

    productImg.src = 'img/product/' + item.id + '/product.jpg';
    productImg.alt = item.name;

    const productName = getNewTag('div', 'name', item.name);
    const productPrice = getNewTag('div', 'price', item.price + ' BYN');
    //const productId = getNewTag('div', 'product_id', item.id);

    productBlockItem.append(productImg, productName, productPrice);
    productBlock.append(productBlockItem);

    //
    productBlockItem.id = item.id;
    //
    //console.log('productBlock.value=' + productBlock.value);
    //productBlock.desription = item.desription;

    //productBlock.weight = item.weight;
    //console.log('productBlock.weight=' + productBlock.weight);


    //console.log(productBlock);
    //
    //productBlock.id(item.id);
    //console.log(item.id);
    //console.log(productBlock.id);
    //

    return productBlock;
}


function renderCatalog(catalog) {
    productsTag.innerHTML = '';
    const catalogCopy = catalog;
    const product = catalogCopy.map(item => getProductItem(item));
    productsTag.append(...product);
}


function changeCategory(event) {
    const category = event.target.value;
    const catalogCopy = catalog;

    switch (category) {
        case dropdownCategoryDefault:
            renderCatalog(catalogCopy);
            break;

        case dropdownCategoryAsc:
            const catalogAsc = catalogCopy.sort((a, b) => a.price - b.price);
            renderCatalog(catalogAsc);
            break;

        case dropdownCategoryDesc:
            const catalogDesc = catalogCopy.sort((a, b) => b.price - a.price);
            renderCatalog(catalogDesc);
            break;

        default:
            const catalogFiltered = catalogCopy.filter(item => item.category === category);
            renderCatalog(catalogFiltered);
    }
    //showProduct();
    //Event.stopPropognation(event);
}


function returnNewTagOption(nameCategory) {
    const newTagOption = document.createElement('option');
    newTagOption.value = nameCategory;
    newTagOption.innerText = nameCategory;

    return newTagOption;
}


function renderDropdown() {
    catalogDropdown.innerHTML = '';
    catalogDropdown.append(returnNewTagOption(dropdownCategoryDefault));
    catalogDropdown.append(returnNewTagOption(dropdownCategoryAsc));
    catalogDropdown.append(returnNewTagOption(dropdownCategoryDesc));

    const catalogCopy = catalog;

    const categoryProduct = new Set(catalogCopy.map(item => item.category));
    for (let item of categoryProduct) {
        catalogDropdown.append(returnNewTagOption(item));
    }
}

/*
function showProduct() {
    const productBlock = document.querySelectorAll('.products__block');
    arr = Array.from(productBlock);

    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', openModalWindow);
        //arr[i].addEventListener('click', product.onclick);


        //
        console.log(arr[i].value);
        //
    }

    //
    //console.log(arr[1].id.value);
    //
}
*/


function openModalWindow(value) {
    console.log('in_id=' + value);

    modal.classList.add('show');
    const catalogCopy = catalog;
    console.log(catalogCopy.find(item => item.id == value));

    //console.log(catalog.filter(id, value));
    //const value = getProductItem(catalog[id]);
    //console.log(value);
    //
    //console.log(id);
    //
}


function closeModalWindow() {
    modal.classList.remove('show');
    //Event.stopPropognation(modal);
}


//---------------------------------------------------------------------

products.onclick = function (event) {
    //if (event.target.className != 'products__block-item' && event.target.className != 'img' && event.target.className != 'name' && event.target.className != 'price') return;
    if (checkClassName(event.target.className)) {
        return;
    }

    switch (event.target.className) {
        case ('products__block-item'):
            //
            console.log('out_id=' + event.target.id);
            //
            openModalWindow(event.target.id);
            break;

        default:
            //
            console.log('out_id=' + event.target.parentElement.id);
            //
            openModalWindow(event.target.parentElement.id);
    }
}


function checkClassName (name) {
    const className = ['products__block-item', 'img', 'name', 'price'];
    if (className.includes(name));
}