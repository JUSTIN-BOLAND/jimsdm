var express = require('express');
var router = express.Router();

// ROuTING
router.get('/', function(req, res) {
  res.render('index', { title: 'Direct Marketing @ convertMost.com' });
});

router.get('/cinema', function(req, res) {
    res.render('cinema', {
        title: 'Generate Traffic, Get Customers To Sign Up For Membership' });
});

router.get('/oct18seo', function(req, res) {
    res.render('oct18seo', {
        title: 'Get Top Spot with Good Copywriting?' });
});

router.get('/timeline', function(req, res) {
    res.render('timeline', {
        title: 'Timeline: Jim Syyap Direct Marketing' });
});

router.get('/contact', function(req, res) {
    res.render('contact', {
        title: 'Jim Syyap Direct Marketing'});
});

router.get('/about', function(req, res) {
    res.render ('about', {
        title: 'Jim Syyap Direct Marketing' });
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
