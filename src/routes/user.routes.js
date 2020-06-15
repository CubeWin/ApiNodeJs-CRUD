const { Router } = require('express');
const router = Router();
/**
 *  @Controller
 */
const {
    createUser,
    readUser,
    readOneUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');
/**
 * @New
 */
router.post('/create', createUser);
/**
 * @GetAll
 */
router.get('/', readUser);
/**
 * @GetOne
 */
router.get('/:id', readOneUser);
/**
 * @Edit
 */
router.put('/update/:id', updateUser);
/**
 * @Delete
 */
router.delete('/delete/:id', deleteUser);
// Export
module.exports = router;