function Grid(props) {
    const { className = '', children, ...rest } = props;
    return (
        <ul {...rest} className={`grid grid-flow-row gap-4 ${className}`}>
            {children}
        </ul>
    );
}

function GridItem(props) {
    const { className = '', children, ...rest } = props;
    return (
        <li {...rest} className={`aspect-square transition-opacity ${className}`}>
            {children}
        </li>
    );
}

Grid.Item = GridItem;

export default Grid;
