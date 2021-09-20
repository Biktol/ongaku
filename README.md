<div align="center">
  <img src="https://i.imgur.com/lCYaVxX.png" alt="Logo" />
</div>

## Setup

This assumes that you're in the directory that's `highlighted`.

### Frontend (`web`)

Run:

- `yarn` or `yarn install`
- `cp .env.example .env`
- `yarn dev`

Ready to go.

---

### 

### Backend

For `node-api`

Run:

- `cp .env.example .env`
- Fill the env vars:

```
DATABASE_URL="postgresql://username:secretpassword@localhost:5433/ongaku"

JWT_SECRET="Secret"
JWT_EXPIRY_TIME="90d"

COOKIE_SECRET="Cookie secret"
```

- Create the database by using pgAdmin or the shell.
- `yarn` or `yarn install`
- `npx prisma migrate dev --name init`

Regarding prisma, some extra scripts are available:

- To apply migrations: `npx prisma migrate dev`
- For further migrations: `npx prisma migrate dev --name <change-made>`
- To reset the database: `npx prisma migrate reset`

If a new model needs to be added then create it under `/prisma/schemas` and
run the `updateSchemas.sh` script:

- `./updateSchemas.sh`

In order for the script to work there needs to be a `/prisma/schemas` directory
and a `/prisma/base.prisma`, both are already on the repository so don't delete
them.

If there's a problem with the script then you can still do it manually, adding the models
on `/prisma/schema.prisma`.
