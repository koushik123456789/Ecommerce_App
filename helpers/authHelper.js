// import bcrypt from "bcrypt"

// export const hashPassword = async (password) => {
//     try {
//         const saltRounds = 10;
//         const hashPassword2 = await bcrypt.hash(password, saltRounds)
//         return hashPassword2;
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const comparePassword = async (password, hashPassword2) => bcrypt.compare(password, hashPassword2);



import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
