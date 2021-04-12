/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const letter = email.split('');
  let ending = [];
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === '@' && letter[i + 1] !== '.') {
      ending = letter.splice(i + 1, letter.length - i);
    }
  }
  return ending.join('');
}

module.exports = getEmailDomain;
