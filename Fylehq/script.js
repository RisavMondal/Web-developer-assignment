// Navbar Sticky Section 

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  // Contact Pop Up Section 

let popup = document.querySelector(".contact-form");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// Services Section 

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Our Project Section

var li_elements = document.querySelectorAll(".text-container .text-item");
var item_elements = document.querySelectorAll(".item");
for(var i=0; i<li_elements.length; i++){
    li_elements[i].addEventListener("click", function(){
        li_elements.forEach(function(div){
            div.classList.remove("active");
        })
        this.classList.add("active");
        var li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item){
            item.style.display = "none";
        })
        if(li_value == "one"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value == "two"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else if(li_value == "three"){
            document.querySelector("." + li_value).style.display = "block";
        }
        else{
            console.log("");
        }

    })
} 






