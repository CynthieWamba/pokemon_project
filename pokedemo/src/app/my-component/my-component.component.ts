import {Component,input, OnInit} from '@angular/core';
import {PokeDetail, Pokemon} from "../pokemon";
import {PokeAPIServiceService} from "../poke-apiservice.service";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers:[PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokedId: string = '';
  searchPokedName: string ='';
  pokes : Pokemon[] = [];
  pokeDetail!: PokeDetail;
  myDate!: Date;
  checked: boolean = true;
  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {

  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data: { results: any[]; }) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon((index+1).toString(), e.name, e.url));
      });
    });
  }

  go(){
    if (this.selectedPokedId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokedId).subscribe(data => this.pokeDetail = data);
        this.pokeShareInfoService.setValue(this.selectedPokedId);
     };
    };


}
