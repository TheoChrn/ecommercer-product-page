import { ProductContextProvider } from "./Contexte/ProductContext";
import Home from "./Page/Home";
import "./sass/index.scss";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Home />
      </ProductContextProvider>
    </>
  );
}

export default App;
