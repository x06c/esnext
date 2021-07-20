let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris","nyc","rome","rio-de-janeiro"];
console.table(citiesId);

/**
 * citiesId = [];
 * impossible de redéfinir une const
*/
citiesId.push("tokyo");
console.log(citiesId);

let [...values] = citiesId;
console.log(values);

function getWeather(cityId = "ma_ville") {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
console.log(weather);

/**
 * destructuration
 */
console.log("##### DESTRUCTURATION #####")
const {city} = getWeather();
const {temperature} = getWeather();
console.log(city);
console.log(temperature);

/**
 * rest param
 */
console.log("##### REST PARAM #####")
const [parisId, nycId, ...othersCityId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCityId.length);

/**
 * class
 */

console.log("##### class #####")

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    set setPrice(newPrice) {
        this._price = newPrice;
    }

    get getPrice() {
        return this._price;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]";
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

console.log("--- toString() ---");
console.log(parisTrip.toString());

console.log("--- ajout price ---")
parisTrip.setPrice = 100;
console.log(parisTrip.toString());

console.log("--- default ---")
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

console.log("##### inheritance #####");

class FreeTrip extends Trip{
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
    
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());