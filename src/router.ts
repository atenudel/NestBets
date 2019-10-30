import express from "express";
import {Controller} from "./controller";

export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();

    // Creates the routes for this router and returns a populated router object
    // so go checkout the controller.ts file to see what each router object does
    public getRouter(): express.Router {
        this.router.get("/hello", this.controller.getHello);
        this.router.post("/hello", this.controller.postHello);
        this.router.get("/", this.controller.welcomeMessage);
        this.router.post("/postUser", this.controller.postUser);
        
        return this.router;
    }
}
