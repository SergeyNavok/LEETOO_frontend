const catalog = [
    {
        'name': 'Сахарная паста для шугаринга LEETOO CLASSIC LIGHT (Мягкая)',
        'id': 1,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem',
        'price': 120,
        'weight': 500
    },
    {
        'name': 'Сахарная LEETOO CLASSIC LIGHT',
        'id': 2,
        'category': 'уход за кожей',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'price': 80,
        'weight': 1500
    },
    {
        'name': 'Сахарная паста для шугаринга LEETOO CLASSIC LIGHT (Мягкая)',
        'id': 3,
        'category': 'гели',
        'desription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga consequuntur explicabo quos quibusdam animi rerum quidem repudiandae nisi libero perspiciatis saepe repellendus voluptatem, natus, alias suscipit enim! Consequatur, eveniet!',
        'price': 100,
        'weight': 500
    }
]



//Куда будут записываться сформированные единицы продукции
//Обращался по id, потому как по-другому не удавалось достучаться
const productsTag = document.querySelector('#products');
const currencyType = ' BYN';


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
    const productBlockItem = getNewTag('div', 'products__block-item');
    const productImg = getNewTag('img', 'img');
    productImg.src = '..//img/product/' + product.id + '/product.jpg';
    const productName = getNewTag('div', 'name', product.name);
    const productPrice = getNewTag('div', 'price', product.price + currencyType);

    productBlockItem.append(productImg, productName, productPrice);
    productBlock.append(productBlockItem);

    return productBlock;
}



//Функция получения продуктов из каталога
function renderCatalog(catalog) {
    const product = catalog.map(item => getProductItem(item));
    productsTag.append(...product);

    //catalog.forEach(item => {
            //const product = getProductItem(item);
            //productsTag.append(product);
        //});
}



//Запуск функции отрисовки каталога
renderCatalog(catalog);