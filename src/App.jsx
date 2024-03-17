import ReadyPlayerOne from './components/readyplayerone/readyplayerone.jsx'
import MainBoard from './components/mainboard/mainboard.jsx'
import ReadyPlayerTwo from './components/readyplayertwo/readyplayertwo.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className='bg-white contents'>
        <ReadyPlayerOne />
        <MainBoard />
        <ReadyPlayerTwo />
      </div>
    </>
  )
}

export default App
