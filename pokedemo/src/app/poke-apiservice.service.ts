import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokeDetail, PokeServiceRes} from "./pokemon";
import {Observable} from "rxjs";

const url ='https://pokeapi.co/api/v2/pokemon/';
@Injectable({
  providedIn: 'root'
})

export class PokeAPIServiceService {
  constructor(private http: HttpClient) {

  }

  // @ts-ignore
  getPokemons(): Observable<PokeServiceRes> {
   return this.http.get<PokeServiceRes>(url)  }

  getPokemonInfo(id:string): Observable<PokeDetail> {
    return this.http.get<PokeDetail>(url + id + '/')  }
}
