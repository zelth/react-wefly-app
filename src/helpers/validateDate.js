import moment from 'moment';

const yup = require('yup');

function validateDate(format = 'MMMM d, yyyy', parseStrict = true) {
  return this.test({
    name: 'format',
    test: value => moment(value, format, parseStrict).isValid()
  });
}

yup.addMethod(yup.date, 'format', validateDate);