import { ascendingExpensesAmount } from "../../components/Dashboard/index";

describe('expense data is sorted', () => {
    it('returns array of expenses in ascending value', () => {
        const unsortedArray = [
            {id: "a", date: '2018-07-05', description: 'Transport for London', category_title: 'Transport', amount: {value: -10.85, currency_iso: 'GBP'}},
            {id: "b", date: '2018-06-05', description: 'Costa Coffee', category_title: 'Eating Out', amount: {value: -2.85, currency_iso: 'GBP'}},
            {id: "c", date: '2018-11-05', description: 'John Lewis', category_title: 'Shopping', amount: {value: -112, currency_iso: 'GBP'}},
        ];
        const sortedArray = [
            {id: "b", date: '2018-06-05', description: 'Costa Coffee', category_title: 'Eating Out', amount: {value: -2.85, currency_iso: 'GBP'}},
            {id: "a", date: '2018-07-05', description: 'Transport for London', category_title: 'Transport', amount: {value: -10.85, currency_iso: 'GBP'}},
            {id: "c", date: '2018-11-05', description: 'John Lewis', category_title: 'Shopping', amount: {value: -112, currency_iso: 'GBP'}},
        ];
        expect(ascendingExpensesAmount(unsortedArray)).toEqual(sortedArray);
    });
});
