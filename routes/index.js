module.exports = function(app) {
    app.get('/', index);
};

function index(req, res) {
   return res.render('index', { pageTitle: 'Mesaninen - JavaScript' });
}