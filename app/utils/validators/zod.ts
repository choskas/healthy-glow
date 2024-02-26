import { ZodError, ZodSchema } from "zod";

export const validateAction = async (request: Request, schema: ZodSchema) => {
    const body = Object.fromEntries( await request.formData())

    try {
    const formData = schema.parse(body)
    return {
        formData,
        errors: null
    }
    } catch (e) {
        const errors = e as ZodError
        return {formData: body, errors: errors.issues.reduce((acc, curr) => {
            const key = curr.path[0]
            // @ts-ignore
            acc[key] = curr.message
            return acc
        }, {})}
    }

}