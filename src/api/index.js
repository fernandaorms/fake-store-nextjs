const { API_URL } = process.env;

export const PRODUCTS_URL = API_URL + 'products';
export const CATEGORIES_URL = API_URL + 'products/categories';
export const SINGLE_CATEGORY_URL = API_URL + 'products/category/';


export async function getProducts() {
    const response = await fetch(PRODUCTS_URL);
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
