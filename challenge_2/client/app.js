let App = {
    init: () => {
        $('input').click(App.post);

    },
    post: () => {
        //send POST ajax request to the server
        var data = $('textarea').val();
        // console.log(typeof data);
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/data",
            data: data,
            contentType: "application/json",
            dataType: "text",
            success: (data) => {
                var output = data.split('\n');
                output.forEach(function(ele) {
                    $('.csv').append(`<p> ${ele} </p>`);
                })
            }
            // $('.csv').append(data),
        })
        // console.log($('textarea').val());
        // console.log('hi');
    }
};

$(document).ready(function() {
    App.init();
})

