import express, (Request, Response, Express) from 'express';

const app: Express = express();

const port: number = 3000;

app.get('/', (req: Request, res: Response): void => {
    res.json({
        message: "C'est ok"
    })
})

app.listen(port, (): void => {
    console.log("L'application tourne sur le port " + port);
})