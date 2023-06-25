import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
import ProductMenu from "./components/ProductMenu";
function App() {
  return (
    <>
      <Navbar />
      {window.innerWidth < 992 ? <ProductMenu /> : null}
      <ProductList />
      <Footer />
      {window.innerWidth < 992 ? <Menu /> : null}
    </>
  );
}

export default App;
