var express = require('express');
var router = express.Router();

// ROuTING
router.get('/', function(req, res) {
  res.render('index', { title: 'Pay Per Click Advertising, convertMost.com' });
});

router.get('/cinema', function(req, res) {
    res.render('cinema', {
        title: 'Generate Traffic, Get Customers To Sign Up For Membership' });
});

router.get('/timeline', function(req, res) {
    res.render('timeline', {
        title: 'Timeline: convertMost.com' });
});

router.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Jim Syyap & Company'});
});

router.get('/about', function(req, res) {
    res.render ('about', {
        title: 'Jim Syyap & Company' });
});

router.get('/adhesion', function(req, res) {
    res.render('adhesion', {
        title: 'Adwords Example: Adwords + Auckland' });
});

router.get('/toc', function(req, res) {
    res.render('toc', { title: 'Terms and Conditions' });
});

router.get('/usedcardealer', function(req, res) {
    res.render('usedcardealer', { title: 'Marketing Campaign For Used Car Dealer'});
});

module.exports = router;
