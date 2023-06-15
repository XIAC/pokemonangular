import {OnInit, Component} from '@angular/core';
import { Persona } from 'src/app/modelos/persona.model';
import { PokemonResult } from 'src/app/modelos/pokemon.model';
import { PokemonServicioService } from 'src/app/servicios/pokemon-servicio.service';
import { Pokemon } from '../../modelos/pokemon.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  txtNombre : string;
  listaNombres : string[];
  persona : Persona;
  listaPersonas : Persona[];
  pokemon : any;
  nombrePokemon: string ='';
  pokemones : PokemonResult;
  listaPokemones : Pokemon[] = [];
  constructor(private httpService : PokemonServicioService) {
    this.txtNombre = '';
    this.listaNombres = [];
    this.persona = new Persona();
    this.listaPersonas = [];
    this.pokemones = new PokemonResult;

  }
  ngOnInit(): void {
    this.cargarPokemonDitto();
    this.cargarPokemones();
  }
  cargarPokemones(){
    this.httpService.getPokemones().subscribe(
      result => {
                // this.pokemones = result;
                this.listaPokemones = result.results;
                console.log(this.pokemones);}
    )
  }
  cargarPokemonDitto(){
    var test = this.httpService.getPokemon().subscribe
    (
      result => {
                  this.pokemon = result;
                  console.log(result);
                  console.log(this.pokemon);
                }
    );
    console.log("::verificar", test);
  }
  agregar(){
    // this.listaNombres.push(this.txtNombre);
    // this.txtNombre = '';
    console.log("::persona", this.persona);
    this.listaPersonas.push(this.persona);
    console.log("::listaPersonas", this.listaPersonas);
    this.persona = new Persona;

  }

}
