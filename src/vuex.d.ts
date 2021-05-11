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
    caution?: string;
    complexion?: null
    coordinates?: []
    dates_of_birth_used?: string[];
    description?: string;
    details?: string;
    eyes?: string;
    eyes_raw?: string;
    field_offices?: string[];
    files?: { name: string, url: string }
    hair?: string;
    hair_raw?: string;
    height_max?: number;
    height_min?: number;
    images?: { caption?: string; large?: string; original?: string; thumb?: string; }[];
    languages?: null
    legat_names?: null
    locations?: null
    modified?: string;
    nationality?: string;
    ncic?: string;
    occupations?: null
    path?: string;
    person_classification?: string;
    place_of_birth?: string;
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
    warning_message?: string;
    weight?: string;
    weight_max?: number;
    weight_min?: number;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
