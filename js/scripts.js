//Grid categorias

$(".gridFooter figure").mouseover(function () {
    $(this).css({ "background-position": "right bottom" })
})
$(".gridFooter figure").mouseout(function () {
    $(this).css({ "background-position": "left top" })
})

$(".gridFooter figure").click(function () {
    var vinculo = $(this).attr("vinculo");

    window.location = vinculo;
})


window.onload = function () {
    $('#onload').fadeOut("slow");
    $('body').removeClass('hidden')
}

const btnscroll = document.querySelector('#scrollup');
    btnscroll.addEventListener("click", function () {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })