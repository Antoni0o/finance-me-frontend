import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

async function news(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.NEWSAPI_KEY;

    const apiResponse = await axios.get(`https://newsapi.org/v2/top-headlines?language=pt&category=business&apiKey=${apiKey}`);
    const finalResponse = await apiResponse.data;
    const news = finalResponse.articles;    
    
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');

    res.json({
        news
    });
}

export default news;