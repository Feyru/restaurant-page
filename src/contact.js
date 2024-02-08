
function contactPageLoad() {
        const content = document.querySelector('#content');

        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-info');
        content.appendChild(contactDiv);

        const headerOne = document.createElement('h2');
        headerOne.innerText = "Address";
        contactDiv.appendChild(headerOne);
        const paraOne = document.createElement('p');
        paraOne.innerText = "123 Main Street, Anytown, USA";
        contactDiv.appendChild(paraOne);

        //hours
        const headerTwo = document.createElement('h2');
        headerTwo.innerText = "Hours";
        contactDiv.appendChild(headerTwo);
        const paraTwo = document.createElement('p');
        paraTwo.innerText = "Mon-Fri: 8am - 8pm";
        contactDiv.appendChild(paraTwo);
        const paraThree = document.createElement('p');
        paraThree.innerText = "Sat-Sun: 6am - 6pm";
        contactDiv.appendChild(paraThree);

        //phone n email
        const headerThree = document.createElement('h2');
        headerThree.innerText = "Contact";
        contactDiv.appendChild(headerThree);
        const paraFour = document.createElement('p');
        paraFour.innerText = "(555) 123 - 4579";
        contactDiv.appendChild(paraFour);
        const paraFive = document.createElement('p');
        paraFive.innerText = "info@coffeeshop.com";
        contactDiv.appendChild(paraFive);
        
}

export default contactPageLoad;