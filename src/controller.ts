// controller gives us what responses to return to the browser/user/website thing
/*CREATE = POST
READ = GET
UPDATE = PUT
DELETE = DELETE*/
import express from "express";
import {WELCOME_MESSAGE} from "./constants/api.constants";
import {User} from "./models/user.model";
import {Spread} from "./models/spread.model";
import {Bet} from "./models/bet.model";

// this controller basically has our services
export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.status(200).send(WELCOME_MESSAGE);
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body); //req.body is an empty object
    }
    // add a new user to the football database
    public postUser(req: express.Request, res: express.Response):void {
       //const newUser = new User(req.body);
      const newUser = new User({profile: req.body.profile});
      //console.log({profile: req.body.profile});
        newUser.save((error: Error, user: any) => {
          if (error) {
            res.send(error);
          }
          res.json(user);
        });
    }
    // this gets all the users... so really getUsers but whatever
    public getUser(req: express.Request, res: express.Response): void {
      User.findById(req.body._id, (error: Error, user: any) => {
       //console.log(req.body._id);
        if(error) {
          res.send(error);
        }
        res.json(user);
      });
    }
    // modifies a current user according to id.
    public putUser(req: express.Request, res: express.Response): void {
       
    }
    // creates a bet placed by a user
    public postBet(req: express.Request, res: express.Response): void {
       
    }
    // list a bet or bets
    public getBet(req: express.Request, res: express.Response): void {
       
    }
    // modifies a bet. perhaps adds people to a list of the bet
    public putBet(req: express.Request, res: express.Response): void {
       
    }
    // adds a match for the season. might not need this... 
    public postSpread(req: express.Request, res: express.Response): void {
       
    }

    public getSpread(req: express.Request, res: express.Response): void {
       
    }

    public putSpread(req: express.Request, res: express.Response): void {
       
    }

}
