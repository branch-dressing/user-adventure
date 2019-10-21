import { getUser } from '../data/api.js';
import { loadProfile } from '../common/load-profile.js';
import { createLocationLink } from './create-location-link.js';
import locations from '../data/location-data.js';

loadProfile();

const user = getUser();

if (user.agent === 'cole') {
    const all = document.getElementById('all');
    all.style.textTransform = 'uppercase';
}

const nav = document.getElementById('locations');

completeLocationProcess(locations[0]);

if (user.visited.welcome) {
    completeLocationProcess(locations[1]);
    completeLocationProcess(locations[2]);
}

if (user.visited.hospital) {
    completeLocationProcess(locations[3]);
}

if (user.visited.sheriffsDept) {
    completeLocationProcess(locations[4]);
    completeLocationProcess(locations[5]);
    completeLocationProcess(locations[6]);
}

if (user.visited.bigEds) {
    completeLocationProcess(locations[9]);
}

if (user.visited.easterPark && user.visited.sheriffsDept) {
    completeLocationProcess(locations[7]);
}

if (user.visited.hayward) {
    completeLocationProcess(locations[8]);
}

if (user.visited.cemetery) {
    completeLocationProcess(locations[10]);
    completeLocationProcess(locations[11]);
}

function completeLocationProcess(locationArrayIndex) {
    nav.appendChild(createLocationLink(locationArrayIndex));
}