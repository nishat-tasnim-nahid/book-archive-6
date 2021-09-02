// search button
const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchOutput(data.docs))
}
// search output
const searchOutput = docs => {
    const displayOutput = document.getElementById('display-output');
    displayOutput.textContent = '';
    docs.forEach(doc => {
        // create display div
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
       <div class="card">
       <img class="w-50 h-25" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="w-100" alt"">
           <div class="card-body">
              <h3 class="card-title">Name: ${doc.title}</h3>
              <h5><b>Writer:</b> ${doc.author_name[0]}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><b>Publisher:</b> ${doc.author_name[0]}</li>
              <li class="list-group-item"><b>First published:</b> ${doc.first_publish_year}</li>
            </ul>
            <div class="card-body">
              <button onclick="displayDetails('${doc.subject[0]}')">More Details</button>
            </div>
          </div>
       `;
        displayOutput.appendChild(div)
    })
}
// details
const bookDetail = document.getElementById('book-detail');
bookDetail.textContent = '';
function displayDetails(subject) {
    bookDetail.innerHTML = `
    <div class='col-md-12'>
    <h3 class="text-center"><b>Subject:</b> ${subject}</h3>
    </div>
    `;
};

