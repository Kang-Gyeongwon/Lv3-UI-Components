import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import ModalInfo from "./components/Shared/ModalInfo";
import ModalConfirm from "./components/Shared/ModalConfirm";
import ModalPortal from "./Portal";
import ModalCollection from "./components/ModalCollection";
import InputBox from "./components/InputBox";
import SelectCollection from "./components/SelectCollection"
import ButtonCollection from "./components/ButtonCollection";

function App() {
    return (
        <>
            <GlobalStyle />
            <ModalCollection />
            <ButtonCollection/>
            <InputBox />
            <SelectCollection/>
        </>
    );
}

export default App;
