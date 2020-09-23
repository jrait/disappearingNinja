function addImage(image) {
    var images_to_fill = 8 - $('img').length;
    for (var i = 0; i < images_to_fill; i++) {
        $('#images').append('<img class = "avatar" src = ' + image + '>');
    }
}
addImage("heVanished.gif")

$('.avatar').click(function () {
    $(this).remove()
    console.log('removed image')
})
$('button').click(function () {
    addImage('boy_in_the_iceberg.png');
    console.log('images added')
    $('.avatar').click(function () {
        $(this).remove()
        console.log('removed image')
    })
})
