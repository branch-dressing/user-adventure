const doubleRDiner = {
    id: 'doubleRDiner',
    title: 'The RR Diner',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'doubleRDiner.jpg',
    audio: '..',
    action: 'monster-scream.wav',
    description: `You enter the RR Diner...`,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const greatNorthernHotel = {
    id: 'greatNorthernHotel',
    title: 'Giving a Store Tour!',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'doubleRDiner.jpg',
    audio: '..',
    action: 'monster-scream.wav',
    description: `You enter the RR Diner...`,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};
