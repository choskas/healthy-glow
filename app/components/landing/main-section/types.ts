import { z } from "zod"
import { registerFormSchema } from "~/utils/forms-schemas/landing"

export type RegisterActionData = {
    errors?: z.infer<typeof registerFormSchema>
}