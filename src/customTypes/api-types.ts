export type methods = 'GET'| 'POST';
//type responseCodeType = 200 | 201 | 400 | 404 | 429 | 500;
export interface ApiInterface {
    url: string,
    method: methods,
    body: {
        email?: '',
        password?: '',
        confirmPassword?: '',
        code?: ''
    },
    responseCodes: Record<number | string, [string, string]>,
    additionalCondition?: Record<number, [string, string, string]>
}
