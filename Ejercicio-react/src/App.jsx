import Navbar from './Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenido a Mi App
          </h1>
          <p className="text-lg text-gray-600">
            Aquí inicia tu contenido principal.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;