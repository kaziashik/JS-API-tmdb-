// get  api ingormation
const loadMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef")
        .then(res => res.json())
        .then(data => setMovies(data.results))
}

// call information on my wepsit
loadMovies()

//  to set api on my wepsit
const setMovies = (movies) => {

    const first10Movie = movies.slice(0, 10) //get 10 movie at 1 time

    const movieSpinner = document.getElementById("movie-spinner") 
    movieSpinner.style.display = "none" // if another movie detaile click will hid the prebis information of movie.

    const movieContainer = document.getElementById("movie-container") 
    for (const movie of first10Movie) {

        const movieBox = document.createElement("div")
        movieBox.classList.add("col-md-3")

        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path // get image of movie in dinamic way

        movieBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src='${imageUrl}'>
                <h3>${movie.title}</h3>
                <p>${movie.overview.slice(0, 200)}</p>
                <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
            </div>
        `

        movieContainer.appendChild(movieBox)
    }
}

// get link after click will show movie information 
const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
}

// for move details 
const setMovieDetails = (movie) => {
    const movieDetails = document.getElementById("movie-details")
    movieDetails.innerHTML = ""
    const movieBox = document.createElement("div")

    movieBox.innerHTML = `
        <h3>${movie.original_title}</h3>
    `

    movieDetails.appendChild(movieBox)

}