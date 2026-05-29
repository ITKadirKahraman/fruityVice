function getHeader() {
    return `
    <header class="header">
        <ul class="ulHeader">
            <li><h1>Fruitvice API</h1></li>
            <li><img src="./assets/icons/fruitIcon.svg" alt="Fruit"></li>
        </ul>
    </header>`;
}

function getFruits(fruit) {
    return `
    <section class="fruitCard">
        <table>
            <caption>
                <strong>${fruit.name}</strong>
            </caption>
            <tbody>
                <tr>
                    <th>Familie</th>
                    <td>${fruit.family}</td>
                </tr>
                <tr>
                    <th>Kalorien</th>
                    <td>${fruit.nutritions.calories}</td>
                </tr>
                <tr>
                    <th>Zucker</th>
                    <td>${fruit.nutritions.sugar}</td>
                </tr>
                <tr>
                    <th>Protein</th>
                    <td>${fruit.nutritions.protein}</td>
                </tr>
                <tr>
                    <th>Kohlenhydrate</th>
                    <td>${fruit.nutritions.carbohydrates}</td>
                </tr>
            </tbody>
        </table>
    </section>
    `;
}