
const details =  ['mina', 123, 'mina.com']
const [name, id, website] = details;


console.log(name, id, website)
//mina 123 mina.com


const data = "basketball,sports,90210,23"
const [itemName, category, sku, inventory] = data.split(',')

console.log(itemName, category, sku, inventory)
//basketball sports 90210 23





const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

const [captain, assistant, ...players] = team;
// ... = rest operator

console.log(captain, assistant, players)
//Wes Harry [ 'Sarah', 'Keegan', 'Riker' ]
