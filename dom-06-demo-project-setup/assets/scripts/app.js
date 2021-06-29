const addMovieModal = document.getElementById('add-modal');
const addMovieButtonSelector = document.querySelector('header button');
const backScrubber = document.getElementById('backdrop');
const cancelModalPopupButton = addMovieModal.querySelector('.btn--passive');
const addMoviePopupButton = addMovieModal.querySelector('.btn--success');
const inputElements = addMovieModal.querySelectorAll('input');
const entryTextElement = document.getElementById('entry-text');
const movieListElement = document.getElementById('movie-list');
const deleteModalElement = document.getElementById('delete-modal');
const cancelDeleteButton = deleteModalElement.querySelector('.btn--passive');



const movies = [];
addMovieButtonSelector.addEventListener('click', toggleMovieModalHandler);

function toggleMovieModalHandler(){
    addMovieModal.classList.add('visible');
    backScrubber.classList.add('visible')
    clearInputs();
}

function closeTheModal(){
    backScrubber.classList.remove('visible');
    addMovieModal.classList.remove('visible');
    deleteModalElement.classList.remove('visible');
}

backScrubber.addEventListener('click', closeTheModal);
cancelModalPopupButton.addEventListener('click', closeTheModal);

addMoviePopupButton.addEventListener('click', addMovieHandler);

function addMovieHandler(){
    const title = inputElements[0].value;
    const imageUrl = inputElements[1].value;
    const rating = inputElements[2].value;

    if(title.trim() === '' || rating.trim() === '' ||
    imageUrl.trim() === '' || rating < 0 || rating >5)
    {
        alert('Please enter valid data');
        return;
    }

    const userInputMovie = {
        id: Math.random().toString(),
        title: title,
        rating: rating,
        imageUrl: imageUrl
    }
    movies.push(userInputMovie);
    console.log(userInputMovie);
    closeTheModal();
    updateMoviesList(userInputMovie);
    updateUI();
    clearInputs();
}

function clearInputs(){
    for (const input of inputElements) {
        input.value = '';
    }
}

function updateMoviesList(movieObj){
    const movieListItem = document.createElement('li');
    movieListItem.className = 'movie-element';
    movieListItem.innerHTML = `
    <div class="movie-element__image">
        <img src="${movieObj.imageUrl}" alt="${movieObj.title}">
    </div>
    <div class="movie-element__info">
        <h2>${movieObj.title}</h2>
        <p>${movieObj.rating}/5</p>
    </div>`

    movieListItem.addEventListener('click', deleteEventHandler.bind(null, movieObj.id));
    movieListElement.append(movieListItem);
}

function deleteEventHandler(id){
    deleteModalElement.classList.add('visible');
    backScrubber.classList.add('visible');
    let confirmDeletePopupButton = deleteModalElement.querySelector('.btn--danger');
    confirmDeletePopupButton.replaceWith(confirmDeletePopupButton.cloneNode(true));
    confirmDeletePopupButton = deleteModalElement.querySelector('.btn--danger');

    cancelDeleteButton.removeEventListener('click', closeTheModal);
    cancelDeleteButton.addEventListener('click', closeTheModal);
    confirmDeletePopupButton.addEventListener('click', removeMovieFromList.bind(null, id));
}

function removeMovieFromList(id){
    let index = 0;
    for (const movie of movies) {
        if(movie.id === id){
            break
        }
        index += 1;
    }
    movies.splice(index);
    movieListElement.children[index].remove();
    closeTheModal();
    updateUI();
}

function updateUI(){
    if(movies.length == 0){
        entryTextElement.style.display = 'block';
    }
    else{
        entryTextElement.style.display = 'none';
    }
}