

export const emailValidation = (email) => {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};