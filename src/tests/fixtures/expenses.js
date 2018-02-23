import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
}, {
    id: '3',
    description: 'Gas',
    note: '',
    amount: 145,
    createdAt: moment(0).add(4, 'days').valueOf(),
}, {
    id: '4',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(5, 'days').valueOf(),
}, {
    id: '5',
    description: 'Water',
    note: '',
    amount: 50,
    createdAt: moment(0).add(10, 'days').valueOf(),
}, {
    id: '6',
    description: 'Power',
    note: '',
    amount: 300,
    createdAt: moment(0).add(20, 'days').valueOf(),
}]