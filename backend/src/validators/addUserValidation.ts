import  { check, validationResult } from 'express-validator';

export const addUserValidation = [
    check("firstname")
    .not()
    .isEmpty()
    .withMessage("First Name is required"),

    check("lastname")
    .not()
    .isEmpty()
    .withMessage("Last Name is required"),

    check("email")
    .not()
    .isEmpty()
    .withMessage("Email is empty")
    .isEmail()
    .withMessage("Email is required"),

    check("company_address")
    .not()
    .isEmpty()
    .withMessage("Comapny Address is required"),
    
    check("company_city")
    .not()
    .isEmpty()
    .withMessage("Company City is required"),

    check("company_state")
    .not()
    .isEmpty()
    .withMessage("Company State is required"),

    check("company_zip")
    .not()
    .isEmpty()
    .withMessage("Company Zip is required"),

    check("home_address")
    .not()
    .isEmpty()
    .withMessage("Home Address is required"),

    check("home_city")
    .not()
    .isEmpty()
    .withMessage("Home City is required"),

    check("home_state")
    .not()
    .isEmpty()
    .withMessage("Home State is required"),
    
    check("home_zip")
    .not()
    .isEmpty()
    .withMessage("Home Zip is required"),


    (req:any, res:any, next:any) =>{
        validateUser(req, res, next)
    }
];

export const validateUser = (req:any, res:any, next:any) =>{
    const errors = validationResult(req);
    const err = errors.array();
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:err});
    }
    next();
};