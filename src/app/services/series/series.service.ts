import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Series} from "../../models/series.model";
import {Comment} from "../../models/comment.model";
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
    series:BehaviorSubject<Array<Series>> ;

    constructor() {
        this.series = new BehaviorSubject<Array<Series>>([]);
        this.initSeries();
    }

  private initSeries():void{
      const commentsGate:Array<Comment> = [];
      commentsGate.push(new Comment('Admin','à regarder absolument'));
      const series:Array<Series> = [];
      series.push(new Series('Gate',new Date('2005-07-04'),1,"Après qu'un portail vers un monde inconnu apparaît à Ginza, on envoie un réserviste de la Force d'autodéfense japonaise enquêter sur les contrées... de l'autre côté.",'Une bonne série qu\'elle est bien',"https://media.senscritique.com/media/000010132369/source_big/Gate.jpg",commentsGate))
      const commentsPokemon:Array<Comment> = [];
      commentsPokemon.push(new Comment('Admin','un must watch'));
      series.push(new Series('Pokemon',new Date("1997-04-01"),24,'Découvrez l\'univers de Pokémon à travers Sacha Ketchum, un jeune garçon de 10 ans cherchant à devenir Maître Pokémon, et son ami Pikachu.',"un classique","https://www.pokepedia.fr/images/thumb/f/f6/Saison_1.png/450px-Saison_1.png",commentsPokemon));
      const commentsTheCrown:Array<Comment> = [];
      commentsTheCrown.push(new Comment('Admin','une bonne fable politique et historique qui se laisse regarder'));
      series.push(new Series('The Crown',new Date("2016-11-04"),4,'Cette série dramatique retrace les rivalités politiques, intrigues et événements qui ont marqué le règne de la reine Élisabeth II et la seconde moitié du XXe siècle.',"une bonne série à regarder en famille","https://eijwvqaycbm.exactdn.com/wp-content/uploads/2017/01/The-Crown-saison-1-poster-1200x1777.jpg",commentsTheCrown));
      this.series.next(series);
  }

    getSeriesItemByID(id: number):Promise<Series> {
        // Solution with the cache

        return new Promise<Series>(
            (res, rej) => {

                const series = this.series.getValue();
                console.log(series);
                for (const item of series) {
                    if (item.id === id) {
                        res(item);
                        break;
                    }
                }
            }
        );
    }

    addComment(id: number, comment: Comment):Promise<void> {
        return new Promise<void>(
            (res, rej) => {

                const series = this.series.getValue();
                console.log(series);
                console.log(id);
                for (const item of series) {
                    if (item.id === id) {
                        item.comments.push(comment);
                        res();
                        break;
                    }
                }
            }
        );
    }

    save(item: Series) {
        return new Promise<void>((res) => {
            const series = this.series.getValue();
            series.push(item);
            this.series.next(series);
            res();
        })

    }

    delete(id: number):Promise<void> {
       return  new Promise<void>((res) => {
            const series = this.series.getValue();
            for (const[index, item] of series.entries()) {
                if(item.id === id){
                    series.splice(index,1);
                    this.series.next(series);
                    res();
                    break;
                }
            }})
    }
    update(itemEdited: Series):Promise<void> {
        return new Promise<void>(res=>{
            const series = this.series.getValue();

            for (const [index, item] of series.entries()) {
                if (item.id === itemEdited.id) {
                    series[index] = itemEdited;
                    this.series.next(series);
                    res();
                    break;
                }
            }
        })

    }
}
