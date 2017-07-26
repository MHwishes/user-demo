const constant = require('../config/constant');
const request = require('superagent');
const config = require('config');
const apiService = config.get('back_endApiService');

class ApiServiceController {


    getAllUsers(req, res, next) {
        request
            .get(apiService)
            .set('Accept', 'application/json')
            .end((err, result) => {
                if (err) {
                    throw (err);
                } else {
                    return res.status(constant.httpCode.OK).send(result.body);
                }
            });

    }

    getOneUser(req, res, next) {
        const id = req.params.id;
        request
            .get(apiService + `/${id}`)
            .set('Accept', 'application/json')
            .end((err, user) => {
                if (err) {
                    throw(err);
                } else {
                    return res.status(constant.httpCode.OK).send(user.body);
                }
            })


    }

    updateOneUser(req, res, next){ //TODO:put 接口有问题
        const id=req.params.id;
        request
            .put(apiService + `/${id}`)
            .send(req.body)
            .set('Accept', 'application/json')
            .end((err, doc) => {
                if (err) {
                    console.log("dhfajskfh");
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.NO_CONTENT)
                }
            })

    }

    saveUser(req, res, next) {

        request
            .post(apiService)
            .send(req.body)
            .end((err, doc) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.CREATED);
                }
            })
    }
    deleteUser(req, res, next){
        const id = req.params.id;

        request
            .delete(apiService + `/${id}`)
            .set('Accept', 'application/json')
            .end((err, request) => {
                if (err) {
                    throw (err);
                } else {
                    return res.sendStatus(constant.httpCode.NO_CONTENT);
                }
            })
    }


}

module.exports = ApiServiceController;