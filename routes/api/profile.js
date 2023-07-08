const router = require("express").Router();
const auth=require('../../middleware/auth');
//route   GET  api/profile/me
//desc     Get current user profile
//access   private
router.get("/",auth, async(req, res) => {
  try {
    
  } catch (err) {
    
  }
});


module.exports=router;
