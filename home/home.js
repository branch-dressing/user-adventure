import { saveUser } from '../data/api.js';
import { makeUser } from './make-user.js';

const userSignIn = document.getElementById('user-sign-in');

userSignIn.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignIn);
    const user = makeUser(formData);

    saveUser(user);
    
    window.location = 'map';
});