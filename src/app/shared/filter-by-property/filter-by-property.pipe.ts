import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, P extends keyof T>(
        dataArray: T[] | undefined | null,
        propertyName: P,
        searchPropertyValue: T[P],
    ): T[] | undefined | null {
        if (!dataArray?.length) {
            return dataArray;
        }

        if (typeof searchPropertyValue === 'string') {
            const result = dataArray.filter(item => {
                return (item[propertyName] as string)
                    .toLowerCase()
                    .includes(searchPropertyValue.toLowerCase());
            });

            return result;
        }

        const result = dataArray.filter(item => {
            return item[propertyName] === searchPropertyValue;
        });

        return result;
    }
}
