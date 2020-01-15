export async function fetchCities() {
    const result = await fetch('./cities.json').then((res) => res.json());
    return result.cities;
}
