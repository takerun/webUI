function loadingAnimation() {
    var textArea = document.getElementById('textArea');
    var cover = document.getElementById('animation-5');
    cover.style.display = 'block';
    cover.style.cursor = 'wait';

    acync_sleep(() => {
        // something to do
        textArea.innerHTML = 'end';
        cover.style.display = 'none';
        cover.style.cursor = 'auto';
    },2000);

   //done();
}

function acync_sleep(callback, waitMsec) {
    setTimeout(() => {
        callback();
       }, waitMsec);
}

/*
async function done() {
    sleep(2000);
    var textArea = document.getElementById('textArea');
    var cover = document.getElementById('animation-5');
    textArea.innerHTML = 'end';
    cover.style.display = 'none';
    cover.style.cursor = 'auto';
}

// ビジーwaitを使う方法
function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}
*/