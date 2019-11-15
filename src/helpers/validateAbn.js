// https://abr.business.gov.au/Help/AbnFormat

const yup = require('yup');

function ABNValidate() {
  return this.test({
    name: 'abn',
    test: val => {
      const abn = val.replace(/[^0-9]/g, '');

      const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

      if (abn.length === 11) {
        let sum = 0;

        weights.forEach((weight, index) => {
          sum += weight * (abn[index] - (index ? 0 : 1));
        });

        return sum % 89 === 0;
      }

      return false;
    }
  });
}

// `addMethod` doesn't do anything special it's
// equivalent to: yup.string.prototype.format = ABNValidate
yup.addMethod(yup.string, 'abn', ABNValidate);