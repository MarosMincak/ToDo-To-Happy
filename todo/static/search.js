/* SEARCH */
window.onload = function () {
    var currentOutput = $("#current-output")
    currentOutput.hide()


    var currentBaseOutput = $("#current-base-output")
    currentBaseOutput.show()

    var currentSearchOutput = document.getElementById("currentSearchOutput");

    var searchField = document.getElementById('searchField');
    searchField.addEventListener("keyup", debounce(e => {
        const searchField = e.target.value;
        if (searchField.trim().length > 0) {
            console.log("searchField", searchField);

            fetch("search_current", {
                body: JSON.stringify({searchText: searchField}),
                method: "POST",
            })
                .then((res) => res.json())
                .then((data) => {

                    console.log("data", data);
                    currentOutput.empty();
                    currentBaseOutput.hide();
                    currentOutput.show();


                    if (data.length === 0) {
                        currentOutput.append('No results found');
                    } else {
                        data.forEach(item => {
                            if (item.important) {
                                currentOutput.append(`<li><svg>
                        <circle cx="13" cy="14" r="11"></circle>
                    </svg><p><strong>${item.title}</strong></p></li>`);
                            } else {
                                currentOutput.append(`<li><svg>
                        <circle cx="13" cy="14" r="11"></circle>
                    </svg><p>${item.title}</p></li>`);
                            }
                        });
                    }
                });
        } else {
            currentBaseOutput.show()
            currentOutput.hide()
        }
    }, 250));
}

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};