function search() {
    const query = document.getElementById('query').value;
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        data.results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<h3>${result.title}</h3><p><a href="${result.url}" target="_blank">${result.url}</a></p>`;
            resultsDiv.appendChild(resultElement);
        });
    });
}

function googleSearch() {
    const query = document.getElementById('query').value;
    const searchUrl = `https://www.google.com/search?q=${query}`;
    window.open(searchUrl, '_blank');
}