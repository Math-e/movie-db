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
  
  public async search ({params, response}) {
    const movies = await Movie.query()
      .where('title', 'like', "%" + params.content + "%")
      .orderBy('release', 'desc')
    
    return response.send(movies)
  }

}
