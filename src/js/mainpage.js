import "../css/main-page-styles.css"

const generateMainPage = (contentContainer) => {
    const mainpage = document.createElement("div");
    mainpage.classList.add("mainpage");

    const header = document.createElement("h1");
    header.innerText = "Campfire lunch";
    
    const description = document.createElement("div");
    description.classList.add("description");
    const greeting = document.createElement("p");
    greeting.innerHTML = "\"Join us at <em>Campfire lunch</em> for an unforgettable dining experience! Savor exquisite flavors crafted with passion, all in a warm and inviting atmosphere. Book your table today!\"";
    const schedule = document.createElement("p");
    schedule.innerHTML = "We are opened Monday-Saturday from <em>9:00</em> to <em>20:00</em>!";
    
    description.append(greeting, schedule);
    mainpage.append(header, description);

    contentContainer.appendChild(mainpage);
};

export { generateMainPage };
