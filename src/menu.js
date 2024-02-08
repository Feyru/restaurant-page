function menuPageLoad() {
        const content = document.querySelector('#content');

        const menuContainer = document.createElement('div');
        content.appendChild(menuContainer);

        const espressoDiv = document.createElement('div');
        espressoDiv.classList.add('espresso');
        menuContainer.appendChild(espressoDiv);

        const headerOne = document.createElement('h2');
        headerOne.innerText = "Espresso";
        espressoDiv.appendChild(headerOne);
        const paraOne = document.createElement('p');
        paraOne.innerText = "A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.";
        espressoDiv.appendChild(paraOne);


        const americanoDiv = document.createElement('div');
        americanoDiv.classList.add('americano');
        menuContainer.append(americanoDiv);

        const headerTwo = document.createElement('h2');
        headerTwo.innerText = "Americano";
        americanoDiv.appendChild(headerTwo);
        const paraTwo = document.createElement('p');
        paraTwo.innerText = "A type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.";
        americanoDiv.appendChild(paraTwo);


        const latteDiv = document.createElement('div');
        latteDiv.classList.add('latte');
        menuContainer.appendChild(latteDiv);

        const headerThree = document.createElement('h2');
        headerThree.innerText = "Latte";
        latteDiv.appendChild(headerThree);
        const paraThree = document.createElement('p');
        paraThree.innerText = "A coffee drink made with half espresso and half steamed milk.";
        latteDiv.appendChild(paraThree);


        const cappuccinoDiv = document.createElement('div');
        cappuccinoDiv.classList.add('cappuccino');
        menuContainer.appendChild(cappuccinoDiv);

        const headerFour = document.createElement('h2');
        headerFour.innerText = "Cappuccino";
        cappuccinoDiv.appendChild(headerFour);
        const paraFour = document.createElement('p');
        paraFour.innerText = "A coffee drink made with espresso and steamed milk.";
        cappuccinoDiv.appendChild(paraFour);

}

export default menuPageLoad;