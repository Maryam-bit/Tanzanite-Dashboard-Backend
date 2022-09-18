import { Router } from "express";
import testsRoutes from "./tests.routes.js";

const router = Router();

const routes = [
	{ path: "/tests", route: testsRoutes },
];

routes.forEach(({ path, route }) => {
	router.use(path, route);
});

export default router;
