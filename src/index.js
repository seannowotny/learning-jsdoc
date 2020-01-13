
const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Sean Nowotny
 * @see <a href="https://sean-nowotny.com">Sean Nowotny</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Todo Object
 * @type {{ id: number|string, text: string }}
 */
const todo = {
  id: '1',
  text: 'Hello'
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) =>
{
  return `$${amount + tax * amount}`;
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true
};


/**
 * Class to create a person object
 */
class Person
{
  /** @param {Object} personInfo Information about the person */
  constructor(personInfo)
  {
    /** @property {string} name Persons name */
    this.name = personInfo.name;

    /** @property {string} age Persons name */
    this.age = personInfo.age;
  }

  /** 
   * @property {Function} greet A greeting with the name and age
   * @returns {void}
   */
  greet()
  {
    console.log(`hello my name is ${this.name} and I am ${this.age}`);
  }
}

const person = new Person({
  name: 'John Doe',
  age: 30
});

/**
 * A person
 * See {@link Person}
 */
console.log(person.greet());
