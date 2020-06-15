const { Router } = require('express');
const router = Router();
/**
 *  @Controller
 */
const {
    createPerson,
    readPerson,
    readOnePerson,
    updatePerson,
    deletePerson
} = require('../controllers/person.controller');
/**
 * @New
 */
router.post('/create', createPerson);
/**
 * @GetAll
 */
router.get('/', readPerson);
/**
 * @GetOne
 */
router.get('/:id', readOnePerson);
/**
 * @Edit
 */
router.put('/update/:id', updatePerson);
/**
 * @Delete
 */
router.delete('/delete/:id', deletePerson);
// Export
module.exports = router;