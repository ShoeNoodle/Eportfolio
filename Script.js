function onReady(callback) {
    var intervalID = window.setInterval(5000);
    function checkReady() {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
