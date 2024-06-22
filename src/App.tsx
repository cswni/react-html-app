import './App.css'

function App() {
  
  return (
    <>
    <header>
      <div>Sistema de Gestión de ventas</div>
      <img src="/vite.svg" alt="Vite Logo" />
    </header>

    <main>
      <aside>
        <nav>
          <ul id="menu_principal">
            <li><a href="/"><i className="material-icons-outlined">home</i> Inicio</a></li>
            <li><a href="/productos.html"><i className="material-icons-outlined">local_grocery_store</i>Productos</a></li>
            <li><a href="/clientes.html"><i className="material-icons-outlined">groups</i>Clientes</a></li>
            <li><a href="/ventas.html"><i className="material-icons-outlined">home</i>Ventas</a></li>
          </ul>
        </nav>
      </aside>

      <section id="contenido">
        <h1>¡Hola mundo!</h1>
        <i className="material-icons">face</i>
      </section>
    </main>

    </>
  )
}

export default App
