'use strict';

// generated by: https://github.com/adafruit/io-swagger-templates
// using the Adafruit IO Swagger docs: https://io.adafruit.com/api/docs/api.json
const xml = require('xml'),
      Feed = require('../models/Feed');

module.exports.all = function all(req, res, next) {

  const groupId = req.swagger.params['group_id'].value;

  Feed.all(groupId)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


module.exports.create = function create(req, res, next) {

  const feed = req.swagger.params['feed'].value;

  Feed.create(feed)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


module.exports.get = function get(req, res, next) {

  const id = req.swagger.params['id'].value;

  Feed.get(id)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


module.exports.replace = function replace(req, res, next) {

  const id = req.swagger.params['id'].value,
      feed = req.swagger.params['feed'].value;

  Feed.replace(id, feed)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


module.exports.destroy = function destroy(req, res, next) {

  const id = req.swagger.params['id'].value;

  Feed.destroy(id)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


module.exports.update = function update(req, res, next) {

  const id = req.swagger.params['id'].value,
      feed = req.swagger.params['feed'].value;

  Feed.update(id, feed)
    .then(handle_response.bind(this, res))
    .catch(handle_error.bind(this, res));

};


const handle_response = function(res, data) {
  res.format({
    'application/json': function() {
      res.json(data);
    },
    'text/csv': function() {
      res.csv(data);
    },
    'application/xml': function() {
      res.set('Content-Type', 'text/xml');
      res.send(xml(data));
    },
    'text/html': function() {
      res.set('Content-Type', 'application/json');
      res.json(data);
    },
    'default': function() {
      res.set('Content-Type', 'application/json');
      res.json(data);
    }
  });
};

const handle_error = function(res, err) {
  res.format({
    'application/json': function() {
      res.status(500).json({ error: err });
    },
    'text/csv': function() {
      res.status(500).csv(err);
    },
    'application/xml': function() {
      res.set('Content-Type', 'text/xml');
      res.status(500).send(xml({ error: err }));
    },
    'text/html': function() {
      res.set('Content-Type', 'application/json');
      res.status(500).json({ error: err });
    },
    'default': function() {
      res.set('Content-Type', 'application/json');
      res.status(500).json({ error: err });
    }
  });
};
