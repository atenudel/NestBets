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

    public addUser(req: express.Request, res: express.Response): void {
       
    }

    public getUser(req: express.Request, res: express.Response): void {
       
    }

    public updateUser(req: express.Request, res: express.Response): void {
       
    }

    public addBet(req: express.Request, res: express.Response): void {
       
    }

    public getBet(req: express.Request, res: express.Response): void {
       
    }

    public updateBet(req: express.Request, res: express.Response): void {
       
    }


    public addMatch(req: express.Request, res: express.Response): void {
       
    }

    public getMatch(req: express.Request, res: express.Response): void {
       
    }



    
}
