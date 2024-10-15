"use server";
import { profileSchema } from "./schemas";
export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedField = profileSchema.parse(rawData);
    console.log(validatedField);
    return { message: "profile created" };
  } catch (error) {
    console.log(error);
    return { message: "there was un error" };
  }
};
