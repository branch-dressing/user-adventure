import { getUser } from '../data/api.js';
import { loadProfile } from '../common/load-profile.js';
import { createLocationLink } from './create-location-link.js';
import locations from '../data/location-data.js';

loadProfile();

const user = getUser();

//need something for completed all quests

const nav = document.getElementById('locations');

let locationDisplay = createLocationLink(locations[0]);
nav.appendChild(locationDisplay);


console.log(nav)
console.log(locationDisplay.title);

