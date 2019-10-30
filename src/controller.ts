// controller gives us what responses to return to the browser/user
import express from "express";
import {WELCOME_MESSAGE} from "./constants/api.constants";
// this controller basically has our services
export class Controller {
    public welcomeMEssage(req: express.Request, res:express.Response): void {
        res.status(200).send(WELCOME_MESSAGE);
    }
    
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }
}
