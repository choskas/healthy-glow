import { z } from "zod"
import { registerFormSchema } from "~/utils/forms-schemas/landing"

export type RegisteredUserT = z.infer<typeof registerFormSchema>

export type RegisterActionData = {
    errors?: RegisteredUserT
}