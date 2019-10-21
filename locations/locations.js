import { loadProfile } from '../common/load-profile.js';
import { findById } from '../common/find-by-id.js';
import locations from '../data/location-data.js';
import checkLocations from '../locations/check-visited.js';
import { getUser, saveUser } from '../data/api.js';

loadProfile();
const user = getUser();
if (user.agent === 'cole') {
    const all = document.getElementById('all');
    all.style.textTransform = 'uppercase';
}

const searchParams = new URLSearchParams(window.location.search);
const locationId = searchParams.get('id');
const location = findById(locations, locationId);
const continueButton = document.getElementById('continue');

if (!location) { window.location = '../map';}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');

title.textContent = location.title;
image.src = '../assets/locations/' + location.image;
description.textContent = location.description;

continueButton.addEventListener('click', function(event) {
    event.preventDefault();

    checkLocations(location.id, user);
    saveUser(user);
    loadProfile();

    window.location = '.';
});