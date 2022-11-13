import { createContext, useState } from "react";
import  bichon  from '../image/bichon.jpg';
import  borderCollie  from '../image/border-collie.jpg';
import  bunny  from '../image/bunny.jpg';
import  chameleon  from '../image/chameleon.jpg';
import  chinchilla  from '../image/chinchilla.jpg';
import  fish  from '../image/fish.jpg';
import  fox  from '../image/fox.jpg';
import  hedgehog  from '../image/hedgehog.jpg';
import  meerkat  from '../image/meerkat.jpg';
import  raccoon  from '../image/raccoon.jpg';
import  retriver  from '../image/retriver.jpg';
import  russianBlue  from '../image/russianblue.jpeg';
import  snake  from '../image/snake.jpg';
import  turtle  from '../image/turtle.jpg';
import  welshCorgi  from '../image/welshCorgi.jpg';
import  rock  from '../image/rock.jpg';
import  animal  from '../image/animal.jpg';






const DataContext = createContext();

const DataProvider = (({children}) => {
    const [question, setQuestion] = useState([
     
        {
            questionId: 1,
            title: '당신은 반려동물을 키우게 됐습니다, 가장 먼저 하고 싶은 일은 ?',
            answerA: '남는건 사진뿐이야! 사진찍어서 인스타에 올려야지',
            answerB: '집에 처음왔는데 적응할시간은 줘야지. 그냥 눈으로 보고 있는다',
            type: 'EI'
        },
        {
            questionId: 2,
            title: '오늘은 주말입니다. 당신은 하루동안 무엇을 하나요 ?',
            answerA: '주말인데 당연히 밖에 나가야지 !',
            answerB: '평일에도 나가서 힘든데 주말엔 집에서 쉬어야지',
            type: "EI"
        },
        {
            questionId: 3,
            title: '주인과 상책중인 엉덩이가 빵실한 웰시코기와 눈이 마주쳤습니다. 당신의 행동은 ?',
            answerA: '주인분에게 허락을 받고 마구 귀여워해준다',
            answerB: '엄청 만져보고싶지만 참고 속으로만 귀여워한다',
            type: 'EI'
        },
        {
            questionId: 4,
            title: '반려동물의 이름을 지어줘야할 떄 , 어떤 이름을 지어주나요 ?',
            answerA: '비슷한 이름이 괜히 있는게 아니다 "보리,아리,두부"같이 찰떡같은 이름을 지어준다',
            answerB: '내 이름도 흔한이름인데 반려동물마저 흔할수는 없다 창의적인 이름을 지어준다',
            type: 'SN'
        },
        {
            questionId: 5,
            title: '반려동물의 건강을 생각하게 됐을 때,어떻게 준비할까요 ?',
            answerA: '반려동물이 언제 아플지는 아무도 모르니 아플때마다 그때그때 검색해본다',
            answerB: '어릴때부터 미리미리 준비하고 공부해서 언제 아프더라도 대처할 수 있게한다',
            type: 'SN'
        },
        {
            questionId: 6,
            title: '친구가 동물을 키우고싶어 한다면 당신이 친구에게 해줄 말은 ?',
            answerA: '무엇이든 직접 키우게 되면 현실적으로 어렵다. 생명을 책임질 자신이 있으면 키워라',
            answerB: '직접 보고 마음이 끌리는 친구로 키워라',
            type: 'TF'
        },
        {
            questionId: 7,
            title: '길에서 다친 길고양이를 봤다. 어떻게 할까 ?',
            answerA: '치료해도 다시 길로 돌아오면 같은 상황이 생길것이다. 그냥 가던 길을 간다',
            answerB: '길고양이도 생명인데 돈이 문제가 아니다. 고양이를 데리고 동물병원으로 간다',
            type: 'TF'
        },
        {
            questionId: 8,
            title: '반려동물을 산책할 때 당신이 산책하는 방식은 ?',
            answerA: '산책루트,횟수를 생각해서 미리 생각해서 산책간다!',
            answerB: '산책에 계획이 왜 필요하냐! 그냥 내 발 , 반려동물이 가고싶어 하는데로 간다 ',
            type: 'JP'
        },
        {
            questionId: 9,
            title: '입양센터에서 나랑 너무 잘맞는 아이를 만나서 입양준비를 하려할 때 나는 ?',
            answerA: '같이 살아가면서 필요한것들을 계산해서 체계적으로 미리미리 다 사놓고 준비 한다',
            answerB: '지금 필요한것들만 사고 커가면서 필요한게 있다면 그때 그때 산다',
            type: 'JP'
        }
    ])
    const [result, setResult] = useState([
        {
            id: 1,
            name:'거북이',
            best:'ISTJ',
            desc:`한번 시작한 일은 끝까지 해내는 ISTJ${<br/>} 거북이`,
            image:`${turtle}`            
        },
        {
            id: 2,
            name:'비숑',
            best:'ISFJ',
            desc:`성실하고 온화하며 협조를 잘하는 ISFJ ${<br/>} 비숑 `,
            image:`${bichon}`            
        },
        {
            id: 3,
            name:'뱀',
            best:'ISTP',
            desc:`논리적이고 뛰어난 상황적응력을 가진 ISTP ${<br/>} 뱀`,
            image:`${snake}`            
        },
        {
            id: 4,
            name:'토끼',
            best:'ISFP',
            desc:`따뜻한 감성을 가지고 있는 겸손한 ISFP${<br/>} 토끼`,
            image:`${bunny}`            
        },
        {
            id: 5,
            name:'러시안 블루',
            best:'INFJ',
            desc:`사람과 관련된 뛰어난 통찰력을 가진 INFJ${<br/>} 러시안블루`,
            image:`${russianBlue}`            
        },
        {
            id: 6,
            name:'라쿤',
            best:'INTJ',
            desc:`전체적인 부분을 조합하여 비전을 제시하는 INTJ${<br/>} 라쿤`,
            image:`${raccoon}`            
        },
        {
            id: 7,
            name:'여우',
            best:'INFP',
            desc:`이상적인 세상을 만들어가는 INFP${<br/>} 여우`,
            image:`${fox}`            
        },
        {
            id: 8,
            name:'고슴도치',
            best:'INTP',
            desc:`비평적인 관점을 가지고 있는 뛰어난 전력가 INTP${<br/>} 고슴도치`,
            image:`${hedgehog}`            
        },
        {
            id: 9,
            name:'보더콜리',
            best:'ESTP',
            desc:`친구,운동,음식 다양한 활동을 좋아하는 ESTP${<br/>} 보더콜리`,
            image:`${borderCollie}`            
        },
        {
            id: 10,
            name:'웰시코기',
            best:'ESFP',
            desc:`분위기를 고조시키는 우호적인 ESFP${<br/>} 웰시코기`,
            image:`${welshCorgi}`            
        },
        {
            id: 11,
            name:'물고기',
            best:'ESTJ',
            desc:`사무적,실용적,현실적으로 일을 많이하는 ESTJ${<br/>} 물고기`,
            image:`${fish}`            
        },
        {
            id: 12,
            name:'모든 동물',
            best:'ESFJ',
            desc:`친절과 현실감을 바탕으로 타인에게 봉사하는 ESFJ${<br/>} 모든 동물`,
            image:`${animal}`            
        },
        {
            id: 13,
            name:'친칠라',
            best:'ENFP',
            desc:`열정적으로 새로운 관계를 만드는 ENFP${<br/>} 친칠라`,
            image:`${chinchilla}`            
        },
        {
            id: 14,
            name:'카멜레온',
            best:'ENTP',
            desc:`풍부한 상상력을 가지고 새로운것에 도전하는 ENTP${<br/>} 카멜레온`,
            image:`${chameleon}`            
        },
        {
            id: 15,
            name:'리트리버',
            best:'ENFJ',
            desc:`타인의 성장을 도모하고 협동하는 ENFJ${<br/>} 리트리버`,
            image:`${retriver}`            
        },
        {
            id: 16,
            name:'미어캣',
            best:'ENTJ',
            desc:`비전을 가지고 사람들을 활력적으로 이끌어가는 ENTJ${<br/>} 미어캣 `,
            image:`${meerkat}`            
        },
        {
            id: 17,
            name:'돌',
            best:'none',
            desc:`일 때문에 너무 바쁜 당신 ${<br/>} 돌`,
            image:`${rock}`            
        },
    ])
    const value = {
        state: { question,result },
        action: { setQuestion,setResult }
    }
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
})

const {Consumer :DataConsumer} = DataContext;

export { DataConsumer , DataProvider };
export default DataContext;