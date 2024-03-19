import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import * as S from "./components/Header/header_style"
import Main from "./components/Main/Main";

function App() {
  return(
    <>
    <S.GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  );
}
export default App;