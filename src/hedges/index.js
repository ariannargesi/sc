import nodes from '../domNodes'
const createHedges = () => {    
    const hedgeTop = document.createElement('div')
    const hedgeBottom = document.createElement('div')

    hedgeTop.setAttribute('class', 'hedge')
    hedgeBottom.setAttribute('class', 'hedge')
    
    hedgeBottom.style.bottom = 0 

    nodes.container.appendChild(hedgeTop)
    nodes.container.appendChild(hedgeBottom)
}
export default createHedges