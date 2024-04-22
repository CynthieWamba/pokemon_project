import {Component, Input, OnInit} from '@angular/core';
import {PokeDetail} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrl: './pokedetail.component.css',
  providers: [PokeShareInfoService]
})
export class PokedetailComponent implements OnInit{


  @Input()
  detail!: PokeDetail;
  constructor(private pokeShareInfoService: PokeShareInfoService) {
    function subscribe(param: (e: string) => void) {
      
    }

    subscribe((e: string) => console.log('e' +e));
  }
  ngOnInit() {
    console.log(this.pokeShareInfoService.getValue());
  }
}
