import { getUser } from '../data/api.js';
import { loadProfile } from '../common/load-profile.js';
import { createLocationLink } from './create-location-link.js';
import locations from '../data/location-data.js';

loadProfile();

const user = getUser();

const nav = document.getElementById('locations');

completeLocationProcess(locations[0]);

if (user.visited.welcome) {
    completeLocationProcess(locations[1]);
    completeLocationProcess(locations[2]);
}

if (user.visited.bigEds && user.visited.hospital) {
    completeLocationProcess(locations[3]);
}

completeLocationProcess(locations[3]);
console.log(user);

function completeLocationProcess(locationArrayIndex) {
    nav.appendChild(createLocationLink(locationArrayIndex));
}