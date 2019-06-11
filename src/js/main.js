import '../css/global.css'
import classes from '../css/main.css'

export default () => {

  const { main } = classes
  const contentNode = document.getElementById('content')

  const newElement = document.createElement('div')
  newElement.classList.add(main)
  newElement.innerText = 'XD'

  contentNode.appendChild(newElement)

}
