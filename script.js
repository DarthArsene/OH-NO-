const stands = [
    { name: 'Star Platinum', owner: 'Jotaro Kujo', part: 'Stardust Crusaders' },
    { name: 'Gold Experience', owner: 'Giorno Giovanna', part: 'Golden Wind' },
    { name: 'Silver Chariot', owner: 'Jean Pierre Polnareff', part: 'Stardust Crusaders' },
    { name: 'The World', owner: 'Dio Brando', part: 'Stardust Crusaders' },
    { name: 'King Crimson', owner: 'Diavolo', part: 'Golden Wind' },
    { name: 'Crazy Diamond', owner: 'Josuke Higashikata', part: 'Diamond is Unbreakable' },
];

document.getElementById('stand-button').addEventListener('click', function() {
    const stand = stands[Math.floor(Math.random() * stands.length)];
    document.getElementById('stand-info').textContent = `You are ${stand.name}, owned by ${stand.owner}, from Part ${stand.part}!`;
});
