const { DEFAULT_CURRENCY_CODE } = process.env;

const Price = ({
    amount,
    className = '',
    currencyCode = DEFAULT_CURRENCY_CODE,
    currencyCodeClassName = ''
}) => (
    <p suppressHydrationWarning={true} className={className}>
        {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(amount))}`}
        <span className={`ml-1 inline ${currencyCodeClassName}`.trim()}>{`${currencyCode}`}</span>
    </p>
);

export default Price;
