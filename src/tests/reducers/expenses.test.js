import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Coffee',
        note: '',
        amount: 6500,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const amount = 209500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { amount }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
    const amount = 209500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { amount }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const newExpenses = [{
        id: '4',
        description: 'Phone',
        note: '',
        amount: 1950,
        createdAt: 0
    }, {
        id: '5',
        description: 'Food',
        note: '',
        amount: 209500,
        createdAt: moment(0).subtract(5, 'days').valueOf()
    }, {
        id: '6',
        description: 'Drink',
        note: '',
        amount: 5500,
        createdAt: moment(0).add(5, 'days').valueOf()
    }];;
    const action = {
        type: 'SET_EXPENSES',
        expenses: newExpenses
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(newExpenses);
});