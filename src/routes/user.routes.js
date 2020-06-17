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
    deleteUser,
    signin,
    logout
} = require('../controllers/user.controller');
const { isAuthenticated } = require('../helpers/auth');
/**
 * ?Sigin and logout
 */
router.post('/signin', signin);
router.post('/logout', logout)
/**
 * @New
 */
router.post('/create', isAuthenticated, createUser);
/**
 * @GetAll
 */
router.get('/', isAuthenticated, readUser);
/**
 * @GetOne
 */
router.get('/:id', isAuthenticated, readOneUser);
/**
 * @Edit only change password
 */
router.put('/update/:id', isAuthenticated, updateUser);
/**
 * @Delete
 */
router.delete('/delete/:id', isAuthenticated, deleteUser);
// Export
module.exports = router;