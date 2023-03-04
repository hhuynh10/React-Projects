const MernController = require('../controllers/mern.controller');

module.exports = app => {
    app.get('/api/all', MernController.getAll);
    app.get('/api/mern/:id', MernController.getOne);
    app.post('/api/add', MernController.add);
    app.put('/api/update/:id', MernController.update);
    app.delete('/api/delete/:id', MernController.delete);
}