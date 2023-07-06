import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./components/Shared/Button";

function App() {
  // ! 버튼 시연을 위한 임시 CSS, 이후 제거 필요
  const tempStyle = {
    margin : "1rem", 
    display: "flex", 
  }
    return (
        <>
            <GlobalStyle />
            <div style={tempStyle}>
                <Button handleBtnClick={()=>{}} size="small" icon="notification">button!</Button>
                <Button size="small">button!</Button>
                <Button size="medium">button!</Button>
                <Button size="medium" icon="checkbox" isIconRight={true}>button!</Button>
                <Button icon="checkbox" isIconRight={true}>button!</Button>
                <Button icon="checkbox" isIconRight={false}>button!</Button>
                <Button>button!</Button>
            </div>
        </>
    );
}

export default App;
