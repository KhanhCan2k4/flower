const platesList = document.querySelectorAll('.pot');
const f1 = document.querySelector('#f1');
const f2 = document.querySelector('#f2');
const f3 = document.querySelector('#f3');
const xeng = document.querySelector('#xeng');
const cash = document.querySelector('#cash');
let currentIndex;

// step 1: choose the flower
f1.onclick = function () {
    if (currentIndex != null) {
        currentIndex.style.border = 'unset';
    }
    this.style.border = '1px yellow solid';
    currentIndex = f1;
};

f2.onclick = function () {
    if (currentIndex != null) {
        currentIndex.style.border = 'unset';
    }
    currentIndex = f2;
    this.style.border = '1px yellow solid';
};

f3.onclick = function () {
    if (currentIndex != null) {
        currentIndex.style.border = 'unset';
    }
    currentIndex = f3;
    this.style.border = '1px yellow solid';
};

//unbuying
xeng.onclick = function () {
    if (currentIndex != null) {
        currentIndex.style.border = 'unset';
    }
    currentIndex = xeng;
    this.style.border = '1px solid #f00';
};

//step 2: buy plate
platesList.forEach(element => {
    element.onclick = function () {
        if (currentIndex != null && currentIndex != xeng) {

            if (element.classList.contains('flower')) {
                alert("Không thể đặt chậu hoa ở đây");
            }
            else if (+currentIndex.textContent > +cash.textContent ) {
                alert("Bạn không đủ tiền mua chậu hoa này");
            } 
            else
            {
                element.classList.add("flower");
                let src;
                switch (currentIndex) {
                    case f1:
                        src = 'public/images/f1.png';
                        break;
                    case f2:
                        src = 'public/images/f2.png';
                        break;
                    case f3:
                        src = 'public/images/f3.png';
                        break;
                    default:
                        break;
                }
                element.innerHTML = '<img src="'+src+'" class="flower"><img src="public/images/plate.png" class="plate">';
                
                cash.textContent = +cash.textContent - +currentIndex.textContent;
            } 
        }
        else if(currentIndex == xeng)
        {
            if (element.classList.contains('flower')) {
                let money = 0;
                console.log(element.innerHTML);
                switch (element.innerHTML) {
                    case '<img src="public/images/f1.png" class="flower"><img src="public/images/plate.png" class="plate">':
                        money = +f1.textContent;
                        break;
                    case '<img src="public/images/f2.png" class="flower"><img src="public/images/plate.png" class="plate">':
                        money = +f2.textContent;
                        break;
                    case '<img src="public/images/f3.png" class="flower"><img src="public/images/plate.png" class="plate">':
                        money = +f3.textContent;
                        break;
                    default:
                        break;
                }
                console.log(money);
                cash.textContent = +cash.textContent + +money;
                element.classList.remove('flower');
                element.innerHTML = '<img src="" class="flower"><img src="public/images/plate.png" class="plate">';
            }
            else
            {
                alert("Chưa có chậu hoa ở đây");
            } 
        }
        else {
            alert("Bạn phải chọn một chậu hoa");
        }
    }
});



// if (isRefunded == true) {
//    
// }