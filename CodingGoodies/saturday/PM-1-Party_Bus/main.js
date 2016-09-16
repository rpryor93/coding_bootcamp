var PartyBus = require('./party_bus.js');

//fun fact: Beersville is a real city in PA!!!
var BobsBitchinPartyBus = new PartyBus('Cosmo', 'NYC', 'Beersville, PA');

//none
console.log('dudes?', BobsBitchinPartyBus.duds);

BobsBitchinPartyBus.addDud('female', 'Moon', 10);

console.log('dudes?', BobsBitchinPartyBus.duds);

BobsBitchinPartyBus.addDud('male', 'Breaker', 10);
BobsBitchinPartyBus.addDud('female', 'Pine', 8);
BobsBitchinPartyBus.addDud('male', 'Chance', 9);
BobsBitchinPartyBus.addDud('male', 'West', 4);
BobsBitchinPartyBus.addDud('female', 'Honor', 6);

console.log('dudes?', BobsBitchinPartyBus.duds);
