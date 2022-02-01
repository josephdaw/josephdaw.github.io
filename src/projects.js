// importing images
import instantCrypto from './img/instant-crypto.png';
import workdayPlanner from './img/workday-planner.png';
import goSomewhere from './img/lets-go-somewhere.png';
import weather from './img/weather-search-results.png';
import rps from './img/rock-paper-scissors.png';
import cssSnippet from './img/css-snippet-cheatsheet.png'

export const projects = [
    {
        id: 1,
        title: 'InstantCrypto',
        description: 'A cryptocurrency search tool for the latest price and news data.',
        imgSrc: instantCrypto,
        githubUrl: `https://github.com/josephdaw/instant-crypto`,
        liveUrl: `https://josephdaw.github.io/instant-crypto/`,
    },
    {
        id: 2,
        title: 'Workday Planner',
        description: 'Plan your time wisely with this interactive workday planner.',
        imgSrc: workdayPlanner,
        githubUrl: 'https://github.com/josephdaw/workday-planner',
        liveUrl: 'https://josephdaw.github.io/workday-planner/',
    },
    {
        id: 3,
        title: `Let's Go Somewhere`,
        description: 'A site to find new places to visit and post about places you would like to go to.',
        imgSrc: goSomewhere,
        githubUrl: 'https://github.com/josephdaw/go-somewhere',
        liveUrl: 'https://party-parrots.herokuapp.com/',
    },
    {
        id: 4,
        title: 'Weather Dashboard',
        description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS utilising the OpenWeather One Call API.',
        imgSrc: weather,
        githubUrl: `https://github.com/josephdaw/weather-dashboard`,
        liveUrl: `https://josephdaw.github.io/weather-dashboard/`,
    },
    {
        id: 5,
        title: 'Rock Paper Scissors',
        description: 'A JavaScript version of the popular game Rock Paper Scissors (can you beat the computer?)',
        imgSrc: rps,
        githubUrl: 'https://github.com/josephdaw/rock-paper-scissors',
        liveUrl: 'https://josephdaw.github.io/rock-paper-scissors/',
    },
    {
        id: 6,
        title: `CSS Snippet Cheat Sheet`,
        description: 'A responsive webpage for some helpful CSS code snippets',
        imgSrc: cssSnippet,
        githubUrl: 'https://github.com/josephdaw/css-cheat-sheet',
        liveUrl: 'https://josephdaw.github.io/css-cheat-sheet/',
    },
];