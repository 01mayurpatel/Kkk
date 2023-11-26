
document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

        try {
            var navBtns = document.getElementsByClassName('MenuLink');
            for(var i=0;i<navBtns.length;i++){
                if(navBtns[i].getAttribute('href')==='isolated.html'){
                    navBtns[i].style.display="none";
                }
            }   
        } catch (error) {
            console.log("error");
        }

        try {
            var backBtn = document.getElementsByClassName('Menu__back-button')[0];
            var Imgsrc = backBtn.getElementsByTagName('img')[0];
            Imgsrc.setAttribute('src','img/logo.png');
            Imgsrc.style.width="40px";
            Imgsrc.style.height="auto";
            Imgsrc.style.marginTop="8px";
            Imgsrc.style.marginBottom="5px";
            Imgsrc.style.pointerEvents="none";
            backBtn.style.pointerEvents="none";

            // console.log(backBtn)
        } catch (error) {
            
        }

        try {
            var mobNavBtns = document.getElementsByClassName('MobileContent__link');
            for(var i=0;i<mobNavBtns.length;i++){
                if(mobNavBtns[i].getAttribute('href')==='isolated.html'){
                    mobNavBtns[i].style.display="none";
                }
            } 
        } catch (error) {
            console.log("error")
        }


        try {
            var bottomLink = document.getElementsByClassName('DepositBorrowMainWrapper__changeMarket-inner')[0];
            bottomLink.style.display='none';
        } catch (error) {
            
        }




        var logo = document.getElementsByClassName('Menu__logo-inner')[0];
        // var logoA = logo.getElementsByTagName('a')[0];
       
        
        
        // var backBtn = document.getElementsByClassName('Menu__back-button')[0];
        // backBtn.getElementsByTagName('img')[0].setAttribute('src','static/media/back.png');

        var element = document.getElementsByClassName('TokenIcon__image');
        var element2 = document.getElementsByClassName('TokenIconWithFullName');


        for (var i = 0; i < element.length; i++) {
            if (element[i].getAttribute('alt') === "sAVAX") {
                element[i].setAttribute('src', "img/Etherum.svg");

            }
            if (element[i].getAttribute('alt') === "DAI.e") {

                element[i].setAttribute('src', "img/bitcoin.svg");

            }

            if (element[i].getAttribute('alt') === "WETH.e") {

                element[i].setAttribute('src', "img/USDT.svg");


            }
            if (element[i].getAttribute('alt') === "BTC.b") {

                element[i].setAttribute('src', "img/DAI.svg");


            }
            if (element[i].getAttribute('alt') === "AVAX") {

                element[i].setAttribute('src', "img/SAVAX.svg");


            }
            if (element[i].getAttribute('alt') === "USDC") {

                element[i].setAttribute('src', "img/WETH.svg");


            }
            if (element[i].getAttribute('alt') === "USDt") {

                element[i].setAttribute('src', "img/USDC.svg");


            }
        }
        for (var j = 0; j < element2.length; j++) {
            var imgTag = element2[j].getElementsByClassName('TokenIcon__image')[0];
            var pTag = element2[j].getElementsByClassName('TokenIcon__name')[0];

            if (imgTag.getAttribute('alt') === "sAVAX") {

                pTag.innerHTML = '<b>ETH</b>';
            }
            if (imgTag.getAttribute('alt') === "DAI.e") {

                pTag.innerHTML = '<b>BTC.B';

            }
            if (imgTag.getAttribute('alt') === "WETH.e") {

                pTag.innerHTML = '<b>USDT</b>';


            }
            if (imgTag.getAttribute('alt') === "BTC.b") {

                pTag.innerHTML = '<b>DAI(DAI.e)</b>'


            }
            if (imgTag.getAttribute('alt') === "AVAX") {

                pTag.innerHTML = '<b>SAVAX</b>';


            }
            if (imgTag.getAttribute('alt') === "USDC") {

                pTag.innerHTML = '<b>WETH   </b>'


            }
            if (imgTag.getAttribute('alt') === "USDt") {

               pTag.innerHTML='<b>USDC</b>'


            }
        }


    }, 50)

});








