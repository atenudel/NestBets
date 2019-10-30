// controller gives us what responses to return to the browser/user
/*CREATE = POST
READ = GET
UPDATE = PUT
DELETE = DELETE*/
import express from "express";
import {WELCOME_MESSAGE} from "./constants/api.constants";
import {User} from "./models/user.model";
// this controller basically has our services
export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.status(200).send(WELCOME_MESSAGE);
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body); //req.body is an empty object
    }
    // add a new user to the football database
    public postUser(req: express.Request, res: express.Response) {
       const newUser = new User(req.body);
       newUser.save((error: Error, User: any) => {
        if (error) {
          res.send(error);
        }
        res.json(User);
      });
    }

    public getUser(req: express.Request, res: express.Response): void {
      User.find({}, (error: Error, user: any) => {
        if(error) {
          res.send(error);
        }
        res.json(user);

      });

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
