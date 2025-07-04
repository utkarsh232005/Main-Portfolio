# Portfolio Setup Instructions

## Sanity Configuration

This portfolio uses Sanity as a headless CMS. To get the project running, you need to configure your Sanity project credentials.

### Steps to configure Sanity:

1. **Copy the environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Get your Sanity project credentials:**
   - Go to [Sanity Management Dashboard](https://sanity.io/manage)
   - Select your project or create a new one
   - Copy the following values:
     - **Project ID**: Found in the project overview page
     - **Dataset**: Usually "production" (shown in the Datasets section)
     - **API Version**: Use a date format like "2024-01-01" or "2023-12-01"
       - This is not found in the dashboard - it's a date you choose
       - Use the current date or a recent date in YYYY-MM-DD format
       - It represents which version of Sanity's API you want to use
       - For new projects, use "2024-01-01" or today's date

3. **Update .env.local with your actual values:**
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

4. **Install dependencies and run the project:**
   ```bash
   npm install
   npm run dev
   ```

5. **Access Sanity Studio:**
   - Go to [http://localhost:3000/studio](http://localhost:3000/studio) in your browser
   - Sign in with your Sanity account
   - Start adding your experience and project data

6. **Add your first experience:**
   - In the studio, click "Create new document"
   - Select "Experience"
   - Fill in the details:
     - Title: "Trainee"
     - Company Name: "Mecgale Pneumatics"
     - Date Range: "June 2023 - August 2023"
     - Description: Your experience description
     - Skills: "Thermal Power Plant Operations, Electronic Control Systems, Instrumentation"
     - Order: 1
   - Click "Publish"

### Note:
- The `.env.local` file is gitignored and won't be committed to version control
- Make sure to never commit your actual Sanity credentials to version control
- If you need write permissions to Sanity, uncomment and set the `SANITY_API_R_W_TOKEN` in your `.env.local`

### Troubleshooting:
- If you get a "Missing required environment variable" error, double-check that your `.env.local` file has the correct values
- Make sure your Sanity project has the required content types: `experience` and `project`
- Verify that your dataset name matches what you have in Sanity Studio
