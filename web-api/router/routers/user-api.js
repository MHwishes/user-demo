const {Router} = require('express');
const ApiService=require('../../controller/user-service');

const router = Router();
const apiService = new ApiService();

router.get('/', apiService.getAllUsers);
// router.delete('/:id',apiService.deleteUser);
// router.post('/',apiService.saveUser);
// router.get('/:id',apiService.getOneUser);
// router.put('/:id',apiService.updateOneUser);


module.exports = router;