
        function pageLoad() {
        const content = document.querySelector('#content');

        const introDiv = document.createElement('div');
        introDiv.classList.add('intro');
        content.appendChild(introDiv);

        const headerOne = document.createElement('h1');
        headerOne.innerText = "Coffee";
        introDiv.appendChild(headerOne);
        const paraOne = document.createElement('p');
        paraOne.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio";
        introDiv.appendChild(paraOne);

        const aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about-us');
        content.appendChild(aboutDiv);

        const headerTwo = document.createElement('h2');
        headerTwo.innerText = "About Us";
        aboutDiv.appendChild(headerTwo);
        const paraTwo = document.createElement('p');
        paraTwo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur accusamus facere maxime distinctio";
        aboutDiv.appendChild(paraTwo);
        
}
        export default pageLoad;