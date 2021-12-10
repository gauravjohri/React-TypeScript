import axios from "axios";
import { Request, Response } from "express";
import Products from '../Interfaces/Products';

const Product = async (request: Request, response: Response) => {
    const limit = 2;
    const page = (request.query.page) ? `${request.query.page}` : ``;
    const query = (request.query.q) ? `&q=${request.query.q}` : ``;
    const apiUrl = `${process.env.DB_SERVER}:${process.env.DB_PORT}/products?_page=${page}&_limit=${limit}${query}`;
    try {
        let productData = await axios.get(`${apiUrl}`);
        let productResponse: Products = await productData.data;
        let page = Math.ceil(parseInt(productData.headers['x-total-count']) / limit);
        return response.status(200).json({ success: true, data: productResponse, totalPages: page });
    } catch (error) {
        return response.status(500).json({ success: false, message: 'Internal server error.' });
    }
}
export default Product;