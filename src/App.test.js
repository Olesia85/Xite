import React from 'react';
import ReactDOM from 'react-dom';
import App, {prime} from './App';
const app = new App();

describe('Rendering check', () => {
 it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
 });
});

describe('Primne number validation', () => {
 //following
 it('P-01 returnes false for 1', () => {
   expect(app.prime(1)).toEqual(app.numberIsNotPrime);
 });
 it('P-02 returnes true for 2', () => {
   expect(app.prime(2)).toEqual(app.numberIsPrime);
 });
 it('P-03 returnes true for 3', () => {
   expect(app.prime(3)).toEqual(app.numberIsPrime);
 });
 it('P-04 returnes false for 4', () => {
   expect(app.prime(4)).toEqual(app.numberIsNotPrime);
 });
 it('P-05 returnes false for any even number', () => {
   expect(app.prime(Math.floor((Math.random() * 1000) + 3)*2)).toEqual(app.numberIsNotPrime);
 });
 it('P-06 returnes true for bigger prime numbers', () => {
   expect(app.prime(67)).toEqual(app.numberIsPrime);
   expect(app.prime(137)).toEqual(app.numberIsPrime);
 });
 it('P-07 returnes false for 0', () => {
   expect(app.prime(0)).toEqual(app.numberIsNotPrime);
 });
 it('P-08 returnes false for negative values', () => {
   expect(app.prime(-7)).toEqual(app.numberIsNotPrime);
 });
});
