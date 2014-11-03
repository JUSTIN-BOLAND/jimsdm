var express = require('express');
var router = express.Router();
var request = require('request');

// ROuTING

//save html iriscouch, use mikael/request to pipe
/*
router.get('/', function(req, res) {
    var url = 'https://jims.iriscouch.com/serve_jimsdm/e337624277e365c49eb177668f0337e5/couch_request.htm'
    request.get(url).pipe(res);
});
*/

router.get('/bucketlist', function(req, res) {
    res.render('bucketlist', {
        title: 'Bucket List - Jim Syyap' });
});

router.get('/realestate_adv', function(req, res) {
    res.render('realestate_adv', {
        title: 'How To Get An Unfair But Legal Advantage When Listing And Selling Real Estate' });
});

router.get('/', function(req, res) {
    res.render('index', { 
        title: 'Pay Per Click Advertising, convertMost.com' });
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
