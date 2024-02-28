const user = {id: 1, name: 'sanjana', job: 'actress'}
//  Javascript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)

/*
{ id: 1, name: 'sanjana', job: 'actress' }
{"id":1,"name":"sanjana","job":"actress"}

*/  

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kokhukhet path',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const shopObj  = JSON.parse(shopJSON)
console.log(shopJSON)