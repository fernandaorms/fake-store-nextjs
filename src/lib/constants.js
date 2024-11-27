export const defaultSort = {
    title: 'Relevance',
    slug: null,
    sortKey: 'RELEVANCE',
    reverse: false
};

export const sorting = [
    defaultSort,
    { title: 'Trending', slug: 'desc', sortKey: 'BEST_SELLING', reverse: false },
];
