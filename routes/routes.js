const Notion = require('../notion.js');
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {

  function completeTrans(res, response) {
    console.log(response)
    if (response == '400') {
      res.render('failed/error', { status: 'fail', highlighted: 'Error 400: Dublicate Entries', bigText: 'Please check the database' });
      return;
    } else if (response == '404') {
      res.render('failed/error', { status: 'fail', highlighted: 'Error 404: Page Not found', bigText: 'Please check your link' });
      return;
    } else {
      res.redirect(response);
    }
  }

  const parsedParam = req.query.redirectId;

  if (typeof parsedParam == 'undefined' && parsedParam == null) {
    res.render('failed/error', { status: 'fail', highlighted: 'Error 69: Missing parameters', bigText: 'Your link is lacking parameters' });
  }
  else {
    Notion
      .probeDatabase(parsedParam)
      .then(response => completeTrans(res, response));
  };

});

module.exports = router;