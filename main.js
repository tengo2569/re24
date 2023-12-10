const act1 = document.querySelectorAll(".icon");
const act2 = document.querySelectorAll(".icon1");
const act3 = document.querySelectorAll('.showdiv'); 


for (let i = 0; i < act1.length; i++){
    act1[i].addEventListener('click', function() {
        act3[i].classList.add('active'); 
        act3[i].classList.remove('active2'); 
    });
    
    act2[i].addEventListener('click', function() {
        act3[i].classList.add('active2'); 
        act3[i].classList.remove('active'); 
    });
}
