 // Đặt tên Class vào hàm
 const Puts=document.querySelectorAll('.js-text-put')
 const modal=document.querySelector('.modal-book-tickets')
 const putclose=document.querySelector('.js-close')
 const modalcontainer=document.querySelector('.modal-container')
 // Thêm open để mở Booktickets
 function ShowBookTickets(){
     modal.classList.add('open')
 }
 // Bỏ open để tắt booktickets
 function CloseBookTickets(){
     modal.classList.remove('open')
 }
 // Vì có 3 Buy tickets nên dùng for để quét 3 cái
 for(const Put of Puts){
     Put.addEventListener('click',ShowBookTickets);
 }
 // Dùng để click âm thanh để thực hiện lệnh (có 1cai nên hk cần dùng for)
 putclose.addEventListener('click',CloseBookTickets);
 modal.addEventListener('click',CloseBookTickets);  // Ấn vào đâu cũng tắt
 // Dùng để click(lệnh stopPropagation) mọi điệm ngoài container thì out khỏi bookticket ( tắt bọt)
 modalcontainer.addEventListener('click',function (event){  // ấn vào trong phần này thì hk tắt
     event.stopPropagation()}
 )
 
//---- Đóng mở menu ở phần header
 var OpenMenu=document.getElementById('js-nav-menu')
 var Headerss=document.getElementById('js-headerss')
 var HeadersHight=Headerss.clientHeight ;  // gán height vào biến 
 OpenMenu.onclick=function(){
     // alert('thong bao test');
     // console.log(Headerss.clientHeight); //để đo chiều cáo
     var isClosed = Headerss.clientHeight === HeadersHight; // gán so sánh vào isClose
     if (isClosed){
         Headerss.style.height='auto';
     }
     else{
         Headerss.style.height= null;
     }
 }
//-- Đóng khi nhấn vào 1 cái
 const closeMenus=document.querySelectorAll('.js-close-menu li a[href*="#"]') //lấy các giá trị a có #

 for(var i=0; i < closeMenus.length; i++){
     var closeMenu=closeMenus[i];
     //console.log(closeMenu.nextElementSibling);  // Kiểm tra ở vị trí tiếp theo bên cạnh thẻ a có chị em liền kề nào hk
         closeMenu.onclick=function(event){
             //console.log(this); this là thằng mình click vào 
         var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('nav2');    //Kiểm tra 2 điều kiện có thẻ liền kế khi ta click vào 1 thẻ xem có ae liền kề hk nếu đúng thì lưu vào biến
         if(!isParentMenu){
             Headerss.style.height= null;
         }
         else{
             event.preventDefault();
         }
     }
 }
// Cách viết gọn hơn
 // function Dieclosemenu(){
 //     Headerss.style.height= null;
 // }
 // for(closeMenu of closeMenus){
 //     closeMenu.addEventListener('click',Dieclosemenu);
 // }