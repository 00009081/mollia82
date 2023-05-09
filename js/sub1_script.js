//contact
$('.option_wrap').hide();
$('#select_btn').click(function(){
    $('.option_wrap').toggle();
});
$(function () {
    $("#select_btn").click(function () {
        $(this).children().children("img").toggleClass("turn");
     });
});

$(function () {
    $("#option p").click(function () {
        $(".plus img").toggleClass("turn");
     });
});



$('.first').click(function(){
    $('input#input').show();
    $('.option_wrap').hide()
});

function option1(){
    document.getElementById('select').innerHTML = '직접 입력'
};

function option2(){
        document.getElementById('select').innerHTML = 'naver.com';
        $('.option_wrap').hide();
        $('input#input').hide();
};
function option3(){
        document.getElementById('select').innerHTML = 'nate.com';
        $('.option_wrap').hide();
        $('input#input').hide();
    };
function option4(){
        document.getElementById('select').innerHTML = 'hanmail.net';
        $('.option_wrap').hide();
        $('input#input').hide();
    };
function option5(){
        document.getElementById('select').innerHTML = 'google.com';
        $('.option_wrap').hide();
        $('input#input').hide();
    };
function option6(){
        document.getElementById('select').innerHTML = 'kakao.com';
        $('.option_wrap').hide();
        $('input#input').hide();
    };