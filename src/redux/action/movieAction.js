function getMovies(){
    return (dispatch) =>{
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1'
        let res = await fetch(url)
        let data = await res.json()
    }
}

//'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1'
//"https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1" 