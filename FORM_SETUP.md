# Form Setup Guide - shadcn/ui Forms with Prisma

This guide provides step-by-step instructions for setting up shadcn/ui forms with Prisma database integration in your Next.js project.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Initialize shadcn/ui](#step-1-initialize-shadcnui)
3. [Step 2: Install Required Dependencies](#step-2-install-required-dependencies)
4. [Step 3: Add shadcn/ui Components](#step-3-add-shadcnui-components)
5. [Step 4: Install and Configure Prisma](#step-4-install-and-configure-prisma)
6. [Step 5: Set Up Database Connection](#step-5-set-up-database-connection)
7. [Step 6: Create Prisma Schema](#step-6-create-prisma-schema)
8. [Step 7: Generate Prisma Client](#step-7-generate-prisma-client)
9. [Step 8: Create Prisma Client Instance](#step-8-create-prisma-client-instance)
10. [Step 9: Create Server Action for Form Submission](#step-9-create-server-action-for-form-submission)
11. [Step 10: Create Form Component with Validation](#step-10-create-form-component-with-validation)
12. [Step 11: Integration Checklist](#step-11-integration-checklist)
13. [Step 12: Vercel Deployment & Environment Variables](#step-12-vercel-deployment--environment-variables)
14. [Testing](#testing)
15. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Next.js project set up (version 15.5.4 or later)
- Node.js and npm installed
- MongoDB account (or your preferred database)
- Basic understanding of React and TypeScript/JavaScript

---

## Step 1: Initialize shadcn/ui

First, initialize shadcn/ui in your Next.js project:

```bash
npx shadcn@latest init
```

**Configuration Options:**

- Style: `new-york`
- Base color: `neutral`
- CSS variables: `Yes`
- TypeScript: `No` (if using JavaScript) or `Yes` (if using TypeScript)

This creates a `components.json` file in your project root with shadcn/ui configuration.

---

## Step 2: Install Required Dependencies

Install all required packages for forms, validation, and database:

```bash
npm install react-hook-form zod @hookform/resolvers @prisma/client mongodb
```

**For development (Prisma CLI):**

```bash
npm install -D prisma
```

**Dependencies Explanation:**

- `react-hook-form`: Form state management
- `zod`: Schema validation
- `@hookform/resolvers`: Connects zod with react-hook-form
- `@prisma/client`: Prisma database client
- `prisma`: Prisma CLI for schema management
- `mongodb`: MongoDB driver (if using MongoDB)

---

## Step 3: Add shadcn/ui Components

Add all necessary shadcn/ui components for the form:

```bash
# Core form components
npx shadcn@latest add form
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add textarea
npx shadcn@latest add checkbox
npx shadcn@latest add separator
```

These commands will create components in `src/components/ui/` directory.

**Optional but useful:**

```bash
npx shadcn@latest add switch  # For toggle switches
```

---

## Step 4: Install and Configure Prisma

### 4.1 Install Prisma

```bash
npm install -D prisma
```

### 4.2 Initialize Prisma

```bash
npx prisma init --datasource-provider mongodb
```

**Note:** Replace `mongodb` with your database provider if using a different database (e.g., `postgresql`, `mysql`, `sqlite`).

This creates:

- `prisma/` directory with `schema.prisma` file
- `.env` file (if it doesn't exist)

---

## Step 5: Set Up Database Connection

### 5.1 Get Your Database Connection String

**For MongoDB:**

1. Go to MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
2. Create a cluster or use an existing one
3. Click "Connect" → "Connect your application"
4. Copy the connection string

**Format:**

```
mongodb+srv://username:password@cluster0.xxxx000.mongodb.net/database-name?retryWrites=true&w=majority
```

### 5.2 Add to `.env` File

Create or update your `.env` file in the project root:

```env
DATABASE_URL="mongodb+srv://username:password@cluster0.xxxx000.mongodb.net/database-name?retryWrites=true&w=majority"
```

**Important:** Replace `username`, `password`, `cluster0.xxxx000`, and `database-name` with your actual values.

---

## Step 6: Create Prisma Schema

Edit `prisma/schema.prisma` file:

```prisma
// This is your Prisma schema file
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Form {
  id            String   @id @default(auto()) @map("_id") @db.ObjectId
  name          String
  email         String
  message       String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  isConsentGiven Boolean @default(false)
  services      String[]
}
```

**Schema Explanation:**

- `id`: Unique identifier (MongoDB ObjectId)
- `name`, `email`, `message`: Form fields
- `createdAt`, `updatedAt`: Timestamps (auto-managed)
- `isConsentGiven`: Boolean for consent checkbox
- `services`: Array of strings for multiple service selections

**For SQL databases**, the schema would look like:

```prisma
model Form {
  id            String   @id @default(uuid())
  name          String
  email         String
  message       String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  isConsentGiven Boolean @default(false)
  services      String[]
}
```

---

## Step 7: Generate Prisma Client

Generate the Prisma Client based on your schema:

```bash
npx prisma generate
```

This creates the Prisma Client types and methods based on your schema.

---

## Step 8: Create Prisma Client Instance

Create `lib/prisma.js` (or `lib/prisma.ts` for TypeScript):

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

**Important Notes:**

- In development, this file prevents multiple instances of Prisma Client
- Always import and use this instance instead of creating new `PrismaClient()` instances

---

## Step 9: Create Server Action for Form Submission

Create `lib/actions/form.js` (or `lib/actions/form.ts`):

```javascript
"use server";

import prisma from "../prisma";

export const submitForm = async (data) => {
  const { name, email, message, services, isConsentGiven } = data;

  try {
    // Ensure services is an array of strings
    const servicesArray = Array.isArray(services) ? services : [];

    const result = await prisma.form.create({
      data: {
        name,
        email,
        message,
        services: servicesArray,
        isConsentGiven: isConsentGiven || false,
      },
    });

    return {
      success: true,
      message: "Form submitted successfully.",
      data: result,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Failed to submit form.",
      error: error.message,
    };
  }
};
```

**Key Points:**

- `"use server"` directive makes this a server action
- Validates and sanitizes data before saving
- Returns success/error response for client-side handling

---

## Step 10: Create Form Component with Validation

Create `src/app/components/Contact.jsx` (or your preferred location):

```javascript
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { submitForm } from "../../../lib/actions/form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

// ✅ Define validation schema with Zod
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
  services: z
    .array(
      z.enum([
        "AI Chatbot or Voice Agents",
        "Automation Workflows",
        "Performance Marketing",
        "AI Consulting",
      ])
    )
    .min(1, { message: "Select at least one service." }),
  isConsentGiven: z.boolean().optional(),
});

const SERVICES = [
  "AI Chatbot or Voice Agents",
  "Automation Workflows",
  "Performance Marketing",
  "AI Consulting",
];

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      services: [],
      isConsentGiven: false,
    },
  });

  // Handle form submission
  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await submitForm(values);

      if (response.success) {
        toast.success(response.message);
        form.reset(); // Reset form after successful submission
      } else {
        toast.error(response.message || "Failed to submit form.");
      }
    } catch (error) {
      toast.error("Failed to submit form.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        Contact Us
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 shadow-md rounded-2xl p-4 sm:p-6"
        >
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Services Checkboxes */}
          <FormItem>
            <FormLabel>Interested Services</FormLabel>
            <FormDescription>
              Select the services you're interested in.
            </FormDescription>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {SERVICES.map((service) => (
                <Controller
                  key={service}
                  name="services"
                  control={form.control}
                  render={({ field }) => {
                    const checked = field.value.includes(service);
                    return (
                      <FormItem
                        className="flex items-center space-x-2"
                        key={service}
                      >
                        <FormControl>
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(value) => {
                              if (value) {
                                field.onChange([...field.value, service]);
                              } else {
                                field.onChange(
                                  field.value.filter((s) => s !== service)
                                );
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{service}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>

          {/* Consent Toggle */}
          <FormField
            control={form.control}
            name="isConsentGiven"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Consent</FormLabel>
                  <FormDescription>
                    Yes, I agree to receive texts and emails on my contact
                    information.
                  </FormDescription>
                </div>
                <FormControl>
                  {/* Add your Switch component here */}
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
```

---

## Step 11: Integration Checklist

### ✅ Verify Package.json Scripts

Ensure your `package.json` includes Prisma generate in build script:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "prisma generate && next build --turbopack",
    "start": "next start"
  }
}
```

### ✅ Push Schema to Database

After creating your schema, push it to your database:

```bash
npx prisma db push
```

This creates the tables/collections in your database.

### ✅ Generate Prisma Client (After Schema Changes)

Whenever you modify `schema.prisma`, regenerate the client:

```bash
npx prisma generate
```

### ✅ Import Form Component

Import and use your form component in your pages:

```javascript
// In your page component (e.g., src/app/contact/page.jsx)
import ContactForm from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactForm />
    </div>
  );
}
```

---

## Step 12: Vercel Deployment & Environment Variables

Before pushing your code to GitHub and deploying to Vercel, you need to ensure your environment variables are properly configured.

### ⚠️ **CRITICAL: Secure Your Environment Variables**

**Never commit your `.env` file to GitHub!** It contains sensitive information like database credentials.

### 12.1 Verify `.gitignore` Configuration

Ensure your `.gitignore` file includes environment variables:

```gitignore
# Environment variables - NEVER COMMIT THESE
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env*.local

# Other important ignores
node_modules/
.next/
.vercel/
/generated/prisma
```

**Verify your `.gitignore` includes:**

```bash
# Check if .env files are ignored
cat .gitignore | grep .env
```

### 12.2 Create `.env.example` Template

Create a `.env.example` file in your project root as a template (this file CAN be committed to GitHub):

```env
# Database Connection
DATABASE_URL="mongodb+srv://username:password@cluster0.xxxx000.mongodb.net/database-name?retryWrites=true&w=majority"

# Add other environment variables here
# NEXT_PUBLIC_API_URL="https://api.example.com"
```

**Important:**

- Remove all actual credentials from `.env.example`
- Use placeholder values
- Add comments explaining what each variable is for

### 12.3 Local Environment Variables Setup

Your local `.env` file should look like this:

```env
# Database Connection (DO NOT COMMIT THIS FILE)
DATABASE_URL="mongodb+srv://your-actual-username:your-actual-password@cluster0.xxxx000.mongodb.net/your-database?retryWrites=true&w=majority"
```

**Before committing to GitHub:**

1. ✅ Verify `.env` is in `.gitignore`
2. ✅ Create `.env.example` with placeholder values
3. ✅ Double-check that `.env` is not staged for commit:

```bash
# Check git status before committing
git status

# If .env appears, remove it:
git restore --staged .env
```

### 12.4 Push to GitHub

After verifying your `.env` is properly ignored:

```bash
# Stage your changes (excluding .env)
git add .

# Verify .env is NOT in the staging area
git status

# Commit your changes
git commit -m "Add form setup with Prisma and shadcn/ui"

# Push to GitHub
git push origin main
```

### 12.5 Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**

   - Visit https://vercel.com/dashboard
   - Sign in with your GitHub account

2. **Import Your Project**

   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository you just pushed

3. **Configure Project Settings**

   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (or leave default)
   - **Build Command:** `prisma generate && next build` (important!)
   - **Output Directory:** `.next`

4. **Add Environment Variables**

   - In the "Environment Variables" section, add:

   | Name           | Value                          | Environment                      |
   | -------------- | ------------------------------ | -------------------------------- |
   | `DATABASE_URL` | Your MongoDB connection string | Production, Preview, Development |

   **Important Steps:**

   - Click "Add" next to Environment Variables
   - Enter `DATABASE_URL` as the key
   - Paste your actual MongoDB connection string as the value
   - Select all environments (Production, Preview, Development)
   - Click "Save"

5. **Deploy**
   - Click "Deploy" button
   - Wait for build to complete

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account/team)
# - Link to existing project? No (first time) or Yes (if redeploying)
# - Project name? (Enter your project name)
# - Directory? ./ (or leave default)
```

**After deployment, set environment variables:**

```bash
# Add environment variable via CLI
vercel env add DATABASE_URL production

# Paste your connection string when prompted
# Repeat for preview and development:
vercel env add DATABASE_URL preview
vercel env add DATABASE_URL development
```

### 12.6 Verify Environment Variables in Vercel

After deployment:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Verify `DATABASE_URL` is listed for all environments
4. **Important:** The values are masked for security (you'll see `***`)

### 12.7 Update Vercel Build Settings (if needed)

If your build fails, verify build settings:

1. Go to **Settings** → **General**
2. Under **Build & Development Settings**, ensure:
   - **Build Command:** `prisma generate && next build`
   - **Install Command:** `npm install` (default)

### 12.8 Post-Deployment Checklist

After deploying to Vercel:

- [ ] ✅ Environment variables added to Vercel dashboard
- [ ] ✅ Build completes successfully
- [ ] ✅ Application loads without errors
- [ ] ✅ Form submission works (test it!)
- [ ] ✅ Database connection is successful
- [ ] ✅ Data is being saved to database

### 12.9 Environment Variables Best Practices

#### ✅ **DO:**

- ✅ Keep `.env` in `.gitignore`
- ✅ Use `.env.example` as a template
- ✅ Add environment variables in Vercel dashboard before deployment
- ✅ Use different databases for development and production
- ✅ Rotate credentials periodically
- ✅ Use Vercel's environment variable management for secrets

#### ❌ **DON'T:**

- ❌ Never commit `.env` files
- ❌ Never hardcode credentials in code
- ❌ Never share `.env` files via email/chat
- ❌ Never use production credentials in development
- ❌ Never expose environment variables in client-side code (unless using `NEXT_PUBLIC_` prefix)

### 12.10 Troubleshooting Vercel Deployment

#### Issue: "DATABASE_URL is not defined"

**Solution:**

- Verify environment variable is added in Vercel dashboard
- Ensure variable name matches exactly: `DATABASE_URL`
- Check that it's enabled for the correct environment (Production/Preview/Development)
- Redeploy after adding environment variables

#### Issue: "Prisma Client not generated"

**Solution:**

- Update build command to: `prisma generate && next build`
- Ensure Prisma is in `devDependencies` in `package.json`
- Check build logs for Prisma generation errors

#### Issue: "Database connection failed"

**Solution:**

- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs) or Vercel IPs
- Check connection string format in Vercel environment variables
- Verify database credentials are correct
- Check MongoDB Atlas network access settings

#### Issue: "Environment variable not updating"

**Solution:**

- After adding/changing environment variables in Vercel, you MUST redeploy
- Go to **Deployments** → Click **⋯** on latest deployment → **Redeploy**
- Or trigger a new deployment by pushing a commit

### 12.11 Security Checklist Before GitHub Push

Before pushing code to GitHub, verify:

```bash
# 1. Check what will be committed
git status

# 2. Verify .env is NOT tracked
git ls-files | grep .env

# Should return nothing, or only .env.example

# 3. Check .gitignore includes .env
cat .gitignore | grep -E "\.env"

# Should show .env files are ignored

# 4. If .env was previously committed, remove it from history:
git rm --cached .env
git commit -m "Remove .env from tracking"
```

### 12.12 Quick Reference: Environment Variable Setup

**Local Development:**

```bash
# Create .env file (NOT committed)
echo 'DATABASE_URL="your-local-connection-string"' > .env
```

**GitHub:**

```bash
# Only commit .env.example
git add .env.example
git commit -m "Add environment variable template"
```

**Vercel:**

1. Dashboard → Project → Settings → Environment Variables
2. Add `DATABASE_URL` with production connection string
3. Enable for Production, Preview, and Development
4. Redeploy

---

## Testing

### Test Form Submission

1. Fill out the form with valid data
2. Submit the form
3. Check for success toast notification
4. Verify data in database (using Prisma Studio)

### View Data in Prisma Studio

```bash
npx prisma studio
```

This opens a browser interface to view and manage your database records.

### Test Validation

1. Try submitting empty form (should show validation errors)
2. Enter invalid email (should show email error)
3. Submit without selecting services (should show service selection error)
4. Enter name less than 3 characters (should show name error)

---

## Troubleshooting

### Issue: "Module not found: Can't resolve '@prisma/client'"

**Solution:**

```bash
npx prisma generate
```

### Issue: "Invalid DATABASE_URL"

**Solution:**

- Check `.env` file has correct `DATABASE_URL`
- Verify connection string format
- Ensure database credentials are correct
- For MongoDB Atlas, whitelist your IP address

### Issue: "Form validation not working"

**Solution:**

- Ensure `zodResolver` is properly imported
- Check that `formSchema` matches form field names
- Verify `resolver: zodResolver(formSchema)` is in `useForm` hook

### Issue: "Server action not found"

**Solution:**

- Ensure `"use server"` directive is at the top of server action file
- Check file path is correct in import statement
- Verify the function is exported

### Issue: "Prisma Client not generating"

**Solution:**

```bash
# Regenerate Prisma Client
npx prisma generate

# If schema has errors, check prisma/schema.prisma syntax
# Then push changes:
npx prisma db push
```

### Issue: "Cannot read property 'create' of undefined"

**Solution:**

- Ensure Prisma Client is properly initialized in `lib/prisma.js`
- Check that `prisma` is imported correctly in server action
- Run `npx prisma generate` after schema changes

---

## Additional Resources

- [shadcn/ui Forms Documentation](https://ui.shadcn.com/docs/components/form)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma MongoDB Guide](https://www.prisma.io/docs/concepts/database-connectors/mongodb)

---

## Summary

You've successfully set up:

1. ✅ shadcn/ui form components
2. ✅ React Hook Form for form state management
3. ✅ Zod for form validation
4. ✅ Prisma for database operations
5. ✅ Server actions for form submission
6. ✅ Complete form component with all fields
7. ✅ Error handling and user feedback

Your form is now ready to collect and store user data in your database!

---

**Last Updated:** 2025
**Project:** Astrix Digital Media
