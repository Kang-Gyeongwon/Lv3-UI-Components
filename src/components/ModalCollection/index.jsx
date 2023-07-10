import Button from "../Shared/Button";
import ModalInfo from "../Shared/ModalInfo";
import ModalConfirm from "../Shared/ModalConfirm";
import ModalPortal from "../../Portal";
import { useState } from "react";

const ModalCollection = () => {
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

    return (
        <>
            <div style={{display: "flex", gap: "10px", padding: "1rem"}}>
                <Button
                    color="danger"
                    negative={true}
                    handleBtnClick={() => {
                        onToggleModalInfo(true);
                    }}
                >
                    닫기모달 열려라
                </Button>
                <Button
                    negative={true}
                    handleBtnClick={() => {
                        onToggleModalConfirm(true);
                    }}
                >
                    확인모달 열려라
                </Button>
            </div>
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
        </>
    );
}

export default ModalCollection;
