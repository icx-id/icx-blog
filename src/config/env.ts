import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const urlRegex: RegExp =
  /^(http(s)?\:\/\/)?(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/.*)?$/;

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: 'GATSBY_',
  server: {},
  client: {
    GATSBY_API_URL: z.string().min(1).regex(urlRegex),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnvStrict: {
    GATSBY_API_URL: process.env.GATSBY_API_URL,
  },
});
