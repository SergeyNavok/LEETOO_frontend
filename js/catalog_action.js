const catalog = [
    {
        'name': 'Сахарная паста для шугаринга "LEETOO" CLASSIC ULTRALIGHT (Ультрамягкая)',
        'id': 1,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem',
        'price': 120,
        'weight': 500
    },
    {
        'name': 'Сахарная паста для шугаринга "LEETOO" CLASSIC LIGHT (Мягкая)',
        'id': 2,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'price': 80,
        'weight': 1500
    },
    {
        'name': 'Сахарная паста для шугаринга "LEETOO" CLASSIC MIDDLE (Средняя)',
        'id': 3,
        'category': 'скрабы',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 100,
        'weight': 700
    },
    {
        'name': 'Сахарная паста для шугаринга "LEETOO" CLASSIC HARD (Плотная)',
        'id': 4,
        'category': 'гели',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 70,
        'weight': 500
    },
    {
        'name': 'Сахарная паста Bandage Ананас (Бандажная)',
        'id': 5,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 100,
        'weight': 500
    },
    {
        'name': 'Сахарная паста UltraLight Киви (Ультрамягкая)',
        'id': 6,
        'category': 'гели',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 89,
        'weight': 500
    },
    {
        'name': 'Сахарная паста UltraLight Клубника (Ультрамягкая)',
        'id': 7,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 99,
        'weight': 500
    }
]



//Куда будут записываться сформированные единицы продукции
//Обращался по id, потому как по-другому не удавалось достучаться
const productsTag = document.getElementById('products');

//Функция создания элементов на странице
function getNewTag(tagName, className, content = null) {
    const newTag = document.createElement(tagName);
    newTag.classList.add(className);
    newTag.innerText = content;

    return newTag;
}

//Функция формирования разметки продукта
function getProductItem(product) {
    const productBlock = getNewTag('div', 'products__block');
    //const linkTag = getNewTag('a', 'text-link');
    const productBlockItem = getNewTag('div', 'products__block-item');
    const productImg = getNewTag('img', 'img');

    //linkTag.href = 'product.html';
    productImg.src = 'img/product/' + product.id + '/product.jpg';
    productImg.alt = product.name;

    const productName = getNewTag('div', 'name', product.name);
    const productPrice = getNewTag('div', 'price', product.price + ' BYN');

    productBlockItem.append(productImg, productName, productPrice);
    //linkTag.append(productBlockItem);
    //productBlock.append(linkTag);
    productBlock.append(productBlockItem);

    return productBlock;
}

//Функция получения продуктов из каталога
function renderCatalog(catalog) {
    productsTag.innerHTML = '';
    const catalogCopy = catalog;
    const product = catalogCopy.map(item => getProductItem(item));
    productsTag.append(...product);
}

//Запуск функции отрисовки каталога
renderCatalog(catalog);





//Обработка выпадающего меню
const catalogDropdown = document.getElementById('dropdown_menu');

//Обработчик события
catalogDropdown.addEventListener('change', changeCategory);
const dropdownCategoryDefault = 'по умолчанию';
const dropdownCategoryAsc = 'сначала подешевле';
const dropdownCategoryDesc = 'сначала подороже';



//Функция обработки события
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

    checkProduct();
}



//Функция добавления категрий в выпадающее меню
function returnNewTagOption(nameCategory) {
    const newTagOption = document.createElement('option');
    newTagOption.value = nameCategory;
    newTagOption.innerText = nameCategory;

    return newTagOption;
}

function renderDropdown(catalog) {
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

renderDropdown(catalog);





const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close');
//var productBlock = document.querySelectorAll('.products__block');

function checkProduct() {
    const productBlock = document.querySelectorAll('.products__block');
    paramElem = Array.from(productBlock);
    //
    console.log(paramElem);

    for (let i = 0; i < paramElem.length; i++) {
        elem = paramElem[i];
        elem.addEventListener('click', showProduct);
    }
}

closeModalBtn.addEventListener('click', closeModalWindow);
modal.addEventListener('click', closeModalWindow);

checkProduct();

function showProduct() {
    modal.classList.add('show');

}

function closeModalWindow() {
    modal.classList.remove('show');
}