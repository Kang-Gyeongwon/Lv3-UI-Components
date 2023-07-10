import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import InputBox from "./components/InputBox";
import SelectCollection from "./components/SelectCollection"
import ButtonCollection from "./components/ButtonCollection";
import SelectCollection from "./components/SelectCollection";

function App() {
    return (
        <>
            <GlobalStyle />
            <ButtonCollection/>
            <InputBox />
            <SelectCollection/>
        </>
    );
}

export default App;
