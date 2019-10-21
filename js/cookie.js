const body = document.getElementById('body_container');

let txt = `<div class="cookie_container">
    <div class="cookie_inner">
        <p class="cookie_text">僕のWebサイトでは、プログラミングの向上を目的に、クッキーを使用しています。<br>閉じるボタンを押すと、本Webサイトよりクッキーを受信し、保存します！</p>
        <div class="btn_container">
            <div class="cookie_btn">閉じる</div>
        </div>
    </div>
</div>
<div class="open_btn">Cookieを消す</div>`;
body.insertAdjacentHTML('beforeend', txt);

const close_btn = document.querySelector('.cookie_btn');
const open_btn = document.querySelector('.open_btn');
const cookie_container = document.querySelector('.cookie_container');

close_btn.addEventListener('click', () => {
    document.cookie = 'BokunoCookie=true';
    // cookie_container.classList.add('cookie_clicked');
    if(cookie_container.style.bottom = '0'){
        cookie_container.style.bottom = '-120px';
        cookie_container.style.visibility = 'hidden';
        open_btn.style.bottom = '0';
        open_btn.style.visibility = 'visible';
    }
    
});


open_btn.addEventListener('click', () => {
    if (cookie_container.style.bottom = '-120px') {
        open_btn.style.bottom = '-50px';
        open_btn.style.visibility = 'hidden';
        cookie_container.style.bottom = '0';
        cookie_container.style.visibility = 'visible';

        document.cookie = 'BokunoCookie="true"; max-age=0';
    }

});

if (document.cookie.indexOf("BokunoCookie=true") === 0){
    cookie_container.style.bottom = '-120px';
    cookie_container.style.visibility = 'hidden';
    open_btn.style.bottom = '0';
    open_btn.style.visibility = 'visible';
}

