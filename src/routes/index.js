import { Router } from "express";
import testsRoutes from "./tests.routes.js";
import usersRoutes from "./users.routes.js"

const router = Router();

const routes = [
	{ path: "/tests", route: testsRoutes },
	{ path: "/users", route: usersRoutes },
];

routes.forEach(({ path, route }) => {
	router.use(path, route);
});

export default router;
