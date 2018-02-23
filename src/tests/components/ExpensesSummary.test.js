import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should correctly render Expenses Summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={231} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render Expenses Summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23134563456} />)
    expect(wrapper).toMatchSnapshot()
})