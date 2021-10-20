
import "./App.scss";
import Header from "./components/Header";
import Product from "./views/Product";

function App() {

  return (
    <div style={{ maxWidth: 1440, margin: "44px 165px" }}>
      <Header />
      <main>
        <Product />
      </main>
    </div>
  );
}

export default App;