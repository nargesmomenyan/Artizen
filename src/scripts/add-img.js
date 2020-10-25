import anar from '../../asset/anar.jpg';
import '../style/test.scss'

function addImg(){
const img = document.createElement('img');
img.width=100;
img.src=anar;
img.classList.add('img-anar')

const body = document.querySelector('body');
body.appendChild(img);
}

export default addImg