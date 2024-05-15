import { request, response} from 'express'

const responderUser = (req = request, res =response) => {
    res.json({
        user: 'User'
    });
}