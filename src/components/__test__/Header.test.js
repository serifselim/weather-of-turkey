/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-render-in-setup */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header/Header';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';


beforeEach(() => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
});

test('Is the initial value correct?', () => {
    const searchEl = screen.getByTestId('select-city');
    expect(searchEl.value).toEqual('Ankara');
});

test('what happens if i change the value', () => {
    const searchEl = screen.getByTestId('select-city');
    const query = 'Adana';

    userEvent.selectOptions(searchEl, query);
    expect(searchEl.value).toEqual(query);
});

