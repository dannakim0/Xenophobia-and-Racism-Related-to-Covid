const quotes = [
    "May God support you, Hajji! Throw him out!",
    "YOU ARE CORONA!",
    "Wipe the Chinese people out... hope this virus gets all of them",
    "FOREIGN TRASH",
    "We want to live longer. We want to safeguard local customers. Please excuse us.",
    "CHINESE VIRUS",
    "An azab from Allah",
    "That's why the God took revenge against them.",
    "#ChineseDontComeToJapan",
    "DIRTY, INSENSITIVE AND BIOTERRORIST",
    "CHINA! OUT!",
    "NO CHINESE ALLOWED",
    "Throw them in the desert",
    "The new virus is widely spread throughout the world because of their unhygienic lifestyle",
    "COCKROACHES AND RAPISTS",
    "It’s a retribution by Allah against the Chinese",
    "NO CHINESE ALLOWED",
    "We apologize we are NOT accepting CHINESE customers. Thank you.",
    "Hey Chink! Please go back to ur shit-eating country.",
    "NEVER SHOWER",
    "Wherever you see Myanmar people, shoot them down,",
    "When we say 'migrants' we mean Asians [not Arabs]",
    "YELLOW ALERT",
    "A NEW YELLOW PERIL",
    "Since you're up anyway, we'll have a sweet and sour chicken, a szechuan beef and two fried rice please. No bat.",
    "YOU HAVE CORONAVIRUS! YOU CANNOT ENTER!",
    "Chinese eat live mice.",
    "Voorkomen is beter dan Chinezen",
    "We can't have the virus in our country, it is all caused by these stinking Chinese people",
    "DIE, CHINESE",
    "Kankerchinees corona",
    "A dirty Chink. Take your fucking coronavirus back home!",
    "I don't want your coronavirus in my country",
    "STUPID CHINK",
    "CHINA VIRUS! BECAUSE OF YOU THE WORLD IS LIKE THIS! GO BACK TO YOUR COUNTRY!",
    "GET THE FUCK OUT",
    "GO BACK TO CHINA",
    "KUNG-FLU",
    "Engineered by Jews",
    "SANTIZE YOUR ASS!",
    "WUHAN PLAGUE",
    "Do you eat bats?",
    "Ni hao, ching chong",
    "Why are you Chinese people killing everyone?",
    "Trucha with the coronavirus",
    "You're a virus and get out of America. And that's an order.",
    "CHINA VIRUS HOURS",
    "You gave me coronavirus",
    "Someone took the time in the middle of the night to smash the windows in hard, very forcefully, five times.",
    "TAKE THE CORONA BACK YOU CHINK",
    "#Chinesevirus",
    "CHINA KIDS STAY HOME",
    "YOU’VE GOT THE VIRUS",
    "Bloody bird and animal shit eating",
    "Our Kiwi kids don't want to be in the same class with your disgusting virus spreaders.",
    "¿Qué hacés, coronavirus?",
    "Put the fucking mask on, you piece of shit."
];
const links = [
    "https://gulfnews.com/world/mena/driver-jailed-for-dumping-chinese-man-on-highway-over-virus-fears-in-egypt-1.1584007723426",
    "https://www.voanews.com/a/science-health_coronavirus-outbreak_coronavirus-brings-sinophobia-africa/6185249.html",
    "https://www.dw.com/en/coronavirus-fuels-anti-chinese-discrimination-in-africa/av-52428454",
    "https://www.theguardian.com/world/2020/mar/29/china-coronavirus-anti-foreigner-feeling-imported-cases",
    "https://abcnews.go.com/Travel/wireStory/fears-virus-trigger-anti-china-sentiment-worldwide-68702177",
    "https://www.newsweek.com/hong-kong-protesters-embrace-chinese-virus-snub-communist-party-censors-not-stir-racism-1501625",
    "https://cekfakta.tempo.co/fakta/577/fakta-atau-hoaks-benarkah-munculnya-virus-corona-terkait-dengan-perlakuan-cina-pada-muslim-uighur",
    "https://www.thehindu.com/news/national/other-states/chinese-government-condemns-bjp-bengal-presidents-comment-on-coronavirus/article31044588.ece",
    "https://www.forbes.com/sites/sarahkim/2020/01/30/coronavirus-racism-asian-communities/",
    "https://www.nytimes.com/2020/01/30/world/asia/coronavirus-chinese-racism.html",
    "https://www.straitstimes.com/world/fear-in-the-age-of-coronavirus-chinese-no-longer-welcome",
    "https://www.straitstimes.com/asia/east-asia/wuhan-virus-japanese-shops-no-chinese-allowed-sign-provokes-netizens-to-call-for",
    "https://www.egypttoday.com/Article/4/83281/Kuwaiti-actress-Hayat-al-Fahd-sparks-controversy-over-COVID-19",
    "https://www.nst.com.my/news/nation/2020/01/559942/some-malaysians-calling-ban-chinese-tourists",
    "https://www.newindianexpress.com/world/2021/may/11/singapore-will-fail-if-it-allows-racism-xenophobia-senior-minister-k-shanmugam-warns-2301255.html",
    "https://www.straitstimes.com/singapore/coronavirus-mha-investigating-religious-teacher-for-xenophobic-racist-posts",
    "https://www.marketwatch.com/story/no-chinese-allowed-racism-and-fear-are-now-spreading-along-with-the-coronavirus-2020-01-29",
    "https://www.asiatimes.com/2020/02/article/anti-china-racism-rears-its-ugly-head-in-thailand/",
    "https://www.asiatimes.com/2020/02/article/anti-china-racism-rears-its-ugly-head-in-thailand/",
    "https://web.archive.org/web/20200321044346/https://www.khaosodenglish.com/news/2020/03/13/health-minister-dirty-europeans-pose-virus-risks-to-thailand/",
    "https://web.archive.org/web/20210107183916/https://www.reuters.com/article/health-coronavirus-thailand-myanmar-idUSL8N2J32UG",
    "https://www.trtworld.com/video/social-videos/uae-media-personality-called-out-for-racism/5e971d9fa8e0460019336728",
    "https://www.usatoday.com/story/news/nation/2020/01/31/coronavirus-chinese-xenophobia-racism-misinformation/2860391001/",
    "https://www.voanews.com/science-health/coronavirus-outbreak/frances-ethnic-chinese-community-other-asians-complain",
    "https://www.irishpost.com/news/mayor-of-dublin-hazel-chu-hits-back-at-racist-harassment-on-social-media-197021",
    "https://www.open.online/2020/02/26/lincubo-di-essere-cinesi-in-italia-con-il-coronavirus-un-ragazzo-preso-a-bottigliate-in-veneto",
    "https://www.japantimes.co.jp/news/2020/03/01/world/italy-china-eat-live-mice/",
    "https://www.dutchnews.nl/news/2020/02/first-dutch-coronavirus-victim-was-in-italy-and-celebrated-carnaval-media/",
    "https://www.omroepbrabant.nl/nieuws/3179536/carnaval-was-waarschijnlijk-katalysator-van-verspreiding-coronavirus-in-brabant",
    "https://www.hartvannederland.nl/nieuws/2020/discriminerende-teksten-studentenflat/",
    "https://www.nhnieuws.nl/nieuws/263947/huis-in-diemen-beklad-met-racistische-leus-vanwege-coronavirus",
    "https://timesofindia.indiatimes.com/nri/other-news/indian-origin-woman-in-uk-beaten-for-trying-to-save-chinese-from-racist-attack-over-coronavirus/articleshow/74288736.cms",
    "https://www.straitstimes.com/singapore/singaporean-student-in-london-seeks-eyewitnesses-after-coronavirus-related-taunt-and",
    "https://nationalpost.com/news/canada/we-are-outraged-cyclist-spits-at-calgary-woman-calls-her-a-racial-slur-on-park-path",
    "https://www.vancouverisawesome.com/vancouver-news/richmondite-speaks-up-during-a-racist-encounter-in-richmond-3747161",
    "https://www.vancouverisawesome.com/vancouver-news/richmondite-speaks-up-during-a-racist-encounter-in-richmond-3747161",
    "https://aptnnews.ca/2020/04/14/inuit-getting-caught-up-in-anti-asian-hate-crimes-in-montreal-advocates-say/",
    "https://www.nytimes.com/2020/03/18/us/politics/china-virus.html",
    "http://www.homelandsecuritynewswire.com/dr20200327-fbi-foils-neo-nazi-plot-to-blow-up-missouri-hospital",
    "https://www.ibtimes.sg/viral-video-man-bullies-elderly-asian-woman-chases-her-florida-beach-sanitizer-41398",
    "https://web.archive.org/web/20210317110924/https://www.ajc.com/news/local/wuhan-plague-plaques-found-atlanta-businesses-streets/b9takSWmtKqfqai7wAk8iL/",
    "https://www.idsnews.com/article/2021/04/im-sure-ill-experience-this-again-asian-and-asian-american-iu-students-speak-experiences-of-racism",
    "https://www.cnn.com/videos/us/2020/10/30/amara-walker-racist-encounters-asian-americans-new-orleans-airport-vpx.cnn",
    "https://www.washingtonpost.com/business/2020/05/19/asian-american-discrimination/",
    "https://www.kob.com/coronavirus/vandals-tag-downtown-asian-restaurant-with-racist-message/5677160/",
    "https://www.ideastream.org/news/ohios-asian-americans-are-not-immune-to-coronavirus-fueled-racism",
    "https://ktvl.com/news/local/yelp-forced-to-turn-off-local-bar-reviews-after-china-virus-sign-causes-uproar",
    "https://6abc.com/philadelphia-chinatown-attack-asian-american-assault-philly-10th-street-racism/10493248/",
    "https://www.nbcnews.com/news/asian-america/smashed-windows-racist-graffiti-vandals-target-asian-americans-amid-coronavirus-n1180556",
    "https://www.nbcnews.com/news/asian-america/smashed-windows-racist-graffiti-vandals-target-asian-americans-amid-coronavirus-n1180556",
    "https://www.nbcnews.com/news/asian-america/smashed-windows-racist-graffiti-vandals-target-asian-americans-amid-coronavirus-n1180556",
    "https://abcnews.go.com/Travel/wireStory/fears-virus-trigger-anti-china-sentiment-worldwide-68702177",
    "https://www.abc.net.au/news/2020-03-20/coronavirus-hong-kong-student-assaulted-for-wearing-face-mask/12075470",
    "https://www.weareresonate.com/2020/10/bird-sht-eating-wuhan-chinese-restaurant-in-australia-receives-racist-letter-ton-lok-chinese-restaurant/",
    "https://www.stuff.co.nz/national/119225943/police-investigating-racist-coronavirus-email-say-xenophobia-will-not-be-tolerated",
    "https://www.clarin.com/sociedad/-haces-coronavirus-cargada-desencadeno-violenta-pelea-supermercadista-chino-repartidor_0_3rkwZr1N.html",
    "https://globalvoices.org/2021/03/26/is-bolsonaros-anti-china-rhetoric-fueling-anti-asian-hate-in-brazil/"
];
const fonts = [
    "Saira Extra Condensed",
    "arial"
]

