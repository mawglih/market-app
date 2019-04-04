export default emails => {
  const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => reg.test(email) === false);

  if(invalidEmails.lebgth) {
    return `These emails are invalid: ${invalidEmails}`;
  }
  return;
};
