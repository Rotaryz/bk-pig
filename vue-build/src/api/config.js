const env = process.env

const DEV_URL = {}

const TEST_URL = {}

const PROD_URL = {}

export const BASE_URL = env.NODE_ENV === 'production' ? PROD_URL : env.NODE_ENV === 'test' ? TEST_URL : DEV_URL

export const ERR_OK = 0
