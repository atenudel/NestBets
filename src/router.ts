import express from "express";
import {Controller} from "./controller";
//import {passportService} from './security/passport';

export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();
    // Creates the routes for this router and returns a populated router object
    // so go checkout the controller.ts file to see what each router object does
    public getRouter(): express.Router {
        this.router.get("/hello", this.controller.getHello); // shows welcome message now
        this.router.post("/hello", this.controller.postHello);
        // register a user
        this.router.post("/postuser", this.controller.postUser);
        this.router.get("/getuser/:id", this.controller.getUser);
        this.router.put("/putuser/:id", this.controller.putUser);
        // only admins can add a spread
        this.router.post("/postspread",this.controller.postSpread);
        this.router.get("/getspread/:id", this.controller.getSpread);
        this.router.put("/putspread/:id", this.controller.putSpread);
        // anyone can add in a bet
        this.router.post("/postbet",this.controller.postBet);
        this.router.get("/getbet/:id", this.controller.getBet);
        this.router.put("/putbet/:id", this.controller.putBet);

        return this.router;
    }
}
