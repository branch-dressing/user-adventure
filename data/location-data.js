const welcome = {
    id: 'welcome',
    title: 'Welcome',
    map: {
        top: '95%',
        left: '49%',
    },
    image: 'welcome.jpg',
    audio: '',
    action: '',
    description: `It's 11:30 am, February 24th. You are entering the twon of Twin Peaks. It's 5 miles South of the Canadian Border, 12 miles West of the state line. You've never seen so many tress in your life! 54 degrees on a slightly overcast day. Milage is 790,345, gotta tank up when you get into town. Lunch was $6.31 at Lamplighter Inn. Tuna fish sandwhich on whole wheat, slice of cherry pie and a cup of coffee. Damn good food.
    You'll be meeting up with Sheriff Harry S. Truman, at Calhoun Memorial hospital.`,
    choices: [{
    }]
};

const hospital = {
    id: 'hospital',
    title: 'Calhoun Memorial Hospital',
    map: {
        top: '48%',
        left: '57%',
    },
    image: 'hospital.jpg',
    prerequisite: 'welcome',
    description: `At the hospital you meet with the Sheriff, Harry Truman. You take a look at Ronnette Pulaski. She is non-responsive. You decide to take a look at Laura Palmer as well. Heading to the morgue, you run into Dr. Lawrence Jacoby. He asks you not to mention to Laura's parents that Laura was seeing him for therapy. He asks to go with you to examine Laura's body. As it is highly unusual, you decline his request.`,
    choices: [{
    }]
};

const bigEds = {
    id: 'bigEds',
    title: 'Big Ed\'s Gas Farm',
    map: {
        top: '45.5%',
        left: '32%',
    },
    image: 'bigeds.jpg',
    prerequisite: 'welcome',
    description: `You're here to fill up and talk to Ed. More to come.`,
    choices: [{
    }]
};

const sheriffsDept = {
    id: 'sheriffsDept',
    title: 'Sheriff\'s Department',
    map: {
        top: '63%',
        left: '68%',
    },
    image: 'sheriffs-dept.jpg',
    prerequisite: 'welcome',
    description: `More clues or something!.`,
    choices: [{
    }]
};

const locations = [welcome, hospital, bigEds, sheriffsDept];

export default locations;
