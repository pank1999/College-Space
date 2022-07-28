var menu = document.querySelector("#menu");
var lmenu2= document.querySelector(".lmenu2");
var arr = [ { naam: "neeraj pandey", email:"np375431@gmail.com",img:"https://images.unsplash.com/photo-1632177159276-5439f42b7711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"}];  
 var jhanda = 1;
/*
menu.addEventListener('click' , function(){
 var temp = "";
 
arr.forEach(function(val){
if(jhanda == 1){
  temp +=`
  <div class="lmenu">
  <div class="display">
  <div class="profile">
          <img src="${val.img}" alt="">
        </div>
        <h3 class="name">${val.naam}</h3>
        <h5 class="email">${val.email}</h5>
  </div>
  <div class="ilist">
  <i class="ri-account-box-line"></i>
  <i class="ri-book-fill"></i>
  <i class="ri-save-line"></i>
  <i class="ri-money-pound-box-line"></i></div>
  <div class="list">
    <a href="">my account</a>
    <a href="">educational info</a>
    <a href="">saved</a>
    <a href=""> payment detail</a>
  </div>
  </div>`;
lmenu2.innerHTML= temp;
console.log(arr)
jhanda=0;
}
 else{
   temp = "";
   console.log("uss");
   lmenu2.innerHTML= temp;
   jhanda = 1;
  }
})
});
*/