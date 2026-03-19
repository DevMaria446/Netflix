import "./App.css";
import Header from "./Component/Header/Header";
import Second from "./Component/Second/Second";
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <>
      <main className="all">
        <div className="all-wrapper">
          <Header />
        </div>
      </main>
      <Second />
      <Footer/>
    </>
  );
}

export default App;
