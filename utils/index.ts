
export async function fetchCars() {
    const headers = {

        'x-rapidapi-key': '8eba1067bemshfa08d6a512709c4p1dccf4jsn13acf744aa57',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;

}