const MernController = require('../controllers/mern.controller');
const upload = require('../middleware/upload')

module.exports = app => {
    app.get('/api/all', MernController.getAll);
    app.get('/api/mern/:id', MernController.getOne);
    app.post('/api/add', upload.single('image'), MernController.add);
    app.put('/api/update/:id', MernController.update);
    app.delete('/api/delete/:id', MernController.delete);
}