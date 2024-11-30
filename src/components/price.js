const Price = ({
    amount,
    className = '',
    currencyCode = 'USD',
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
