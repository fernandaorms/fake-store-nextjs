const { API_URL } = process.env;

export const PRODUCTS_URL = API_URL + 'products';
export const CATEGORIES_URL = API_URL + 'products/categories';
export const SINGLE_CATEGORY_URL = API_URL + 'products/category/';

const { NEXT_PUBLIC_BASE_URL } = process.env;


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


export async function getPage(filename) {
    if (!filename) {
        throw new Error('Filename is required');
    }

    const FILE_URL = `${NEXT_PUBLIC_BASE_URL}/json/${filename}.json`;
    const response = await fetch(FILE_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}`);
    }

    return response.json();
}