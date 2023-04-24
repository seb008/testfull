const router = require('express').Router();
const affaireController = require('../controllers/affaire.controller');

router.get('/',affaireController.readAffaire);
router.post('/',affaireController.createAffaire);
router.put('/:id',affaireController.updateAffaire);
router.delete('/:id',affaireController.deleteAffaire);


module.exports = router;