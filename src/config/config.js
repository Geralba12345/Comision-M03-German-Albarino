import dotenv from "dotenv";

dotenv.config();

export const settingDotEnvPort = () => {
    return {port: process.env.PORT}
};

export const settingDotEnvDb = () => {
  return{
    db: {
        host: process.env.DB_HOST,
        localhost: process.env.DB_LOCALHOST,
    },
  };
};

export const settingSecretToken = () => {
    return {secret: process.env.SECRET};
};