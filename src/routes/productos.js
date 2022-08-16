const router = require('express').Router();

const productosController = require('../controllers/productosController');

router.get('/', productosController.list);
router.post('/add', productosController.save)
router.get('/update/:id', productosController.edit);
router.post('/update/:id', productosController.update);
router.get('/delete/:id', productosController.delete);

//para categorias
router.get('/', productosController.categorias);
router.post('/addcategoria', productosController.savecategoria);
router.get('/updatecategoria/:id', productosController.editcategoria);
router.post('/updatecategoria/:id', productosController.updatecategoria);

router.get('/deletecategoria/:id', productosController.deletecategoria);




module.exports = router;

