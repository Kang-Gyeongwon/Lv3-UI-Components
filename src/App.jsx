import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import ModalInfo from "./components/Shared/ModalInfo";
import ModalConfirm from "./components/Shared/ModalConfirm";
import ModalPortal from "./Portal";
import ModalCollection from "./components/ModalCollection";

function App() {
    return (
        <>
            <GlobalStyle />
            <ModalCollection />
        </>
    );
}

export default App;
