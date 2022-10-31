/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  /**
   * @param {string} email
   * @returns {string} resolvedEmail
   */
  const resolveEmail = (email) => {
    let [local, domain] = email.split("@");
    local = local.replace(/\+.*$/, "").replaceAll(".", "");
    return `${local}@${domain}`;
  };

  emails.forEach((e) => uniqueEmails.add(resolveEmail(e)));
  return uniqueEmails.size;
};

module.exports = { numUniqueEmails };
