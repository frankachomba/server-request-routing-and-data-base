import express from "express"
const router = express.Router();
router.post('/register-user', (req, res) => {
return res.status(200).json({
    message: "registered",
     success:true
})
})
export default router;
