inp1 = document.getElementsByClassName("bir")[0]
btn = document.getElementsByClassName("duyme")[0]


btn.addEventListener("click",function () {
    inp1.value = inp1.value.toUpperCase();
})