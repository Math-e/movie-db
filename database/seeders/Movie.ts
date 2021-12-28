import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Movie from 'App/Models/Movie'

export default class MovieSeeder extends BaseSeeder {

  public static developmentOnly = true

  public async run() {
    await Movie.createMany([
      // new Date('MM/DD/YYYY')
      {
        title: "Titanic",
        release: new Date('01/16/1998'),
        description: "Jack Dawson (Leonardo DiCaprio) é um jovem aventureiro que, na mesa de jogo, ganha uma passagem para a primeira viagem do transatlântico Titanic."
      },
      {
        title: "King Kong",
        release: new Date('12/16/2005'),
        description: "Ann Darrow (Naomi Watts), uma atriz de vaudeville, enfrenta dificuldades para se sustentar, como vários outros americanos durante a Grande Depressão. Ela caminha pelas ruas de Manhattan pensando na possibilidade de trabalhar em um cabaré, até que a fome a faz roubar uma maçã. Ann é salva pelo cineasta Carl Denham (Jack Black), que oferece a ela o papel principal em sua próxima produção."
      },
      {
        title: "Star Wars: Episódio IV - Uma Nova Esperança",
        release: new Date('01/30/1978'),
        description: "O jovem Luke Skywalker (Mark Hamill) sonha ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa (Carrie Fisher) para o Jedi Obi-Wan Kenobi (Alec Guinness) sobre os planos da construção da Estrela da Morte."
      }
    ])
  }
}
