document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const pagination = document.getElementById('pagination');
    let currentPage = 1;
    const pageSize = 12;

    function fetchProducts(page) {
        axios.get('http://localhost:8888/goods/list', { params: { current: page, pagesize: pageSize } })
            .then(response => {
                const data = response.data;
                if (data.code === 1) {
                    renderProducts(data.list);
                    renderPagination(data.total, page, pageSize);
                } else {
                    console.error('Failed to fetch products:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    function renderProducts(products) {
        productList.innerHTML = products.map(product => `
            <div class="product-item">
                <img src="${product.img_big_logo}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>价格: ¥${product.current_price}</p>
                <p>库存: ${product.goods_number}</p>
                <button onclick="window.location.href='product-detail.html?goods_id=${product.goods_id}'">查看详情</button>
            </div>
        `).join('');
    }

    function renderPagination(total, currentPage, pageSize) {
        const totalPages = Math.ceil(total / pageSize);
        pagination.innerHTML = `第 ${currentPage} 页 / 共 ${totalPages} 页`;
        // 分页按钮逻辑
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.onclick = function() {
                fetchProducts(i);
            };
            pagination.appendChild(pageButton);
        }
    }

    fetchProducts(currentPage);
});