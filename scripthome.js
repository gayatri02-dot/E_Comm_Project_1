
$(document).ready(function () {

    $('#home').click(function () {
        window.location.href = "homepage.html"
        
    })
    $('#category').click(function () {
        window.location.href = "category page.html"
    })
    $('#account').click(function(){
        window.location.href = "your account.html"
        saywelcome();
    })
    $('.category').mouseenter(function () {
        $('.category').css('cursor', 'pointer')
    })
    $('.navelement').mouseenter(function () {
        $('.navelement').css('cursor', 'pointer')
    })
    $('.backbtn').click(function(){
        window.location.href = "category page.html"
    })
    $('.backbtn').mouseenter(function(){
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
})
function saywelcome(){
    var x=document.f1.username.value;
    document.getElementById('acholdername').innerHTML =  " "+x;
    
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
// afterloadscript();

// function startInterval() {
//     let isrunning = false;
// let homeinterval;
//     if (!isrunning) {
//         homeinterval = setInterval(loadhome(), 500);
//         isrunning = true;
//     }
// }
// function stopInterval() {
//     let isrunning = false;
// let homeinterval;
//     clearInterval(homeinterval); // Stop the repeating action
//     isrunning = false;
// }
// function loadhome() {
//     fetch('homepage.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("container").innerHTML = data;
//         })
//         // .then(data=>{
//         //     document.getElementById("menubardiv").hide = data;
//         // }
            
        
            
        
//     document.body.style.backgroundImage = "url('All Images/homebg.jpeg')";
// }
// function loadcategory() {
//     fetch('category page.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("container").innerHTML = data;
//             afterloadscript();
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ clooting\ 5.jpg')";
// }

// function loaditemtop() {
//     fetch('itemstop1.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('container').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemdress() {
//     fetch('itemsdress.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemskirt() {
//     fetch('itemsskirts.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemtshirt() {
//     fetch('itemtshirt.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemshoe() {
//     fetch('itemsshoes.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemsandel() {
//     fetch('itemsandels.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditembag() {
//     fetch('itmebags.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }

// function loaditemacce() {
//     fetch('itemsassesory.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('categorydiv').innerHTML = data;
//         })
//     document.body.style.backgroundImage = "url('All Images/background\ item.avif')";

// }