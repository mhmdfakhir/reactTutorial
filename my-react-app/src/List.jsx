function List() {
    const fruits = [
        { name: "apple", calories: 95 },
        { name: "orange", calories: 45 },
        { name: "banana", calories: 155 },
        { name: "coconut", calories: 55 },
        { name: "pineapple", calories: 66 },
    ];

    fruits.sort((a, b) => a.name.localeCompare(b.name));

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => (
        <li key={lowCalFruit.name}>
            {lowCalFruit.name}:
            &nbsp;
            <b>{lowCalFruit.calories}</b>
        </li>
    ));

    return <ol>{listItems}</ol>;
}

export default List;
