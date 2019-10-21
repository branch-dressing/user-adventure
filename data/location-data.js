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
};

const hospital = {
    id: 'hospital',
    title: 'Calhoun Memorial Hospital',
    map: {
        top: '48%',
        left: '57%',
    },
    image: 'hospital.jpg',
    description: `At the hospital you meet with the Sheriff, Harry Truman. You take a look at Ronnette Pulaski. She is non-responsive. You decide to take a look at Laura Palmer as well. Heading to the morgue, you run into Dr. Lawrence Jacoby. He asks you not to mention to Laura's parents that Laura was seeing him for therapy. He asks to go with you to examine Laura's body. As it is highly unusual, you decline his request.`,
};

const bigEds = {
    id: 'bigEds',
    title: 'Big Ed\'s Gas Farm',
    map: {
        top: '45.5%',
        left: '32%',
    },
    image: 'bigeds.jpg',
    description: `You're here to fill up and talk to Ed. More to come.`,
};

const sheriffsDept = {
    id: 'sheriffsDept',
    title: 'Sheriff\'s Department',
    map: {
        top: '63%',
        left: '68%',
    },
    image: 'sheriffs-dept.jpg',
    description: `More clues or something!`,
};

const timberFallsMotel = {
    id: 'timberFallsMotel',
    title: 'Timber Falls Motel',
    map: {
        top: '78%',
        left: '59%',
    },
    image: 'timber-falls-motel.jpg',
    description: `Timber Falls Motel Description.`,
};

const mosMotor = {
    id: 'mosMotor',
    title: 'Mo\'s Motor',
    map: {
        top: '55%',
        left: '47%',
    },
    image: 'mosmotor.jpg',
    description: `There's a clue left at the intersection here.`,
};

const countryClub = {
    id: 'countryClub',
    title: 'Country Club',
    map: {
        top: '62%',
        left: '1%',
    },
    image: 'country-club.jpg',
    description: `Not Sure how this one fits in yet.`,
};

const hayward = {
    id: 'hayward',
    title: 'Hayward Residence',
    map: {
        top: '40%',
        left: '-1%',
    },
    image: 'hayward.jpg',
    description: `Available after hospital and Sheriffs office.`,
};

const cemetery = {
    id: 'cemetery',
    title: 'Cemetery',
    map: {
        top: '72%',
        left: '11%',
    },
    image: 'cemetery',
    description: 'Something something something something something something.'
};

const easterPark = {
    id: 'easterPark',
    title: 'Easter Park',
    map: {
        top: '14%',
        left: '35%',
    },
    image: 'easter-park.jpg',
    description: `something something something.`,
};

const owlCave = {
    id: 'owlCave',
    title: 'Owl Cave',
    map: {
        top: '13%',
        left: '84%',
    },
    image: 'easter-park.jpg',
    description: `The Owls are not what they seem. One of the last stops.`,
};

const campSite = {
    id: 'campSite',
    title: 'Camp Site',
    map: {
        top: '32%',
        left: '46%',
    },
    image: 'camp-site.jpg',
    description: `This is the very last one.`,
};

const locations = [
    welcome, 
    hospital, 
    bigEds, 
    sheriffsDept, 
    timberFallsMotel, 
    mosMotor, 
    countryClub, 
    hayward, 
    cemetery, 
    easterPark, 
    owlCave, 
    campSite];

export default locations;
