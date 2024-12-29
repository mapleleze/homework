document.addEventListener('DOMContentLoaded', function() {
    const productDetailDiv = document.getElementById('productDetail');
    const searchParams = new URLSearchParams(window.location.search);
    const goodsId = searchParams.get('goods_id');

    if (!goodsId) {
        console.error('No goods_id found in URL');
        return;
    }

    axios.get(`http://localhost:8888/goods/item/${goodsId}`)
        .then(response => {
            const product = response.data.info;
            productDetailDiv.innerHTML = `
                <img src="${product.img_big_logo}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>价格: ¥${product.current_price}</p>
                <p>库存: ${product.goods_number}</p>
                <div class="goods-introduce">
                    ${product.goods_introduce}
                </div>
            `;
        })
        .catch(error => console.error('Error fetching product detail:', error));
});