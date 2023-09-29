import { Router } from "express";
import { Request, Response } from "express";
import { fetchActionMovies, fetchComedyMovies, fetchDocumentaryMovies, fetchHorrorMovies, fetchMovie, fetchOriginalsMovies, fetchRomanceMovies, fetchTopretedMovies, fetchTrendingMovies, fetchTv } from "../../services";

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

router.get("/trendingMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const trendingMovies = await fetchTrendingMovies();
        if (trendingMovies) {
            res.status(200).json(trendingMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/topretedMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const topretedMovies = await fetchTopretedMovies();
        if (topretedMovies) {
            res.status(200).json(topretedMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/actionMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const actionMovies = await fetchActionMovies();
        if (actionMovies) {
            res.status(200).json(actionMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/comedyMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const comedyMovies = await fetchComedyMovies();
        if (comedyMovies) {
            res.status(200).json(comedyMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/horrorMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const horrorMovies = await fetchHorrorMovies();
        if (horrorMovies) {
            res.status(200).json(horrorMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/romanceMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const romanceMovies = await fetchRomanceMovies();
        if (romanceMovies) {
            res.status(200).json(romanceMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/documentaryMovies", async (req: Request, res: Response) => {
    console.log(req);
    try {
        const documentaryMovies = await fetchDocumentaryMovies();
        if (documentaryMovies) {
            res.status(200).json(documentaryMovies);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/movie/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const movie = await fetchMovie(Number(id));
        if (movie) {
            res.status(200).json(movie);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

router.get("/tv/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tv = await fetchTv(Number(id));
        if (tv) {
            res.status(200).json(tv);
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message, });
    }
});

export { router };