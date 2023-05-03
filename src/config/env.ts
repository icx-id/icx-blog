import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const urlRegex =
  /^(http(s)?:\/\/)?((localhost)|(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}))(:(\d+))?(\/.*)?$/;

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'GATSBY_',
  server: {},
  client: {
    GATSBY_API_URL: z.string().min(1).regex(urlRegex, 'The given string is not a URL'),
    GATSBY_SHOW_COMING_SOON: z
      .string()
      .refine(s => s === 'true' || s === 'false')
      .transform(s => s === 'true'),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnvStrict: {
    GATSBY_API_URL: process.env.GATSBY_API_URL,
    GATSBY_SHOW_COMING_SOON: process.env.GATSBY_SHOW_COMING_SOON,
  },
});
