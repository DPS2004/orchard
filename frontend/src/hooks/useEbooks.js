import {sample} from "utils/functions";

// do you want a free shirt?
// https://hacktoberfest.digitalocean.com/
// come October time, make a pull request to add a quote!
// ...or just add a pull request now
// ...but then you won't get your shirt
// ...your decision

const EBOOKS = [
    "Rikri: GIMMICK: Hidden Speed CHang e You must Groove with the RHythm to Dretect whne the sprdee ds thchangtewess qwiokkkl opfccfurefahvujhuyjfhneedjuafc",
    "Klyzx: CV why are you streaming a green line for the entire day",
    "fizzd: banana detection",
    "SpikedJackson: First it was vegetables, now all out war",
    "Nocallia: the macarena is syncopation",
    "giacomo: ok, that's good news\ngiacomo: i have no idea whats going on",
    "fizzd: gamedev is like: we announce game, sleep for 1 year and then wake up and press the release button",
    "KyleLab: im trying to make fake virtual CARDS, you FOOLS",
    "fizzd: by fixed i mean \"off\" has been changed to \"oof\"",
    "ItzShaun: okay in my defense it is perfectly legal in some areas of antarctica",
    "Maddy: i only know how to make a box that says fuck in javascript but ok",
    "DNH: just use -- snap\nDNH: dont be a coward",
    "Bot: Listen I'm busy watching someone slow dance with a tray of enchiladas",
    "okamii: i needed four different pitches of beep so i made 24 instead",
    "roninnozlo: horny anthem\nSome J Name: what>\nSome J Name: no\nSome J Name: i have never charted a horny song in my life"
];

export default function useEbooks() {
    return sample(EBOOKS);
}
