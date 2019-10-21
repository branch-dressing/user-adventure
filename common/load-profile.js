import { getUser } from '../data/api.js';

export function loadProfile() {
    const name = document.getElementById('name');
    const agent = document.getElementById('agent');

    const user = getUser();

    if (!user) {
        window.loaction = './';
    }

    name.textContent = 'Special Agent ' + user.name;
    agent.src = '../assets/' + user.agent + '.png';
    
}