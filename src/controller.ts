// controller gives us what responses to return to the browser/user
import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }
}
