export const inputsFieldsData = [
    {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Please enter a valid email address",
        required: true,
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
    },
];
