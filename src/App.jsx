import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Shared/Button";

function App() {
  const tempStyle = {
    margin : "1rem", 
    display: "flex", 
  }
    return (
        <>
            <GlobalStyle />
            <div style={tempStyle}>
                <Button handleBtnClick={()=>{}}size="small">button!</Button>
                <Button size="small" negative={true}>button!</Button>
                <Button icon="notification" isIconRight={true} size="medium">button!</Button>
                <Button>button!</Button>
            </div>
        </>
    );
}

export default App;
