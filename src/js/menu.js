import "../css/menu-page-styles.css"

const generateMenuPage = (contentContainer) => {
    const menu = document.createElement("div");
    menu.classList.add("menu-page");
    const header = document.createElement("h1");
    header.innerText = "Menu";
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    for (let i = 0; i < 5; ++i) {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");

        const dishName = document.createElement("h2");
        dishName.innerText = `Omlette #${i + 1}`;
        const description = document.createElement("p");
        description.classList.add("description");
        description.innerText = "An omelette is a dish made from eggs, fried with butter or oil in a frying pan. It includes chives, vegetables, mushrooms";
        const price = document.createElement("p");
        price.classList.add("price");
        price.innerText = `Price: ${5.25 + i}$`;

        itemContainer.append(dishName, description, price);
        menuContainer.appendChild(itemContainer);
    }

    menu.append(header, menuContainer);
    contentContainer.appendChild(menu);
};

export { generateMenuPage };