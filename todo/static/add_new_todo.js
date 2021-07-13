window.onload = function () {
    document.getElementById("addNewID").addEventListener("click", debounce(e => {
        console.log('clicked');
    }, 2000));
}
