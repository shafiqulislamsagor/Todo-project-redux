import Navbar from "./components/shared/Navbar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />

        <TodoList />

        <hr className="mt-4" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
