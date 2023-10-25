function onloadPage () {
    document.getElementById('coupon').style.visibility = 'visible';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
}




const changeMode = () =>{
    let bodyElement = document.body;
    bodyElement.classList.toggle('mydark');
} 
