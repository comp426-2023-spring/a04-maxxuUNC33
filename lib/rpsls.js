const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const win = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['sciessors', 'rock']
}
export function rps(shot) {
    if(shot === undefined) {
        return {"player": choices[Math.floor(Math.random() * 3)]};
    }
    if(!choices.slice(0,3).includes(shot.toLowerCase())) {
        throw new Error(`${shot} is out of range.`);
    }
    let sim = choices[Math.floor(Math.random() * 3)];
    let result = winner(shot.toLowerCase(), sim);
    return {"player": shot, "opponent": sim, "result": result};
}
export function rpsls(shot) {
    if(shot === undefined) {
        return {"player": choices[Math.floor(Math.random() * 5)]};
    }
    if(!choices.includes(shot.toLowerCase())) {
        throw new Error(`${shot} is out of range.`);
    }
    let sim = choices[Math.floor(Math.random() * 5)];
    let result = winner(shot.toLowerCase(), sim);
    return {"player": shot, "opponent": sim, "result": result};

}

export function winner(player, sim) {
    if(player === sim) {
        return 'tie';
    }
    if(win[player].includes(sim)) {
        return 'win';
    }
    return 'lose';
}