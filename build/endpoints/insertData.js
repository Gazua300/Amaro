"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertData = void 0;
const connection_1 = require("../data/connection");
const insertData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 400;
    try {
        const { id, name, tags } = req.body;
        if (!id || !name || !tags) {
            statusCode = 401;
            throw new Error('Preencha os campos!');
        }
        yield (0, connection_1.con)('amaro_products').insert({
            id,
            name,
            tags
        });
        res.status(200).send('Data was insert successfully!');
    }
    catch (error) {
        res.status(statusCode).send(error.message || error.sqlMessage);
    }
});
exports.insertData = insertData;
//# sourceMappingURL=insertData.js.map