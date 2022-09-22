import '../assets/style.css';
import forca0 from '../assets/images/forca0.png'
import forca1 from '../assets/images/forca1.png'
import forca2 from '../assets/images/forca2.png'
import forca3 from '../assets/images/forca3.png'
import forca4 from '../assets/images/forca4.png'
import forca5 from '../assets/images/forca5.png'
import forca6 from '../assets/images/forca6.png'

function Letter(props) {
  const { letter } = props
  return (
    <div onClick={''} className="letter">
      <p>{letter}</p>
    </div>
  )
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {
  return (
    <div className="container">
      <main>
        <img src={forca0} alt={'imagem de uma Forca'} />

        <div className="word-container">
          <button onClick={''}>
            <p>Escolher Palavra</p>
          </button>
          <div className="word"></div>
        </div>
      </main>

      <div className="letters">
        {alphabet.map(l => (
          <Letter letter={l} />
        ))}
      </div>

      <div className="guess-word">
        <p>Já sei a palavra!</p> <input type="text" />{' '}
        <button onClick={''}>
          <p>Chutar</p>
        </button>
      </div>
    </div>
  )
}
