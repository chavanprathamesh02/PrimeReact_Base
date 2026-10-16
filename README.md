# React + TypeScript + Vite

This project provides a React + TypeScript application built with Vite.

## Development

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Environment Configuration

The project uses Vite environment files for different environments.

### Local Environment

The local environment uses:

```text
.env
```

Example:

```env
VITE_APP_NAME=SPNI.BONE.EnggShiftSchedule
VITE_API_BASE_URL=https://localhost:7001/api
VITE_APP_ENV=local
```

### Production Environment

The production environment uses:

```text
.env.prod
```

Example:

```env
VITE_APP_NAME=SPNI.BONE.EnggShiftSchedule
VITE_API_BASE_URL=https://your-production-api/api
VITE_APP_ENV=production
```

> **Important:** Only environment variables prefixed with `VITE_` are exposed to the frontend application.
>
> Do not store secrets, passwords, JWT secrets, private keys, or other sensitive information in frontend environment files.

## Production Build

To create the production build, run:

```bash
npm run build:prod
```

This command executes:

```bash
tsc -b && vite build --mode prod
```

The `prod` mode tells Vite to load:

```text
.env.prod
```

The optimized production files will be generated in:

```text
dist/
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This allows you to verify the generated production build before deploying it to the production server.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create the standard Vite production build |
| `npm run build:prod` | Create the production build using `.env.prod` |
| `npm run preview` | Preview the generated production build |
| `npm run lint` | Run ESLint |

## Build and Deployment Flow

### Local Development

```text
.env
  ↓
npm run dev
  ↓
Vite Development Server
  ↓
http://localhost:5173
```

### Production

```text
.env.prod
  ↓
npm run build:prod
  ↓
TypeScript Build
  ↓
Vite Production Build
  ↓
dist/
  ↓
Deploy to Production Server
```

## Production Deployment

After running:

```bash
npm run build:prod
```

the `dist/` directory will contain the files required for deployment.

Example:

```text
dist/
├── assets/
├── index.html
└── ...
```

Deploy the contents of the `dist/` directory to the configured production web server.

### IIS Deployment

For IIS deployment:

1. Run the production build:

   ```bash
   npm run build:prod
   ```

2. Copy the contents of the `dist/` folder to the IIS application directory.

3. Configure IIS to serve the application.

4. If React Router is used, configure IIS URL Rewrite so that application routes are redirected to `index.html`.

## React Compiler

The React Compiler is enabled in this project.

For more information, see:

https://react.dev/learn/react-compiler

## ESLint

ESLint is configured for code quality and consistency.

Run ESLint using:

```bash
npm run lint
```

For production applications, type-aware ESLint rules can be enabled using the TypeScript ESLint configuration.

React-specific ESLint rules can also be added using:

- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`
