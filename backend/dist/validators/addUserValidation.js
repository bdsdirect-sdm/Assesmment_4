"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.addUserValidation = void 0;
const express_validator_1 = require("express-validator");
exports.addUserValidation = [
    (0, express_validator_1.check)("firstname")
        .not()
        .isEmpty()
        .withMessage("First Name is required"),
    (0, express_validator_1.check)("lastname")
        .not()
        .isEmpty()
        .withMessage("Last Name is required"),
    (0, express_validator_1.check)("email")
        .not()
        .isEmpty()
        .withMessage("Email is empty")
        .isEmail()
        .withMessage("Email is required"),
    (0, express_validator_1.check)("company_address")
        .not()
        .isEmpty()
        .withMessage("Comapny Address is required"),
    (0, express_validator_1.check)("company_city")
        .not()
        .isEmpty()
        .withMessage("Company City is required"),
    (0, express_validator_1.check)("company_state")
        .not()
        .isEmpty()
        .withMessage("Company State is required"),
    (0, express_validator_1.check)("company_zip")
        .not()
        .isEmpty()
        .withMessage("Company Zip is required"),
    (0, express_validator_1.check)("home_address")
        .not()
        .isEmpty()
        .withMessage("Home Address is required"),
    (0, express_validator_1.check)("home_city")
        .not()
        .isEmpty()
        .withMessage("Home City is required"),
    (0, express_validator_1.check)("home_state")
        .not()
        .isEmpty()
        .withMessage("Home State is required"),
    (0, express_validator_1.check)("home_zip")
        .not()
        .isEmpty()
        .withMessage("Home Zip is required"),
    (req, res, next) => {
        (0, exports.validateUser)(req, res, next);
    }
];
const validateUser = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    const err = errors.array();
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: err });
    }
    next();
};
exports.validateUser = validateUser;
