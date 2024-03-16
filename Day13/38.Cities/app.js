function describe_city(city, country) {
    if (country === void 0) { country = 'USA'; }
    return "".concat(city, " is in ").concat(country);
}
console.log(describe_city('Karachi', 'Pakistan'));
console.log(describe_city('Madrid', 'Spain'));
console.log(describe_city('New York'));
