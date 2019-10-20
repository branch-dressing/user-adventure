import { loadProfile } from '../common/load-profile.js';
import { findById } from '../common/find-by-id.js';
import locations from '../data/location-data.js';


loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const locationId = searchParams.get('id');
const location = findById(locations, locationId);

if (!location) {
    window.location = '../map';

    const title = document.getElementById('title');
    const image = document.getElementById('image');
    const description = document.getElementById('description');

    title.textContent = location.title;
    image.src = '../assets/locations/' + location.image:
    description.textContent = quest.description;
}