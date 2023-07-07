import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import ModalInfo from "./components/Shared/ModalInfo";
import ModalPortal from "./Portal";
import { toggleModal } from "./redux/modules/isOnModal";
import { useState } from "react";

function App() {
  const tempStyle = {
    margin : "1rem", 
    display: "flex", 
  }

  const [isOnModal, setIsOnModal] = useState(false);

  const onToggleModal = (isOn) => {
    setIsOnModal(isOn);
  }

    return (
        <>
            <GlobalStyle />
            <div style={tempStyle}>
            <button onClick={() => {
              onToggleModal(true);
            }}>모달 열려라</button>
            <ModalPortal>
              {isOnModal && <ModalInfo onClose={() => {
                onToggleModal(false);
              }}>테스트!!!</ModalInfo>}
            </ModalPortal>
            </div>
        </>
    );
}

export default App;
