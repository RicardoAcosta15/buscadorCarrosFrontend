import { AutoProp, FilterProp } from "@/types";

export async function fetchCars(filters: FilterProp) {

    const { marca, year, modelo, combustible } = filters;

    const hearders = {
     'X-RapidAPI-Key': '3d106ed424msh932932f209a4435p14e352jsn267dfda95ad7',
	 'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?marca=${marca}&year=${year}&modelo=${modelo}&combustible=${combustible}`, {
        headers: hearders,
    });

    const result = await response.json();

    return result;
}

// //utilizar
export const generateCarImageUrl = (car: AutoProp, angulo?: string) => {
    //key
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { marca, year, modelo } = car;

    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make', marca);
    url.searchParams.append('modelFamily', modelo.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angulo}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}