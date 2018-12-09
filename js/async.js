
window.onload = () => {
    var value = 0;
    async_routine(value);
}

async function async_routine(x) {
    var obj = document.getElementById('textArea');

    console.log(x);
    obj.insertAdjacentHTML('beforeend', x);
    sleep(1000);

    x++;
    console.log(x);
    obj.insertAdjacentHTML('beforeend', x);
    sleep(1000);
    
    x = await syncronize(x);
    console.log(x);
    obj.insertAdjacentHTML('beforeend', x);
    sleep(1000);

    x++;
    console.log(x);
    obj.insertAdjacentHTML('beforeend', x);
}

function syncronize(x) {
    return new Promise(resolve => {
        async_process(x, resolve);
    })
}

function async_process(x,callback) {
    setTimeout(() => {
        // 非同期処理↓
        x++;
        callback(x);
    }, 1000);
}

// ビジーwaitを使う方法
function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}