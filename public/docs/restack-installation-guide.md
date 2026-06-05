# Restack Installation Guide

Restack uses two repositories:

- Web application: https://github.com/aVerySmallSoap/Restack_webapp.git
- API service: https://github.com/aVerySmallSoap/restack_api_rewrite.git

## Requirements

Install these before running the system:

- Git
- PHP 8.2+
- Composer
- Node.js and npm
- Python 3.11+ recommended
- PostgreSQL
- Redis
- Docker or Podman, required by the scanning API workflow

## 1. Clone both repositories

```bash
git clone https://github.com/aVerySmallSoap/Restack_webapp.git
git clone https://github.com/aVerySmallSoap/restack_api_rewrite.git
```

## 2. Set up the API service

```bash
cd restack_api_rewrite
python -m venv .venv
```

Activate the virtual environment:

Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Git Bash / macOS / Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create the API environment file:

```bash
cp .sample.env .env
```

Update `.env` with your own values:

```env
GEMINI_API_KEY=your_key_here
ZAP_TEMPLATES=zap_volume
ZAP_API_KEY=your_zap_key
DB=your_database
DB_USER=your_user
DB_PASSWORD=your_password
DB_PORT=5432
```

Run the API service:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 25565
```

## 3. Set up the web application

Open a new terminal:

```bash
cd Restack_webapp
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Update the web app `.env` database and API values:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database
DB_USERNAME=your_user
DB_PASSWORD=your_password

API_BASE_URL=http://127.0.0.1:25565
RESTACK_API_URL=http://127.0.0.1:25565
RESTACK_API_TIMEOUT=60
RESTACK_API_INTERNAL_KEY=dev-internal-key-change-in-prod
VITE_API_BASE_URL=http://127.0.0.1:25565
VITE_API_SOCKET=ws://127.0.0.1:25565
```

Run migrations:

```bash
php artisan migrate
```

Start the Laravel + Vite development server:

```bash
composer run dev
```

If you prefer separate terminals:

```bash
php artisan serve
npm run dev
```

## 4. Open the system

Open the Laravel app in your browser:

```text
http://127.0.0.1:8000
```

The API should be running at:

```text
http://127.0.0.1:25565
```

## Notes

- The API uses FastAPI and scanner-related dependencies.
- The web app is a Laravel 12, Vue, Inertia, and Vite application.
- PostgreSQL, Redis, and Docker/Podman are required for the full scanning workflow.
- If scan execution fails, check whether Docker/Podman is running and whether the API `.env` values are correct.
