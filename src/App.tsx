import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'

function App() {
  
  return (
    <>
    <Header />
    <main>
      <aside>
        <MenuLateral />
      </aside>

      <section id="contenido">
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/productos" element={<h1>Productos</h1>} />
          <Route path="/clientes" element={<h1>Clientes</h1>} />
          <Route path="/ventas" element={<h1>Ventas</h1>} />        
        </Routes>
      </section>
    </main>

    </>
  )
}

export default App
