import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Shared/Button";
import InputBox from "./components/InputBox";
import ButtonBox from "./components/ButtonBox";
import SelectCollection from "./components/SelectCollection"
import ButtonCollection from "./components/ButtonCollection";

function App() {
    return (
        <>
            <GlobalStyle />
            <ButtonCollection/>
            <ButtonBox />
            <InputBox />
            <SelectCollection/>
        </>
    );
}

export default App;
