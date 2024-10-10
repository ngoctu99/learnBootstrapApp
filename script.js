// this session is used to modify value of progress bar

function updateProgressBarValue(value){

    const getProgressBar = document.getElementById('dynamicBar');
    getProgressBar.style.width = value + "%";
    getProgressBar.value = value + "%";
    getProgressBar.innerText = value + "%";

}


const getProgressValueChangeBtn = document.getElementById('progressValueChangeBtn');

if(getProgressValueChangeBtn){

    getProgressValueChangeBtn.addEventListener('click', function(){
        console.log("button geclickt!");
    
        const randomValue = Math.floor(Math.random() * 101);
        updateProgressBarValue(randomValue);
    })
}



function updateProgressBarWithTwoPart(value1, value2){

    const progressBarPart1 = document.getElementById('progressPart1');
    const progressBarPart2 = document.getElementById('progressPart2');

    progressBarPart1.style.width = value1 + "%";
    progressBarPart1.setAttribute('aria-valuenow', value1);
    progressBarPart1.textContent = value1 + "%";

    progressBarPart2.style.width = value2 + "%";
    progressBarPart2.setAttribute('aria-valuenow', value2);
    progressBarPart2.textContent = value2 + "%";

}

const getRandomProgressValueCommitBtn = document.getElementById('randomProgressValueCommitBtn');

if (getRandomProgressValueCommitBtn){

    getRandomProgressValueCommitBtn.addEventListener('click', twoProgressValueModify);

}


function twoProgressValueModify(){

    console.log("randomProgressValueBtn geclickt!");

    const progressValue1 = Math.floor(Math.random() * 100);
    const progressValue2 = 100 - progressValue1;

    updateProgressBarWithTwoPart(progressValue1, progressValue2);

}

// this session is used to initialize Tooltips 

// querySelectorAll return a Nodelist, not completely like array, so [].slice.call(...) is used to transform  into Array
let tooltipsTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

// map() will travel each item of List and modify it then return a new List without changing the old List
let tooltipList = tooltipsTriggerList.map(function (tooltipsTriggerList){
    return new bootstrap.Tooltip(tooltipsTriggerList);
})


let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
let popoverTrigger = popoverTriggerList.map(function (popoverTriggerList){
    return new bootstrap.Popover(popoverTriggerList);
})


const toastBtn = document.getElementById('toastBtn');

if (toastBtn) {

    toastBtn.onclick = function (){

        let failedToastElement = document.getElementById('failedToast');

        let failedToast = new bootstrap.Toast(failedToastElement);

        failedToast.show();
        
    }
}