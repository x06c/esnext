let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
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
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

/**
 * destructuration
 */
console.log("##### DESTRUCTURATION #####")
const { city } = weather.city;
const { temperature } = weather.temperature;
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
    constructor(id, name, imageUrl, price) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this._price = price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get price() {
        return this._price;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]";
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }


}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

console.log("--- toString() ---");
console.log(parisTrip.toString());

console.log("--- ajout price ---")
parisTrip.price = 100;
console.log(parisTrip.toString());

console.log("--- default ---")
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

console.log("##### inheritance #####");

class FreeTrip extends Trip {
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


console.log("#############################\n##### Promise, Set, Map #####\n#############################");

class TripService {
    constructor() {
        // TODO Set of 3 trips
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let resultTrip = null;
                this.trips.forEach(e => {
                    if (e.name == tripName) {
                        resultTrip = e;
                    }
                });
                if (resultTrip === null) {
                    reject("No trip found with name: " + tripName)  //error
                } else {
                    resolve(resultTrip); //success
                }
            }, 2000)
        });
    }
}
class PriceService {
    constructor() {
        // TODO Map of 2 trips
        this.mapPriceTrip = new Map();
        this.mapPriceTrip.set('paris', new Trip('paris', 'Paris', 'img/paris.jpg', 100));
        this.mapPriceTrip.set('rio-de-janeiro', new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg', 800));
        this.mapPriceTrip.set('nantes', new Trip('nantes', 'Nantes', 'img/nantes.jpg'));

        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                let resultPrice = null;
                this.mapPriceTrip.forEach(p => {
                    if (p.id == tripId) {
                        resultPrice = p.price;
                    }
                });
                if (resultPrice === null || resultPrice === undefined) {
                    reject("ERROR ID TRIP aucun prix pour l'id: " + tripId);
                } else {
                    resolve("Prix id: " + tripId + ": " + resultPrice);
                }
            }, 2000)
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("Paris")
    .then(function (tripName) {
        console.log(tripName);
    }, function (error) {
        console.log(error);
    });

tripService.findByName("Toulouse")
    .then(function (tripName) {
        console.log(tripName);
    }, function (error) {
        console.log(error);
    });

priceService.findPriceByTripId("rio-de-janeiro")
    .then(function (tripPrice) {
        console.log(tripPrice);
    }, function (error) {
        console.log(error);
    });

priceService.findPriceByTripId("nantes")
    .then(function (tripPrice) {
        console.log(tripPrice);
    }, function (error) {
        console.log(error);
    });

