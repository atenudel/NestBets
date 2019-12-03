import express from "express";
import {Controller} from "./controller";

export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();
    // Creates the routes for this router and returns a populated router object
    // so go checkout the controller.ts file to see what each router object does
    public getRouter(): express.Router {
        this.router.get("/hello", this.controller.getHello); // shows welcome message now
       // this.router.post("/hello", this.controller.postHello);
        this.router.post("/postUser", this.controller.postUser); // register
        this.router.get("/getUser/:id", this.controller.getUser); // login
        this.router.put("/putUser/:id", this.controller.putUser); //modify pw?

        this.router.post("/postSpread",this.controller.postSpread);
        this.router.get("/getSpreads", this.controller.getSpreads);
        this.router.get("/getSpread/:id", this.controller.getSpread);
        this.router.put("/putSpread/:id", this.controller.putSpread);

        this.router.post("/postBet",this.controller.postBet);
        this.router.get("/getBet/:id", this.controller.getBet);
        this.router.put("/putBet/:id", this.controller.putBet);

        return this.router;
    }
}
