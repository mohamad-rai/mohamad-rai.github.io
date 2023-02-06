$('#send').on('click', () => {
    const data = {
        name: $('#name').val(),
        subject: $('#subject').val(),
        email: $('#email').val(),
        message: $('#message').val()
    };
    const alert = $('#alert');

    $.ajax({
        url: 'server.php',
        method: 'post',
        data: {data}
    })
        .done(result => {
            if (result.result) {
                alert
                    .removeClass("alert-success alert-danger")
                    .addClass('alert-success')
                    .text("message successfully sent")
                    .slideDown();
                $('input, textarea').val("");
            }
            else alert
                .removeClass("alert-success alert-danger")
                .addClass('alert-danger')
                .text("something went wrong, if it happend again use phone or email.")
                .slideDown();
        })
        .fail(err => {
            alert
                .removeClass("alert-success alert-danger")
                .addClass('alert-danger')
                .text("something went wrong, if it happend again use phone or email.")
                .slideDown();
        });
    setTimeout(()=>{
        alert.text("").slideUp();
        console.log('hi');
    }, 10000);
})