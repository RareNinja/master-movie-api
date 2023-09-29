import { Router } from "express";
import { Request, Response } from "express";
import { fetchOriginalsMovies } from "../../services";

const router = Router();

router.get("/originalMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const originalMovies = await fetchOriginalsMovies();
        if (originalMovies) {
            res.status(200).json(originalMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

export { router };