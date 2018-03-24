const travel_diary = [
    {
        location:"Japan",
        path:"imgs/japan.jpg",
        description:"Japan is a stratovolcanic archipelago consisting of about 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu, and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands."
    },
    {
        location:"China",
        path:"imgs/china.jpg",
        description:"Brief Introduction to China. Location The People Republic of China is situated in eastern Asia on the western shore of the Pacific Ocean, with an area of 9.6 million square kilometers. ... Among the rivers totaling 220,000 kilometers in length in China, the Changjiang (Yangtze) and the Huanghe (Yellow) are world known."
    }, 
    {
        location:"America",
        path:"imgs/america.jpg",
        description:"The United States of America (USA), commonly known as the United States (U.S.) or America, is a federal republic composed of 50 states, a federal district, five major self-governing territories, and various possessions."
    },   
    {
        location:"Korea",
        path:"imgs/korea.jpg",
        description:"South Korea occupies the southern portion of the Korean Peninsula, which extends some 1,100 km (680 mi) from the Asian mainland. This mountainous peninsula is flanked by the Yellow Sea to the west, and the Sea of Japan to the east."
    }, 
    {
        location:"Thailand",
        path:"imgs/thailand.jpg",
        description:"Thailand is in the heart of Southeast Asia. Cambodia and Laos border the country to the east and northeast, and Myanmar lies to the northwest. To the west is the Andaman Sea and the Gulf of Thailand, southeast of Burma. The long southern region, connecting with Malaysia, is hilly and forested."
    }, 
    {
        location:"Vietnam",
        path:"imgs/vietnam.jpg",
        description:'It was a direct result of the First Indochina War (1946–1954) between France, which claimed Vietnam as a colony, and the communist forces then known as Viet Minh. In 1973 a “third” Vietnam war began—a continuation, actually—between North and South Vietnam but without significant U.S. involvement.'
    }
];

const writeToDom = (string,id) => {
    document.getElementById(id).innerHTML += string;
}

const createCards = (travel_diary) => {
    let cards = '';
    for(let i = 0; i < travel_diary.length; i++){
        cards += `<div class="card">`;
        cards +=    `<h2>${travel_diary[i].location}</h2>`;
        cards +=    `<img src="${travel_diary[i].path}" alt="${travel_diary[i].location}" class="location-img">`;
        cards +=    `<div class="description">`;
        cards +=        `<p>${travel_diary[i].description}</p>`;
        cards +=    `</div>`;
        cards +=    `<textarea cols="30" rows="7"></textarea>`;
        cards +=    `<button class="submit-btn">Submit</button>`;
        cards += `</div>`;
    }
    cards += `<div id='output-wrapper'></div>`;
    writeToDom(cards,'card-holder');
}

createCards(travel_diary);

const getTimeStamp = () => {
    let today = new Date();
    let ss = today.getSeconds();
    let min = today.getMinutes();
    let HH = today.getHours();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(mm<10){
        mm = `0${mm}`;
    };

    if(ss<10){
        ss = `0${ss}`;
    }
    today = `${mm}/${dd}/${yyyy} ${HH}:${min}:${ss}`;
    return today;
};

const getUserInput = target => target.parentNode.childNodes[3].value; 
const getCardLocation = target => target.parentNode.childNodes[0].innerHTML;

const allSubmitBtns = document.getElementsByClassName('submit-btn');
for(let i = 0; i < allSubmitBtns.length; i++){
    allSubmitBtns[i].addEventListener('click',(e)=>{
        let userInput = getUserInput(e.target);
        let cardLocation = getCardLocation(e.target);
        let outputString = '';
        outputString += `<div class='output'>`;
        outputString +=     `<h2 class='card-location'>${cardLocation}</h2>`;
        outputString +=     `<h2 class='card-time'>${getTimeStamp()}</h2>`;
        outputString +=     `<p class='card-p'>${userInput}</p>`;
        outputString +=     `<div class='output-btn-wrapper'>`;
        outputString +=         `<button class='edit-btn'>Edit</button>`;
        outputString +=         `<button class='delete-btn'>Delete</button>`;
        outputString +=     `</div>`;
        outputString += `</div>`;
        writeToDom(outputString,'output-wrapper');
    });
}






