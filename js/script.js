var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 3000)
function plusDiv(index) {
    showImage(slideIndex += index)
}
function showImage(index) {
    const imageList = document.getElementsByClassName("img-slideshow")
    console.log(imageList);
    var i;
    if (index > imageList.length) { slideIndex = 1 }
        if (index < 1) { slideIndex = imageList.length}    
            for ( i = 0; i < imageList.length; i++)    {
                imageList[i].style.display = "none"
            }
            imageList[slideIndex - 1].style.display = "block"
        }




        function validateForm() {
            const name = document.forms['userForm']['name'].value;
            const email = document.forms['userForm']['email'].value;
            const select = document.forms['userForm']['select'].value;


            if (name == ''|| email == '' || select =='') {
                alert('The form is empty');
            } else {
                alert('Thank You');
            }
            return false;
        }


