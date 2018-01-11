const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');

const Mailer = require('../services/Mailer');

module.exports = app => {
  app.post('/api/email', async (req, res) => {
    const { subject, content, recipients } = req.body;

    const survey = {
      subject,
      content,
      recipients: recipients.split(';').map(email => ({
        email: email.trim()
      }))
    };

    //console.log(survey);
    const mailer = new Mailer(survey, content);

    try {
      await mailer.send();
      res.send({ success: true });
    } catch (err) {
      res.status(422).send({ success: false, err });
    }
  });
};
