# Registration System Web App

The registration system for the PAP Conference.

## Local Development

### Environment variables
The following environment variables are needed:
1. `DB_URL` - specifies the URL of the database to connect to (see `docker-compose.db.yml` for local database credentials)
2. `BETTER_AUTH_SECRET` - used to encrypt and generate hashes
3. `BETTER_AUTH_URL` - base URL of the app

### Getting the app to run

First, clone the repository

```bash
git clone https://github.com/PAPCon-Registration-System/web-app.git
```

Then, install the dependencies


```bash
pnpm install
```

Finally, run the application in dev mode

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setting up the local database

To start with the local database, run the following script

```bash
pnpm run db:up
```

To push schema changes, run

```bash
pnpm run db:push
```

To view the database, run

```bash
pnpm run db:studio
```

To stop the database, run

```bash
pnpm run db:down
```

> [!important]
> When experimenting with schema changes, **do not generate migrations**. Just push the changes directly to the local database. The migration generation. To sync your local database schema with the schema of prod, just pull from main and push the schema changes to your db.

