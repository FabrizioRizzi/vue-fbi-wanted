import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  export interface State {
    items: Item[],
    item: Item
  }

  export interface Item {
    additional_information?: string;
    age_max?: number;
    age_min?: number;
    age_range?: string;
    aliases?: string[];
    build?: null
    caution?: null
    complexion?: null
    coordinates?: []
    dates_of_birth_used?: null
    description?: string;
    details?: string;
    eyes?: null
    eyes_raw?: null
    field_offices?: null
    files?: { name: string, url: string }
    hair?: null
    hair_raw?: null
    height_max?: number;
    height_min?: number;
    images?: { caption?: string; large?: string; original?: string; thumb?: string; }[];
    languages?: null
    legat_names?: null
    locations?: null
    modified?: string;
    nationality?: null
    ncic?: null
    occupations?: null
    path?: string;
    person_classification?: string;
    place_of_birth?: null
    possible_countries?: null
    possible_states?: null
    publication?: string;
    race?: string;
    race_raw?: string;
    remarks?: string;
    reward_max?: number;
    reward_min?: number;
    reward_text?: string;
    scars_and_marks?: string;
    sex?: string;
    status?: string;
    subjects?: string[];
    suspects?: null
    title?: string;
    uid?: string;
    url?: string;
    warning_message?: null
    weight?: null
    weight_max?: null
    weight_min?: null
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
