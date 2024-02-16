import { Request, Response } from 'express';

// models
import User from '../modules/user';

const getAllUsers = (request: Request, res: Response) => {
    User.find()
        .then((result) => {
            return res.status(200).json({
                result: result,
                count: result.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export { getAllUsers };