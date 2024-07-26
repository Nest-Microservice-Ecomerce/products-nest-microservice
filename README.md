# Instalaciones adicionales

## Validar DTO de entrada

```
yarn add class-validator class-transformer
```

```

main.ts

app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    }),
  );
```

```
import { Type } from 'class-transformer';
import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(0)
  @Type(() => Number)
  public price: number;
}

```

## Environments

```
yarn add dotenv joi
```

config

```
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
};

```

## BD

```
yarn add prisma -D
```

```
npx prisma init
```

```
npx prisma migrate dev --name init
```

```
yarn add @prisma/client
```

# Microservice

```
 yarn add -D @nestjs/microservices
```
