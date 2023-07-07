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
              <Button onClick={()=>{}} negative={true} icon="notification" isIconRight={true}>Large Button with Icon (right)</Button>
              <Button size="medium">Medium Button</Button>
              <Button size="small">Small Button</Button>
            </div>
            <div style={tempStyle}>
              <Button color="danger" onClick={()=>{}} negative={true} icon="checkbox" isIconRight={false}>Large Button with Icon (left)</Button>
              <Button color="danger" size="medium" >Medium Button</Button>
              <Button color="danger" size="small">Small Button</Button>
            </div>
        </>
    );
}

export default App;
