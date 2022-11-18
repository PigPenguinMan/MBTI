import { useEffect } from "react";
import { Button } from "react-bootstrap";

// JS에서 쓸때 카카오 = 윈도우를 꼭해줘야함
const {Kakao} = window;
const KakaoShareBtuoon = () => {

    const url = 'https://pigpenguinman.github.io/MBTI/';
    const resultUrl = window.location.href;
    useEffect(()=>{
        Kakao.cleanup();
        // 카카오 계정의 JS키를 들고옴
        Kakao.init('f4516866457d252055218b4a36ab9430')
        console.log(Kakao.isInitialized());
    },[]);
    const shareKakao = () => {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나에게 어울리는 반려동물 결과',
          description: '반려동물을 키우게 된다면 가장 잘맞는 반려동물은 XX입니다',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: 'https://pigpenguinman.github.io/MBTI/',
            },
          },
          
        ],
      });
    }
    
    return ( 
        <Button  style={{marginLeft:'20px'}}>카카오톡 공유하기</Button >
     );
}
 
export default KakaoShareBtuoon;

