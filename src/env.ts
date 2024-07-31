import { z } from 'zod';

export const env = z.object({
  // server
  PORT: z.coerce.number().optional().default(5173),

  // client
  VITE_APP_TITLE: z.string().optional().default('Learning Design Engineering'),
});

type Environment = Readonly<z.infer<typeof env>>;

export type ClientEnvironment = {
  readonly [K in Extract<keyof Environment, `VITE_${string}`>]: Environment[K];
};
