import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext from "../Context/DataContext";
import KakaoShareBtuoon from "../Components/KakaoShareButton";



const Result = () => {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const mbti = SearchParams.get('mbti')

    // 최종적으로 도출한 결과 객체
    const [resultData, setResultData] = useState({})
    useEffect(() => {
        const result = data.state.result.find((s) => s.best === mbti);
        setResultData(result);
        // 카카오톡 공유하기 추가 
        // // 마운트시에 Script 불러오기
        // const script = document.createElement('script');
        // // 카카오 SDK
        // script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        // script.async = true ;
        // document.body.appendChild(script);

        // return ()=>{
        //     document.body.removeChild(script);
        // }
    }, [mbti])
    return (
        <Wrapper className="Result_Wrapper">
            <div className="Result_outer">
                <Headers>어울리는 반려동물 찾기</Headers>
                <Contents>
                    <Title>결과 보기</Title>
                    <LogoImage >
                        <img src={resultData.image} width={350} height={350} className="rounded-cricle" />
                    </LogoImage>
                    <Desc>
                        {resultData.desc}인 당신과 잘 어울리는 반려동물은 ?
                        <br />
                        {resultData.name}입니다
                    </Desc>
                    <ButtonGroup>
                    <Button onClick={() => navigate('/')}>테스트 다시하기</Button >
                    <KakaoShareBtuoon/>
                    </ButtonGroup>
                </Contents>
            </div>
        </Wrapper>
    );
}

export default Result;


// styled-Compnents 사용 
const Wrapper = styled.div`
    height:100vh; 
    width: 100%;
    
`
const Headers = styled.div`
    font-size:2.5em;
    display:flex ; 
    justify-content:center;
    align-items:center
    
`
const Contents = styled.div`
    display:flex ; 
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const Title = styled.div`
    font-size :2em;
    margin-top : 40px ;
`
const LogoImage = styled.div`
    margin-top : 10px;
`
const Desc = styled.div`
    font-size : 1.5em;
    margin-top : 20px;   
`
const ButtonGroup = styled.div`
    display:flex ; 
    flex-direction: row ;

`