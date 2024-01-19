import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(5, { message: "Name is Required" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password is Required at least 6 character" }),
});

export type TSchema = z.infer<typeof SignUpSchema>;
