import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  hero: Hero ={
    id:1,
    name:'Windstorm'
  }
  // heroes = HEROES;
  heroes: Hero[] = [];
  selectedHero?:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  items:string[] = [];
  addItem(newItem:string){
    this.items.push(newItem)
  }
  getHeroes():void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
    // this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes()
  }

}
