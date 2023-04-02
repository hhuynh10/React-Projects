const UserController = require('../controllers/user.controller');
const upload = require('../middleware/upload')

module.exports = app => {
    app.get('/api/all', UserController.getAll);
    app.get('/api/mern/:id', UserController.getOne);
    app.post('/api/add', upload.single('image'), UserController.add);
    app.put('/api/update/:id', UserController.update);
    app.delete('/api/delete/:id', UserController.delete);
}