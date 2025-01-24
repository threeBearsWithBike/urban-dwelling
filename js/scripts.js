const products = document.querySelectorAll('.products-item');


products.forEach(item => {
    if (item.hasAttribute('data-action')) {
        let actionPrice = +item.getAttribute('data-action');
        let newSpan = document.createElement('span');
        newSpan.innerText = `${actionPrice}`;
        newSpan.style.color = '#e45302';
        item.children[2].prepend(newSpan);
        item.childNodes[5].querySelector('.products-price-current').classList.add('products-price-old');
        item.children[0].children[1].style.display = 'block';
    }
})

products.forEach(item => item.addEventListener('mouseover', () => {
    item.children[0].children[2].style.display = 'block';
}));

products.forEach(item => item.addEventListener('mouseout', () => {
    item.children[0].children[2].style.display = 'none';
}));




