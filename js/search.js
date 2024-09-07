document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-btn');
    const searchResultsContainer = document.getElementById('search-results');
    const content = document.getElementById('content');

    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    function search(query) {
        const lowerCaseQuery = query.toLowerCase();
        const contentText = content.innerHTML;

        if (lowerCaseQuery) {
            const highlightedContent = highlightText(contentText, lowerCaseQuery);
            searchResultsContainer.innerHTML = highlightedContent;
        } else {
            searchResultsContainer.innerHTML = '';
        }
    }

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        search(query);
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        search(query);
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click(); 
        }
    });
});