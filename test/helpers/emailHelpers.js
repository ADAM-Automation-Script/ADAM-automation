// mailtrapUtils.js
const axios = require('axios');

const MAILTRAP_API_TOKEN = '146ac07996920ef12be4264464593ffb'; // Replace with your Mailtrap API token
const INBOX_ID = '434976'; // Replace with your Mailtrap Inbox ID

/**
 * Fetch emails from Mailtrap
 */
const fetchEmails = async () => {
  try {
    const response = await axios.get(
      `https://mailtrap.io/api/inboxes/${INBOX_ID}/messages`,
      {
        headers: {
          Authorization: `Bearer ${MAILTRAP_API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching emails: ${error.message}`);
  }
};

/**
 * Get email body by email ID
 */
const getEmailBody = async (emailId) => {
  try {
    const response = await axios.get(
      `https://mailtrap.io/api/inboxes/${INBOX_ID}/messages/${emailId}/body.html`,
      {
        headers: {
          Authorization: `Bearer ${MAILTRAP_API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching email body: ${error.message}`);
  }
};

/**
 * Extract approval link from email body
 */
const extractApproveLink = (emailBody) => {
  const approveButtonRegex = /<a href="([^"]*)">Approve<\/a>/i;
  const match = emailBody.match(approveButtonRegex);
  if (!match) {
    throw new Error('Approve link not found in email body.');
  }
  return match[1];
};

module.exports = {
  fetchEmails,
  getEmailBody,
  extractApproveLink,
};
