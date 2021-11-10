import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';

constructor(private pokemonService : PokemonService){

}

getPokemon(){
  this.pokemonService.getPokemon().subscribe(response=> {
    console.log(response);
    
  })
}

}
