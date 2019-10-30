// controller gives us what responses to return to the browser/user
/*
CREATE = POST
READ = GET
UPDATE = PUT
DELETE = DELETE
*/
import express from "express";
import {WELCOME_MESSAGE} from "./constants/api.constants";
// this controller basically has our services
export class Controller {
    public welcomeMessage(req: express.Request, res:express.Response): void {
        res.status(200).send(WELCOME_MESSAGE);
    }
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public postUser(req: express.Request, res: express.Response): void {
       
    }

    public getUser(req: express.Request, res: express.Response): void {
       
    }

    public putUser(req: express.Request, res: express.Response): void {
       
    }

    public postBet(req: express.Request, res: express.Response): void {
       
    }

    public getBet(req: express.Request, res: express.Response): void {
       
    }

    public putBet(req: express.Request, res: express.Response): void {
       
    }

    public postMatch(req: express.Request, res: express.Response): void {
       
    }

    public getMatch(req: express.Request, res: express.Response): void {
       
    }

    public pustMatch(req: express.Request, res: express.Response): void {
       
    }

}
