import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie'

export default class MoviesController {

  public async index({view}: HttpContextContract) {
    const movies = await Movie.all()
    return await view.render('movie-index', {movies: movies})
  }

  public async show ({params, view}: HttpContextContract) {
    const movie = await Movie.findOrFail(params.id)
    
    let formattedDate = new Date(movie.release)
    formattedDate.toDateString()
    
    return await view.render('movie-show', {movie: movie, formattedDate: formattedDate})
  }
  
  public async search ({request, view}: HttpContextContract) {
    let movies = await Movie.query()
      .where('title', 'like', '%' + request.qs().q + '%')
      .orderBy('release', 'desc')
    
    let empty
    if (movies.length == 0) empty = true
    
    return await view.render('movie-index', {movies: movies, empty: empty})
  }

}
