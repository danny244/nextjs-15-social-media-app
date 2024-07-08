"use server"

import { auth } from "@clerk/nextjs/server";
import { object, z } from "zod";
import prisma from "../client";

export const updateProfile = async (prevState: {success: boolean; error: boolean}, payload: {formData: FormData, cover: string}) => {

      const { cover, formData } = payload;

      try {
            const fields = Object.fromEntries(formData);

            // Filtering out the fiels that are empty so that they dont update our already non empty fields in our database
            const filteredFields = Object.fromEntries(
                  Object.entries(fields).filter(([_, value]) => {
                        return value !== ""
                  })
            )

            // Zod schema validations
            const Profile = z.object({
                  cover: z.string().optional(),
                  name: z.string().max(60).optional(),
                  surname: z.string().max(60).optional(),
                  description: z.string().max(255).optional(),
                  city: z.string().max(60).optional(),
                  school: z.string().max(60).optional(),
                  work: z.string().max(60).optional(),
                  website: z.string().max(60).optional(),
            })

            const validateFields = Profile.safeParse({cover, ...filteredFields})

            if (!validateFields.success) {
                  console.error(validateFields.error.flatten().fieldErrors);
                  return {success: false, error: true}
            }


            const { userId } = auth();

            if (!userId) {
                  console.error('User id is not found');
                  return {success: false, error: true}

            }


            await prisma.user.update({
                  where: {
                        id: userId
                  },

                  data: validateFields.data
            })

            return {success: true, error: false}

      } catch (error) {
            console.error('Error from [actions.update_profile.ts] an error user profile refusing to update ', error);
            return {success: false, error: true}
            // throw new Error("Something went wrong");
            
      }
}