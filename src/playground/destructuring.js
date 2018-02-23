
/* const person = {
    name: 'Michael',
    age: 26,
    location: {
        city: 'Seattle',
        temp: 33
    }
}

const {name: firstName = 'Anon', age} = person

console.log(`${firstName} is ${age}.`)

const {city, temp: temperature} = person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName) */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state, ] = address

console.log(`You are in ${city}, ${state}`)