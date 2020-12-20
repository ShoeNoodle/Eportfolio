function onReady(callback) {
    var intervalID = window.setInterval(5000);
    onRead(function ());
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
