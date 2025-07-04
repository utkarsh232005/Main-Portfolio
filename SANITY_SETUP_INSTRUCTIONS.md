# 🎯 Next Steps to Set Up Your Sanity Experience Data

## ✅ What I've Done:

1. **Created Sanity Studio Configuration**
   - Added `sanity.config.ts` with your project setup
   - Created schema files for `experience` and `project`
   - Added studio access at `/studio` route

2. **Updated Your Components**
   - Modified `timeline.tsx` to show fallback data when Sanity is empty
   - Added error handling to the home page
   - Your Mecgale Pneumatics experience is already showing as fallback

3. **Added Dependencies**
   - Installed `sanity` and `@sanity/vision` packages
   - Added `npm run studio` script to package.json

## 🚀 What You Need to Do:

### Step 1: Start the Development Server
```bash
npm run dev
```

### Step 2: Access Sanity Studio
1. Go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Sign in with your Sanity account (the one associated with your project ID)
3. You should see the studio interface

### Step 3: Add Your Experience Data
1. Click "Create new document"
2. Select "Experience"
3. Fill in the form:
   - **Title**: "Trainee"
   - **Company Name**: "Mecgale Pneumatics"
   - **Date Range**: "June 2023 - August 2023"
   - **Description**: "Understanding the basic working principles of a thermal power plant, including power generation, control systems, and the role of electronics in various plant operations. Assisting in the maintenance and troubleshooting of electronic control systems, sensors, and instrumentation used for monitoring plant operations such as temperature, pressure, and flow control."
   - **Skills**: "Thermal Power Plant Operations, Electronic Control Systems, Instrumentation, Sensors, Calibration, Protection Systems, Relays, Circuit Breakers"
   - **Order**: 1
4. Click "Publish"

### Step 4: Verify It's Working
1. Go back to [http://localhost:3000](http://localhost:3000)
2. Scroll to the "Where I've Worked" section
3. You should see your experience data from Sanity instead of the fallback

## 🔧 Troubleshooting:

### If Studio Doesn't Load:
- Check that your environment variables are set correctly in `.env.local`
- Make sure you're using the correct project ID from your Sanity dashboard

### If You Can't Sign In:
- Make sure you're using the same Google/GitHub account associated with your Sanity project
- Check that your project ID is correct

### If Data Doesn't Show:
- Make sure you clicked "Publish" in the studio
- Check the browser console for any errors
- The fallback data should still show if Sanity isn't working

## 📝 Adding More Experiences:

To add more work experiences:
1. Go to the studio again
2. Create new "Experience" documents
3. Use Order field to control the sequence (1 = first, 2 = second, etc.)

## 🎨 Next Steps:
- Add project data through the studio
- Customize the schema fields if needed
- Add more content types as your portfolio grows

Your experience timeline should now be fully functional with both Sanity CMS and fallback data! 🎉
