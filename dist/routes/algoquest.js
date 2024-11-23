"use strict";
// src/routes/algoquest.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boundController_1 = require("../controllers/boundController");
const router = express_1.default.Router();
/* POST request */
router.post('/', (req, res) => {
    boundController_1.boundController.run(req, res);
});
exports.default = router;
