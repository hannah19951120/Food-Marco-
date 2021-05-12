// $(window).scroll(function () {
//     let $body = window.opera
//       ? document.compatMode == "CSS1Compat"
//         ? $("html")
//         : $("body")
//       : $("html,body");
//     $body.animate(
//       {
//         scrollLeft: 0
//       },
//       0
//     );
//   });

  //禁止向右邊滾動



//-----------------------------------------------
// 計算機 
//-------------------------------------------------
    const approbateMinus= document.getElementById('approbateMinus');
    const approbatePlus = document.getElementById('approbatePlus');
    const approbateInput = document.getElementById('calculatorApprobate');
    let approbateNum = approbateInput.value;
    let countApprobateNum =()=>{
        approbateNum = approbateInput.value;
    }

    const priceMinus= document.getElementById('priceMinus');
    const pricePlus = document.getElementById('pricePlus');
    const priceInput = document.getElementById('calculatorPrice');
    let priceNum = calculatorPrice.value;
    let countPriceNum =()=>{
        priceNum = calculatorPrice.value;
    }

    let countMcoin=()=>{
        let approbateNum_1000 =0;
        let coin = 0;
        countApprobateNum();
        countPriceNum();
        // console.log(`認可${approbateNum}`);
        // console.log(`客單價${priceNum}`);
        if(approbateNum==0||priceNum==0){
            coin = 0;
        }else if(approbateNum==1){
            coin = priceNum*0.2;
        }else if(approbateNum==2){
            coin = priceNum*0.2 + priceNum*0.25;
        }else if(approbateNum==3){
            coin = priceNum*0.2 + priceNum*0.25 + priceNum*0.3;
        }else if(approbateNum>=4&&approbateNum<10){
            coin = priceNum*0.2 + priceNum*0.25 + priceNum*0.3+(approbateNum-3)*priceNum*0.1;
        }else if(approbateNum>=10){
            approbateNum_1000 = parseInt(approbateNum % 100000 % 10000 % 1000 % 100 / 10);
            coin = priceNum*0.2 + priceNum*0.25 + priceNum*0.3+(approbateNum-3)*priceNum*0.1;
        }else{
            console.log('錯誤')
        }
        coin = Math.round(coin);
        innerCoinHtml(coin,approbateNum_1000,approbateNum,priceNum);
        // Mcoin1000.innerHTML = `<h5>哇！你獲得 ${approbateNum} 筆認可！</h5>
        // <h5>加碼${approbateNum_1000}M幣，總共<span class="t-primary">${approbateNum_1000+approbateNum}</span>M幣入袋！</h5>`;
    }


    const coin_container = document.getElementById('McoinText');
    const Mcoin1000_container = document.getElementById('Mcoin1000');
    let innerCoinHtml =(coin,approbateNum_1000,approbateNum,priceNum)=>{
        // console.log(coin);
        // console.log(approbateNum_1000);
        let coinStr ='';
        let McoinStr ='';
        if (priceNum==0){
            McoinStr = `<h5>記得填寫客單價才能計算喔！</h5>`
        }else if(approbateNum==0){
            McoinStr = `<h5>還沒得到任何認可嗎？只要認真分享真實內容就有機會獲得認可喔！</h5>`
        }
        else if(approbateNum>=1&&approbateNum<10){
            McoinStr =`<h5>還想要更多獎金嗎？累積滿10個認可還有好禮拿喔！</h5>`;
        }else if(approbateNum>=10){
            McoinStr = `<h5>哇！你獲得 ${approbateNum} 筆認可！</h5>
            <h5>加碼${approbateNum_1000*1000}M幣，總共<span class="t-primary">${approbateNum_1000*1000+coin}</span>M幣入袋！</h5>`;
        }
        // console.log(McoinStr);
        coin_container.innerHTML = `${coin}M幣`;
        Mcoin1000_container.innerHTML = McoinStr;
    }


    countMcoin();

    //綁定事件監聽
   let btnArry = [approbateMinus,approbatePlus,priceMinus,pricePlus];
   btnArry.forEach(item=>{
        item.addEventListener('click',function(){
         countMcoin();
        })
   });
   let inputArry = [approbateInput,priceInput];
   inputArry.forEach(item=>{
    item.addEventListener('blur',function(){
        countMcoin();
       })
   })
//-----------------------------------------------
// 計算機結束
//-------------------------------------------------


//-----------------------------------------------
// POP彈窗開始
//-------------------------------------------------
const popupOpen = document.querySelectorAll(".btn-question");
const popupArry = document.querySelectorAll(".overlay");
const approbatePopup = document.getElementById('approbatePopup');
const earnMoneyPopup = document.getElementById('earnMoneyPopup');
const howPayPopup = document.getElementById('howPayPopup');

const closeBtnArry = document.querySelectorAll(".popClose");

let getPopupName =()=>{
    let popvalue = '';
    popupOpen.forEach(item=>{
        item.addEventListener('click',function(e){
            e.preventDefault();
            popvalue = e.target.dataset.openpopup;
            openPopup(popvalue);
        })
    })
}

let closePopup =()=>{
    popupArry.forEach(item=>{
        item.style.display ='none';
    })
}

let closeBtnClick =()=>{
    closeBtnArry.forEach(item=>{
        item.addEventListener('click',function(){
            event.preventDefault();
            console.log('d');
            closePopup();
        })
    })
}

let openPopup = (popvalue)=>{
    closePopup();
    console.log(popvalue);
    if(popvalue=='approbate'){
        approbatePopup.style.display = 'block';
    }else if(popvalue=='earnMoney'){
        earnMoneyPopup.style.display = 'block';
    }else if(popvalue=='howPay'){
        howPayPopup.style.display = 'block';
    }
}

closeBtnClick();
getPopupName();
//-----------------------------------------------
// POP彈窗結束
//-------------------------------------------------

//-----------------------------------------------
// 計算機切換
//-------------------------------------------------
const calculationBtn = document.getElementById('calculationBtn');
const rankBtn = document.getElementById('rankBtn');
const calculation = document.getElementById('calculationContainer');
const rank = document.getElementById('rankContainer');

calculationBtn.addEventListener('click',function(){
    event.preventDefault();
    console.log('d');
    calculation.style.display = 'block';
    rank.style.display = 'none';
})

rankBtn.addEventListener('click',function(){
    event.preventDefault();
    console.log('d');
    rank.style.display = 'block';
    calculation.style.display = 'none';
})
//-----------------------------------------------
// 計算機切換結束
//-------------------------------------------------