# happyvalley-menu
Online menu for Happy Valley Seafood Restaurant

# Build Instructions
## Prerequisites

Before running the application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (minimum version 20.10.0 recommended)
- [Docker Compose](https://docs.docker.com/compose/install/) (minimum version 2.0.0 recommended)

---

## Usage Instructions

### 1. Install Docker Compose
If you don't already have Docker Compose installed, follow the [official installation guide](https://docs.docker.com/compose/install/).

### 2. Start the Application

#### **Option 1: Run in the foreground**
Use the following command to start the application:
```bash
docker-compose up
```

#### **Option 2: Run in the background**
To run the application in detached mode (background), use the following command:
```bash
docker-compose up -d
```

### 3. Stop the Application
To stop and remove the containers created by Docker Compose, use:
```bash
docker-compose down
```
This command stops the running containers and cleans up associated resources, like networks defined in the `docker-compose.yml`.

### 4. Prune Containers Without Volumes
To remove all stopped containers, unused networks, and dangling images (excluding volumes), run:
```bash
docker system prune
```
This ensures that unused resources are cleaned up without affecting data stored in volumes.

---
