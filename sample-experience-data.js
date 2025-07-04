// This is a sample script to add experience data to your Sanity project
// Run this in your Sanity CLI or add data manually through the studio

const experienceData = {
    _type: 'experience',
    title: 'Trainee',
    subtitle: 'Mecgale Pneumatics',
    date: 'June 2023 - August 2023',
    description: 'Understanding the basic working principles of a thermal power plant, including power generation, control systems, and the role of electronics in various plant operations. Assisting in the maintenance and troubleshooting of electronic control systems, sensors, and instrumentation used for monitoring plant operations such as temperature, pressure, and flow control.',
    tech: 'Thermal Power Plant Operations, Electronic Control Systems, Instrumentation, Sensors, Calibration, Protection Systems, Relays, Circuit Breakers',
    order: 1
}

// To add this data:
// 1. Go to http://localhost:3000/studio
// 2. Sign in with your Sanity account
// 3. Click "Create new document"
// 4. Select "Experience"
// 5. Fill in the form with the data above
// 6. Click "Publish"

export default experienceData;
