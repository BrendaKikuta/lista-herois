import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterByName'
})

export class FilterByName implements PipeTransform {

    transform(heroes: any, descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLocaleLowerCase();

        if (descriptionQuery) {
            return heroes.filter((hero: any) => {
                return hero.name.toLocaleLowerCase().includes(descriptionQuery);
            })
        }
        
        return heroes;
    }

}