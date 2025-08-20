import { IoIosArrowDropright } from "react-icons/io";

import { useNavigate } from "react-router-dom";
const Tower5 = () => {
    const navigate = useNavigate();
    const goToTower6 = () => {
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
                                    <br />
                                    <br />
                                </span>
                                - 피그마 기획, 디자인을 바탕으로 개발을 진행하던
                                중, 프로젝트 내에 동일한 구조나 역할을 가진
                                중복된 컴포넌트가 여럿 있다는 점을 뒤늦게
                                인지했습니다.
                                <br />
                                이후 중복된 부분을 찾아내고 재사용 가능한
                                컴포넌트로 분리하며 정리하는 과정이 쉽지
                                않았지만, 팀원들과 구조를 협의하고 컴포넌트를
                                나누는 방식으로 점차 정리해나갔습니다.
                            </li>
                            <br />
                            <li>
                                - 처음으로 데이터베이스를 연결해 작업하면서
                                데이터 흐름을 파악하거나 예외 상황을 처리하는
                                것이 예상보다 어렵게 느껴졌습니다. <br /> 또한
                                Git 병합 과정에서도 자주 충돌이 발생해, 이를
                                해결하는 데 많은 시간을 소모했고, 협업 중 소통의
                                중요성을 실감할 수 있었습니다. <br />
                                이런 시행착오를 겪으면서 데이터 관리에 대한
                                이해도와 팀원 간 커뮤니케이션의 중요성을 확실히
                                배울 수 있었고, 다음 협업에서는 더 유연하고
                                안정적인 방식으로 참여할 수 있을 것이라는
                                자신감을 얻었습니다.
                                <br />
                                <br />
                            </li>
                            <li>
                                <span>
                                    아쉬운 점 및 개선 방향 : <br /> <br />
                                </span>
                                <strong> - 지도 기능 부재</strong>
                                <li>
                                    아쉬운 점 : 현재 사용자가 자신의 위치에서
                                    가까운 주차타워나 지역별 주차타워 위치를
                                    확인할 수 있는 기능이 없어 원하는 곳의
                                    주차타워를 직관적으로 선택하기 어렵습니다.
                                </li>
                                <li>
                                    개선 방향 : 내 위치 정보와 지도 기능을
                                    추가하여, 유저가 원하는 위치의 주차타워를
                                    쉽게 선택할 수 있는 플로우를 구현하겠습니다.
                                </li>
                                <br />
                                <strong> - ID/PW 찾기 페이지 부재</strong>
                                <li>
                                    아쉬운 점 : 계정 정보 복구를 위한 ID/PW 찾기
                                    페이지가 없어 사용자가 정보를 잃었을 때
                                    복구가 어렵습니다.
                                </li>
                                <li>
                                    개선 방향 : ID/PW 찾기 페이지를 개발하여
                                    계정 정보 복구를 원활하게 지원하겠습니다.
                                </li>
                                <strong> - 알림창 통일성 부족</strong>
                                <li>
                                    아쉬운 점 : 화면마다 알림창이 Alert과
                                    팝업으로 두가지로 나누어져 있어서 통일성이
                                    부족합니다.
                                </li>
                                <li>
                                    개선 방향 : 모든 알림창을 팝업 형태로
                                    통일하여 통일된 UX를 제공하겠습니다.
                                </li>
                                <br />
                            </li>

                            <li>
                                <span>
                                    리팩토링 포인트 :
                                    <br /> <br />
                                </span>
                                <li>
                                    {" "}
                                    - 처음에는 유사한 UI 컴포넌트들이 각각 따로
                                    존재해 유지보수가 어려웠고, 코드 양도
                                    불필요하게 많았습니다. <br />
                                    이를 해결하기 위해 반복되는 구조는 공통
                                    컴포넌트로 만들고, props를 활용해 유연하게
                                    재사용할 수 있도록 개선하였습니다. 이
                                    과정에서 컴포넌트 간 역할을 명확히 나누고,
                                    프로젝트 전체의 코드 일관성과 가독성을 높일
                                    수 있었습니다.
                                </li>
                            </li>
                        </ul>
                    </div>
                    <ul className="arrow-container">
                        <li>
                            <div className="bottom-arrow" onClick={goToTower6}>
                                <IoIosArrowDropright />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tower5;
