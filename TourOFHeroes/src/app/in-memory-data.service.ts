import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero} from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const heroes = [
        {id: 11, name:'Wolverine'},
        {id: 12, name:'Cyclops'},
        {id: 13, name:'Gambit'},
        {id: 14, name:'Storm'},
        {id: 15, name:'Beast'},
        {id: 16, name:'Colossus'},
        {id: 17, name:'Magneto'},
        {id: 18, name:'Sabertooth'},
        {id: 19, name:'Juggernaut'},
        {id: 20, name:'Mystique'}   
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
