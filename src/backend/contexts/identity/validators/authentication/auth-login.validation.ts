import * as z from "zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const validateLogin = async (data: z.infer<typeof LoginSchema>) => LoginSchema.parseAsync(data);
