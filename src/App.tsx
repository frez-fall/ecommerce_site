import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
      {window.innerWidth < 992 ? <Menu /> : null}
    </>
  );
}

export default App;