/************************************ POP-UPS *****************************************/
//getting random integer function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//randomly print quote
function printRndText() {
    var div = document.createElement('a');

    //randomising position for x, y axis
    var x = getRndInteger(10, 100);
    var y = getRndInteger(10, 80);
    div.style.left = x + '%';
    div.style.top = y + '%';

    //randomising quote
    var rndQuote = getRndInteger(0, 57);
    //random quote from array
    div.innerHTML = quotes[rndQuote];
    //corresponding link from array
    div.href = links[rndQuote];
    div.target = '_blank';

    //randomising typeface
    var n = getRndInteger(0, 2);
    //random font from array
    div.style.fontFamily = fonts[n];

    //randomising font size
    var m = getRndInteger(2, 4);
    div.style.fontSize = m + 'rem';

    //print
    document.getElementById('randomText-div').append(div);
}

//MORE interaction: when clicked div boxes appears randomly
const buttonMore = document.getElementById('button-more');
buttonMore.onclick = function () {
    printRndText();
}

/************************************ MODAL *****************************************/
//TITLE: when clicked page reloads
const buttonRefresh = document.getElementById('heading-div');
buttonRefresh.onclick = function () {
    location.reload();
}
const exit = document.getElementsByClassName('exit');
//DISCLAIMER modal: appears on load
window.onload = function () {
    document.getElementById('disclaimer').style.display = "flex";
};
//disappears when clicked on exit button
exit[0].onclick = function () {
    document.getElementById('disclaimer').style.display = "none";
}

//ABOUT modal: appears when clicked on ABOUT button
const buttonAbout = document.getElementById('navigation-div-about')
buttonAbout.onclick = function () {
    document.getElementById('about-modal').style.display = "flex";
    document.getElementById('about-modal').classList.add('fadeIn');
}
//disappears when clicked anywhere on the div
document.getElementById('about-modal').onclick = function () {
    document.getElementById('about-modal').style.display = "none";
}

//INFO modal: appears when clicked on INFO button
const buttonInfo = document.getElementById('navigation-div-info')
buttonInfo.onclick = function () {
    document.getElementById('info-modal').style.display = "flex";
    document.getElementById('info-modal').classList.add('fadeIn');
}
//disappears when clicked anywhere on the div
document.getElementById('info-modal').onclick = function () {
    document.getElementById('info-modal').style.display = "none";
}