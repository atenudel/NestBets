// controller gives us what responses to return to the browser/user/website thing
/*CREATE = POST
READ = GET
UPDATE = PUT
DELETE = DELETE*/
import express from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import {WELCOME_MESSAGE} from "./constants/api.constants";
import {User} from "./models/user.model";
import {Spread} from "./models/spread.model";
import {Bet} from "./models/bet.model";
import {SECRET} from "./constants/api.constants";
// generates the JWT token for our auth
function generateToken(user:any) {
  return jwt.sign(JSON.stringify(user),SECRET, {
      expiresIn: 10080 // seconds
  });
}
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
       //const newUser = new User(req.body);
       const email = req.body.email;
       const firstName = req.body.firstName;
       const lastName = req.body.lastName;
       const password = req.body.password;
      
       if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' });
      }
      if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' });
      }
      if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' });
      }
      //console.log({profile: req.body.profile});
      let user = new User({
        email: email,
        password: password,
        provider: 'local',
        roles: ['User'],
        //auths: { clients: [clientid] /*apis: authAPIs*/},
        profile: { firstName: firstName, lastName: lastName }
      });
      user.save((error: Error, user: any) => {
        if (error) {
          res.send(error);
        }
        let plainObj; // convert to plain obj
        try {
          plainObj = JSON.parse(JSON.stringify(user));
          console.log(plainObj);
        } catch (e) {
          console.log(e);
        }
        let userInfo = res.json(plainObj);
        // 201 is creation success
        res.status(201).json({
          token: 'JWT' + generateToken(plainObj),
          user: userInfo
        });
      });
    }
    // finds a single user by _id field in req.body._id. test it out in postman
    public getUser(req: express.Request, res: express.Response): void {
      User.findById(req.body._id, (error: Error, user: any) => {
       //console.log(req.body._id);
        if(error) {
          res.send(error);
        }
        res.json(user);
      });
    }
    // modifies a current user according to id
    // make sure to include the nonmodified fields when writing
    // in body params... otherwise data will be lost
    public putUser(req: express.Request, res: express.Response): void {
      User.findByIdAndUpdate(req.body._id,req.body, (error: Error, user: any) => {
         if(error) {
           res.send(error);
         }
         res.json(user);
       });
    }
      // adds a match for the season. might not need this... 
    public postSpread(req: express.Request, res: express.Response): void {
     const newSpread = new Spread({spread: req.body.spread});
     //console.log({profile: req.body.profile});
       newSpread.save((error: Error, spread: any) => {
         if (error) {
           res.send(error);
         }
         res.json(spread);
       });
   }
   public getSpread(req: express.Request, res: express.Response): void {
    Spread.findById(req.body._id, (error: Error, spread: any) => {
      //console.log(req.body._id);
       if(error) {
         res.send(error);
       }
       res.json(spread);
     });
   }

   public putSpread(req: express.Request, res: express.Response): void {
    Spread.findByIdAndUpdate(req.body._id,req.body, (error: Error, spread: any) => {
      if(error) {
        res.send(error);
      }
      res.json(spread);
    });
   }
    // creates a bet placed by a user
    public postBet(req: express.Request, res: express.Response): void {
      const newBet = new Bet({bet: req.body.bet});
      //console.log({profile: req.body.profile});
        newBet.save((error: Error, bet: any) => {
          if (error) {
            res.send(error);
          }
          res.json(bet);
        });
    }
    // list a bet by ID
    public getBet(req: express.Request, res: express.Response): void {
      Bet.findById(req.body._id, (error: Error, bet: any) => {
        //console.log(req.body._id);
         if(error) {
           res.send(error);
         }
         res.json(bet);
       });
    }
    // modifies a bet by ID
    public putBet(req: express.Request, res: express.Response): void {
      Bet.findByIdAndUpdate(req.body._id,req.body, (error: Error, bet: any) => {
        if(error) {
          res.send(error);
        }
        res.json(bet);
      });
    }
  

}
