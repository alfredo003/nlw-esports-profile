import './style.css'
import './components/Header'
import Header from './components/Header'
import Section from './components/Section'

function App() {
return (
 
  <div className='App'>
    <Header />
    <main>
    <Section   title="Meus Jogos" subTitle="Os games que eu mais curto jogar!"/>
    <Section   title="Meus Jogos"/>
  </main>
  </div>

  )
}

export default App
