export interface PokeServiceRes {
  count: number;
  next: string;
  previous: null;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}

export interface PokeDetail {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               HeldItem[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  past_abilities:           any[];
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface GameIndex {
  game_index: number;
  version:    Species;
}

export interface HeldItem {
  item:            Species;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity:  number;
  version: Species;
}

export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  animated?:          Sprites;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export class Pokemon {

  constructor(public id:String, public name:String, public url: string) {
  }
}
