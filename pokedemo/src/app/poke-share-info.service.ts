import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();

  //creation d'un observale qui va observer le sujet
  getObservable(): Subject<string>{
    return this.stringVar;
  }
  constructor() { }

  value: string ='';
  getValue(): string{
    return this.value;
  }

  //mettre a jour le sujet en creant une methode pour l'autoriser la MAJ
  public setValue(newStringVar: string){
    this.stringVar.next(newStringVar);
  }
}
