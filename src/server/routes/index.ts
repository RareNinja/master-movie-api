import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/originalMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        // const originalMovies = await fetchOriginalsMovies();
        // if (originalMovies) {
        res.status(200).send("Bompas não ira na pizza amanha");
        // }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

export { router };