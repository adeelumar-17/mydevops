# mydevops

A hands-on DevOps starter kit for Node.js applications, demonstrating how to automate, containerize, and deploy apps to your local server using best practices and popular tools like Docker, Ansible, and GitHub Actions.

---

## Features

- **Dockerized Node.js app**: Easily containerize your application for consistent local or production environments.
- **.env support**: Manage configuration and secrets using environment variables.
- **Ansible automation**: Provision and configure your server with repeatable infrastructure-as-code.
- **GitHub Actions**: Pre-built CI/CD pipeline for testing and deployment (add your own workflows as needed).
- **Extensible**: Use as a template for any Node.js project.

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your local machine/server
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (for local testing)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) (for automated server setup)
- (Optional) [GitHub Actions](https://github.com/features/actions) for CI/CD

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adeelumar-17/mydevops.git
cd mydevops/app
```

### 2. Prepare Your Application

- Replace the contents of `/app` with your own Node.js (Express) application code, or use the provided sample as a starting point.

### 3. Set Up Environment Variables

- Create a `.env` file inside the `/app` directory:

```env
PORT=3000
# Add your app-specific environment variables here
```

> **Note:** Never commit your `.env` file to a public repository.

### 4. Build and Run with Docker

```bash
docker build -t mydevops-app .
docker run -p 3000:3000 --env-file .env mydevops-app
```

- Your app should now be accessible at `http://localhost:3000`.

### 5. Automate Server Setup with Ansible (Optional)

- Edit `/ansible/inventory.ini` to add your local server/domain.
- Use the provided Ansible playbooks or create your own to automate:
  - Installing Docker
  - Deploying the Docker container
  - Managing environment variables

Example command:

```bash
ansible-playbook -i ansible/inventory.ini ansible/playbook.yml
```

### 6. CI/CD with GitHub Actions (Optional)

- Add your workflow files in `.github/workflows/` to automate testing, building, and deployment on push.

---

## Directory Structure

```
mydevops/
├── app/              # Node.js application code
│   ├── Dockerfile
│   ├── app.js
│   └── .env          # (not committed)
├── ansible/          # Ansible inventory and playbooks
│   └── inventory.ini
└── .github/
    └── workflows/    # (Add your CI/CD workflows here)
```

---

## Security Notes

- Do not commit sensitive information (domains, credentials) to the repository.
- Use environment variables for secrets and configuration.
- If you have accidentally committed secrets, remove them from git history.

---

## Extending

- Replace `/app` with any Node.js app (supports Express by default).
- Modify or extend Ansible playbooks for more advanced automation.
- Add additional workflows to `.github/workflows/` as needed.
