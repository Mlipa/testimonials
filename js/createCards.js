export function createCards (num) {
    const containerCard = document.createElement("div");
    containerCard.className = `${num.themeCard}`;

    const datesHeader = document.createElement("div");
    datesHeader.className = "dates-header"
    const addimg = document.createElement("img");
    addimg.src = num.img;
    const dates = document.createElement("div");
    dates.className = "dates";
    const h4 = document.createElement("h4");
    h4.textContent = num.name;
    const p = document.createElement("p");
    p.textContent = num.verify;
    dates.append(h4, p);
    datesHeader.append(addimg, dates);

    const testPrincipal = document.createElement("h2");
    testPrincipal.className = "test-principal";
    testPrincipal.textContent = num.title;

    const testSecundary =document.createElement("p");
    testSecundary.className = "test-secundary";
    testSecundary.textContent = num.description;

    containerCard.append(datesHeader, testPrincipal, testSecundary);

    return containerCard;
}