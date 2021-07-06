var reward=['lambogini aventador','sh 150i','honda wade','tu lanh', 'chuot may tinh', 'but bi'];
function chonqua(){
    var d=50;
    var time = setInterval(function (){
        var i=Math.random()*6;
        i=parseInt(i);
        var kq =document.getElementById("ketqua");
        kq.innerText="mon qua nhan duoc:"+reward[i];
        d--;
        if(d<=0){
            clearInterval(time);
        }

    },50);
}
// function chonQua(){
//     var count = 50;
//     var timer = setInterval(function (){
//         // chon qua ngau nhieu tu danh sach
//         var i = Math.random()*40;
//         i = parseInt(i);// 1 số ngẫu nhiên trong danh sach
//         // in ra kết quả
//         var kq = document.getElementById("ketqua");
//         kq.innerText = "Món quà nhận được: "+reward[i];
//         // chuyển đến lần chọn tiếp theo
//         count--;
//         if(count <=0){
//             clearInterval(timer);
//         }
//     },50);
// }