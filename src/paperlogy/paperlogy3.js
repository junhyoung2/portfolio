import { useNavigate } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const Paperlogy3 = () => {
    const navigate = useNavigate();
    const goToPaperlopgy4 = () => {
        navigate("/#cover");
    };
    return (
        <div id="main-project">
            <div className="content-container">
                <div className="form">
                    <h2>회고</h2>
                    <div className="info-section">
                        <ul>
                            <li>
                                <span>
                                    어려웠던 점 및 해결방법 :
                                    <br /> <br />
                                </span>
                                - 반응형 애니메이션 구현 중 데스크톱과 모바일의
                                전혀 다른 스크롤 방식 때문에 초반 작업 중 수정
                                및 구현이 어려웠지만, 화면 크기별로 애니메이션을
                                나누어 적용하며 문제를 해결했습니다. 스타일 관리
                                복잡성: 화면별 스타일을 분리하다 보니 공통 요소
                                수정 시 번거로움이 있었으며, 관리 방식의
                                중요성을 깨달았습니다.
                            </li>

                            <br />
                            <li>
                                <span>
                                    아쉬운 점 및 개선 방향 : <br /> <br />
                                </span>
                                <strong>- Skills 영역의 불안정한 배치 </strong>
                                <br /><br/>
                                아쉬운 점 : 컴퓨터 화면에서 스킬 아이콘들을
                                고정된 위치에 배치했더니, 인터넷 창 크기를
                                조금만 조절해도 아이콘들이 서로 겹치거나
                                흩어지는 등 배치가 쉽게 망가졌습니다. 이 때문에
                                다양한 화면 크기에서 깔끔한 모습을 보여주지
                                못했습니다.
                                <br />
                                개선 방향 : 앞으로는 스킬 아이콘들이 화면 크기에
                                맞춰 자동으로 예쁘게 재배치되도록 수정할
                                계획입니다. 이렇게 하면 사용자가 창 크기를
                                어떻게 바꾸든 항상 정돈된 모습을 유지하면서도,
                                현재처럼 각 항목이 재미있게 등장하는 효과는
                                그대로 살릴 수 있습니다.
                                <br />
                                <br />
                                <strong>
                                    - 각각 다른 프로젝트 카드 크기
                                </strong><br/>
                                <br />
                                아쉬운 점 : 프로젝트 소개글의 길이에 따라
                                카드들의 높이가 제각각 달라져 전체적으로
                                정돈되지 않은 느낌을 주었습니다. 특히 여러
                                카드가 나란히 있을 때 높이가 맞지 않아 디자인의
                                통일성이 떨어져 보였습니다.
                                <br />
                                개선 방향 : 모든 프로젝트 카드 중 가장 내용이 긴
                                카드에 맞춰 자동으로 같은 높이를 갖도록 변경할
                                것입니다. 이를 통해 전체 프로젝트 영역이 한층 더
                                깔끔하고 안정적으로 보이도록 만들어 디자인
                                완성도를 높이겠습니다.
                                <br />
                                <br />
                            </li>
                            <br />
                            <li>
                                <span>
                                    리팩토링 포인트 :<br /> <br />
                                </span>
                                - 포트폴리오의 Skills 섹션에서는 초기 작업에서
                                아이콘을 고정된 위치에 배치했는데, 화면 크기가
                                달라지면 아이콘이 서로 겹치거나 화면 밖으로
                                벗어나 레이아웃이 쉽게 무너지는 문제가
                                있었으며, 또한 아이콘을 추가하거나 수정할
                                때마다 다른 모든 아이콘의 위치를 다시 계산해야
                                해서 작업 효율도 매우 낮았습니다. <br/>이를 개선하기
                                위해 Skills 섹션을 유연한 레이아웃으로
                                변경하였고, 화면 크기에 맞춰 아이콘이 자동으로
                                재배치되도록 구성했습니다. <br/>그 결과 데스크톱과
                                모바일 등 다양한 환경에서도 레이아웃이
                                안정적으로 유지되고, 작업 효율 또한 크게
                                향상되었습니다. <br/>이번 경험을 통해 고정된 배치
                                방식의 한계를 체감하고, 유연한 레이아웃 설계의
                                중요성을 깊이 깨닫게 되었습니다.
                            </li>
                        </ul>
                    </div>

                    <ul className="arrow-container">
                        <li>
                            <div
                                className="bottom-arrow"
                                onClick={goToPaperlopgy4}
                            >
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Paperlogy3;
