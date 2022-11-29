/* eslint-disable camelcase */
export type CharacterData = {
  name: string,
  url: string
}

export type CharacterAugmentedData = {
  name: string,
  url: string,
  itemId: number,
  photo: string
}

export type CharacterCombinedData = {
  item: CharacterAugmentedData,
  colour: string
}

export type MultiplePokemonResponse = {
  results: Array<CharacterData>,
  count: number,
  next?: null,
  previous?: null
}

export type SinglePokemonResponse = {
  abilities: Array<{
    ability: { name: string, url: string },
    // is_hidden: boolean,
    // slot: number
  }>,
  base_experience: number,
  // forms: Array<{}>,
  // game_indices: Array<{}>,
  height: number,
  // held_items: Array<{}>,
  // id: number,
  // is_default: boolean,
  // location_area_encounters: string,
  // moves: Array<{}>,
  // name: string,
  // order: number,
  // past_types: Array<{}>,
  // species: { name: string, url: string },
  // sprites: { back_default: string | null, back_shiny: string | null, back_shiny_female: string | null, front_default: string | null },
  // stats: Array<{}>,
  // types: Array<{}>,
  weight: number
}
