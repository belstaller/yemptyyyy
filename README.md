# Chat Full Test

This project is a boilerplate for a full-stack application using Python, PostgreSQL, and Next.js structured with a Clean Architecture.

## Project Structure

- **Domain Layer:** Contains all business logic independent of any external infrastructure.
- **Application Layer:** Handles application operations and coordinates flow between domain and infrastructure.
- **Infrastructure Layer:** Deals with all I/O operations such as database interactions, API communications.
- **Interfaces Layer:** Entry points and interactions with external systems (HTTP controllers, CLI).

## Setup Instructions

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```
2. **Run the Next.js development server:**
   ```bash
   npm run dev
   ```
3. **Other Setup (Python & DB):**
   - Ensure PostgreSQL is running and accessible.
   - Further instructions would depend on the specific Python setup.

## Clean Architecture
The project maintains a strict separation of concerns through its layered architecture. **Dependencies should only point inward**, adhering to the following rules:

- **Domain:** No external dependencies, core business logic.
- **Application:** Uses domain, does not interact directly with infrastructure.
- **Infrastructure:** Implements interfaces defined by application/domain.
- **Interfaces:** Warms up and executes use cases.