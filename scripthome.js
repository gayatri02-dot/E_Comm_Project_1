
$(document).ready(function () {

    $('#home').click(function () {
        window.location.href = "homepage.html"

    })
    $('#category').click(function () {
        window.location.href = "category page.html"
    })
    $('#account').click(function () {
        window.location.href = "your account.html"
        saywelcome();
    })
    $('#cart').click(function(){
        window.location.href = "cart.html";
    })
    $('.category').mouseenter(function () {
        $('.category').css('cursor', 'pointer')
    })
    $('.navelement').mouseenter(function () {
        $('.navelement').css('cursor', 'pointer')
    })
    $('.backbtn').click(function () {
        window.location.href = "category page.html"
    })
    $('.backbtn').mouseenter(function () {
        $('.backbtn').css('cursor', 'pointer')
    })
    $('#category1').click(function () {
        window.location.href = "itemstop1.html"
    })
    $('#category4').click(function () {
        window.location.href = "itemsdress.html"
    })
    $('#category3').click(function () {
        window.location.href = "itemsskirts.html"
    })
    $('#category2').click(function () {
        window.location.href = "itemtshirt.html"
    })
    $('#category6').click(function () {
        window.location.href = "itemsshoes.html"
    })
    $('#category5').click(function () {
        window.location.href = "itemsandels.html"
    })
    $('#category7').click(function () {
        window.location.href = "itmebags.html"
    })
    $('#category8').click(function () {
        window.location.href = "itemsassesory.html"
    })

    $('#login_btn').click(function () {
        $('#login').show()
    })
    $('.cancle').click(function () {
        $('#login').hide()
        $('#signup').hide()
    })
    $('.cancle').mouseenter(function () {
        $('.cancle').css('cursor', 'pointer')
    })
    $('#signup_btn').click(function () {
        $('#signup').show()
        $('#login').hide()
    })
    $('#loginformshow_btn').click(function () {
        $('#signup').hide()
        $('#login').show()
    })
    $('#showm1').click(function () {
        $('#password1').prop('type', 'text')
        $('#showm1').hide();
        $('#hidem1').show();
    })
    $('#hidem1').click(function () {
        $('#password1').prop('type', 'password');
        $('#showm1').show();
        $('#hidem1').hide();
    })
    $('#showm2').click(function () {
        $('#password2').prop('type', 'text')
        $('#showm2').hide();
        $('#hidem2').show();
    })
    $('#hidem2').click(function () {
        $('#password2').prop('type', 'password');
        $('#showm2').show();
        $('#hidem2').hide();
    })
    $('#showm3').click(function () {
        $('#password3').prop('type', 'text')
        $('#showm3').hide();
        $('#hidem3').show();
    })
    $('#hidem3').click(function () {
        $('#password3').prop('type', 'password');
        $('#showm3').show();
        $('#hidem3').hide();
    })
    for (let i = 1; i <= 8; i++) {
        var price = parseFloat($(`.p${i}`).text());
        var discountPercentage = parseFloat($(`.dis${i}`).text());
        var discountedPrice = price / (discountPercentage / 100);
        $(`.dp${i}`).text(discountedPrice.toFixed(2));
    }
    for (let i = 1; i <= 8; i++) {
        $(`#wish${i}`).click(function () {
            {
                $(`#w${i}`).hide();
                $(`#r${i}`).show();
            }
        })
    }
    for (let i = 1; i <= 8; i++) {
        $(`#cart${i}`).click(function () {
            {
                $(`#ba${i}`).hide();
                $(`#ad${i}`).show();
                $(`#citem${i}`).append(`#data-itemdiv${i}`);
            }
        })
    }
})

function saywelcome() {
    var x = document.f1.username.value;
    document.getElementById('acholdername').innerHTML = " " + x;

}
function saveValue() {
    const inputuser = document.getElementsByName('userentered')[0].value;
    if (inputuser) {
        localStorage.setItem('userid', inputuser);
    }
    if (document.getElementById('password3').value === document.getElementById('password2').value) {
        const inputpass = document.getElementsByName('passentered')[0].value;
        if (inputpass) {
            localStorage.setItem('pass', inputpass);
            alert("Signup succsessful!!");
        }

    }
    else {
        document.getElementById("err1_msg").innerHTML = "password doesn't match!!!!"
    }

}
function validate() {
    const userid = localStorage.getItem('userid');
    const pass = localStorage.getItem('pass')
    var usid = document.f1.username.value;
    var psid = document.f1.passwordA.value;
    if ((usid.trim() === "") && (psid.trim() === "")) {
        document.getElementById("err_msg").innerHTML = "Enter Valid info!!"
    }
    else if ((usid == userid) && (psid == pass)) {
        alert("Login succsessful!!");
        window.location.href = "homepage.html";
    }
    else {
        document.getElementById("err_msg").innerHTML = "Userid and Password is incorrect!!!!"
    }
}








