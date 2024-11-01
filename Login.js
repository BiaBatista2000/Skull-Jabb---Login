document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.querySelector(".search-bar");
    const searchIcon = document.querySelector(".search-icon");

    function performSearch() {
        const query = searchBar.value.trim();
        if (query) {
            window.location.href = `https://chatgpt.com/c/67253e22-6744-8008-8f1a-edf076819225`;
        }
    }

    searchIcon.addEventListener("click", performSearch);

    searchBar.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});
