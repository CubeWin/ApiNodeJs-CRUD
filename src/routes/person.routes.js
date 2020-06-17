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
const { isAuthenticated } = require('../helpers/auth');
/**
 * @New
 */
router.post('/create', isAuthenticated, createPerson);
/**
 * @GetAll
 */
router.get('/', isAuthenticated, readPerson);
/**
 * @GetOne
 */
router.get('/:id', isAuthenticated, readOnePerson);
/**
 * @Edit
 */
router.put('/update/:id', isAuthenticated, updatePerson);
/**
 * @Delete
 */
router.delete('/delete/:id', isAuthenticated, deletePerson);
// Export
module.exports = router;