import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import ModalInfo from "./components/Shared/ModalInfo";
import ModalConfirm from "./components/Shared/ModalConfirm";
import ModalPortal from "./Portal";
import { useState } from "react";

function App() {
    const [isOnModalInfo, setIsOnModalInfo] = useState(false); // ModalInfo 토글 state
    const [isOnModalConfirm, setIsOnModalConfirm] = useState(false); // ModalConfirm 토글 state

    // 닫기 모달 토글 함수
    const onToggleModalInfo = (isOn) => {
        setIsOnModalInfo(isOn);
    };
    // 확인 모달 토글 함수
    const onToggleModalConfirm = (isOn) => {
        setIsOnModalConfirm(isOn);
    };
    // 확인 모달 확인 버튼 이벤트 함수
    const onConfirm = () => {
        window.alert("onConfirm");
    };

    // ! 버튼 시연을 위한 임시 CSS, 이후 제거 필요
    const tempStyle = {
        margin: "1rem",
        display: "flex",
    };
    return (
        <>
            <GlobalStyle />
            <div style={tempStyle}>
                <button
                    onClick={() => {
                        onToggleModalInfo(true);
                    }}
                >
                    닫기모달 열려라
                </button>
                <button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                        onToggleModalConfirm(true);
                    }}
                >
                    확인모달 열려라
                </button>
                <ModalPortal>
                    {isOnModalInfo && (
                        <ModalInfo
                            onClose={() => {
                                onToggleModalInfo(false);
                            }}
                        >
                            테스트!!!
                        </ModalInfo>
                    )}
                    {isOnModalConfirm && (
                        <ModalConfirm
                            onClose={() => {
                                onToggleModalConfirm(false);
                            }}
                            onConfirm={() => {
                                onConfirm();
                            }}
                        >
                            테스트!!!
                        </ModalConfirm>
                    )}
                </ModalPortal>
                <Button onClick={() => {}} negative={true} icon="notification" isIconRight={true}>
                    Large Button with Icon (right)
                </Button>
                <Button size="medium">Medium Button</Button>
                <Button size="small">Small Button</Button>
            </div>
            <div style={tempStyle}>
                <Button color="danger" onClick={() => {}} negative={true} icon="checkbox" isIconRight={false}>
                    Large Button with Icon (left)
                </Button>
                <Button color="danger" size="medium">
                    Medium Button
                </Button>
                <Button color="danger" size="small">
                    Small Button
                </Button>
            </div>
        </>
    );
}

export default App;
