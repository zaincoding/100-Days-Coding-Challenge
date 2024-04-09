var countryCapital = new Map();
countryCapital.set('Pakistan', 'Islamabad');
countryCapital.set('USA', 'Washington,D.C');
countryCapital.set('Canada', 'Ottawa');
function countryCaps(country) {
    if (countryCapital.has(country)) {
        return countryCapital.get(country);
    }
    return undefined;
}
console.log(countryCaps('Pakistan'));
