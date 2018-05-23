let App = {
    init: () => {
        $('input').click(App.post);

    },
    post: () => {
        //send POST ajax request to the server
        var data = $('textarea').val();
        $('table').html('');
        // console.log(typeof data);
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/data",
            data: data,
            contentType: "application/json",
            dataType: "text",
            success: (data) => {
                console.log(data);
                var output = data.split('\n');

                for(let i = 0; i < output.length; i ++) {
                    $('table').append(`<tr class=${i} align="middle"></tr>`);
                    let eachArr = output[i].split(',');
                    for(let j = 0; j < eachArr.length; j ++) {
                        $(`.${i}`).append(`<td>${eachArr[j]}</td>`)
                    }
                }




                // console.log(output);
                // var eachArr = output.forEach(function(ele) {
                //     ele.split(',');
                // })
                // console.log(eachArr);

                // output.forEach(function(ele) {
                //     $('.csv').append(`<p> ${ele} </p>`);
                // })
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

