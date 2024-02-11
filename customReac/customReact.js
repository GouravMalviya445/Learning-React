function customRender(reactElement,mainContainer){
    // version one 🥱->
    /* const domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    domElement.innerText = reactElement.children;
    mainContainer.appendChild(domElement); */

    // Version two 😎->
    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to visit Google.'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);