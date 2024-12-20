import { notFound } from 'next/navigation';

const { API_URL, NEXT_PUBLIC_BASE_URL } = process.env;

export const CART_URL = API_URL + 'carts';
export const PRODUCTS_URL = API_URL + 'products';
export const CATEGORIES_URL = API_URL + 'products/categories';
export const SINGLE_CATEGORY_URL = API_URL + 'products/category/';


function filterProducts(products, query) {
    return products.filter(product => {
        const queryStr = query.toString().toLowerCase();
        return (
            product.title.toLowerCase().includes(queryStr) ||
            // product.category.toLowerCase().includes(queryStr) ||
            product.price.toString().toLowerCase().includes(queryStr)
        );
    });
}


export async function getProducts({sortKey, query}) {
    let newURL = PRODUCTS_URL;

    if(sortKey) newURL += '?sort=' + sortKey;

    const response = await fetch(newURL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    const products = await response.json();

    if(query) {
        const filteredProducts = filterProducts(products, query);
        return filteredProducts;
    }


    return products;
}

export async function getProductById({id}) {
    let newURL = PRODUCTS_URL;

    newURL += '/' + id;

    const response = await fetch(newURL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

export async function getProductsByCategory({sortKey, category}) {
    let newURL = SINGLE_CATEGORY_URL;

    newURL += category;

    if(sortKey) newURL += '?sort=' + sortKey;

    const response = await fetch(newURL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}


export async function getCategories() {
    const response = await fetch(CATEGORIES_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
}


export async function getPage(filename) {
    if (!filename) {
        throw new Error('Filename is required');
    }

    const FILE_URL = `${NEXT_PUBLIC_BASE_URL}/json/${filename}.json`;

    const headResponse = await fetch(FILE_URL, { method: 'HEAD' });
    if (!headResponse.ok) {
        notFound();
    }

    const response = await fetch(FILE_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}`);
    }

    return response.json();
}


export async function getCartById({id}) {
    let newURL = CART_URL;

    newURL += '/' + id;

    const response = await fetch(newURL);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}