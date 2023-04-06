// Scripts for hate speech document
// id of textarea is ml-text, while id of submit btn is ml-btn
// id of display area is ml-result, while id of clear btn is clear-text
// lets get to work!

$(document).ready(function(){
    $("#ml-bn").on('click',function(e) {
        e.preventDefault();
        $.get('/output/', {}, function(){
            $("#ml-result").html(data.display_text);
        })
    })
})