import moment from "moment";

const filters = {
    text: '',
    sortBy: 'date',
    startBy: undefined,
    endBy: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amount',
    startBy: moment(0),
    endBy: moment(0).add(3, 'days')
};

export { filters, altFilters };