import { Router } from "express";
const router = Router();

router.route("/test1").get((req, res)=>  {
    res.send('testing route working')
    console.log('test1 route called')
});

export default router;
