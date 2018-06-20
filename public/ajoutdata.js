$(function () {

    $('#send').on("click", function () {

        var name = $("#name").val();
        var genre = $("#gender").val();
        console.log(name);
        console.log(genre);


        var url = "http://localhost:3013/add"
        $.post(url, { name: name, genre: genre}, function (data) {
        });
    })



})