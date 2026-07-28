import type { DictionaryEntry } from '../types';
export const normalize = (value:string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();
export type Filters={query?:string;category?:string;difficulty?:string;type?:string};
export function filterEntries(items:DictionaryEntry[], filters:Filters){const q=normalize(filters.query??''); return items.filter((e)=>{const hay=normalize([e.title,e.category,e.shortDefinition,e.type,...e.keywords,...e.relatedTerms].join(' ')); return (!q||hay.includes(q))&&(!filters.category||e.category===filters.category)&&(!filters.difficulty||e.difficulty===filters.difficulty)&&(!filters.type||e.type===filters.type)}).sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));}
