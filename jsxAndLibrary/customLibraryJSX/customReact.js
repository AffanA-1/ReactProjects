function customRender(reactElements, container){

    const createDomElement = document.createElement(reactElements.type)

    createDomElement.innerHTML = reactElements.children

    Object.entries(reactElements.props).forEach(([key, value]) => {
        createDomElement.setAttribute(key, value);
    });

    container.appendChild(createDomElement)


}

const mainContainer = document.querySelector('#root')


const customElements = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'

    },
    children: 'Children Text'
}


customRender(customElements, mainContainer)
