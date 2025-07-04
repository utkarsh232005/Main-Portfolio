interface ContentMap {
  [key: string]: JSX.Element;
}

const AllContent: ContentMap = {
  "1": <AnnualCollegeReport />,
  "2": <GitHubRepoAnalyzer />,
  "3": <BloodConnectUS />,
  "4": <RBUAlumniPortal />,
  // "5": <SensorlifelineContent />,
};

export default AllContent;

function GitHubRepoAnalyzer() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p>
        An interactive tool that provides in-depth analysis of GitHub repositories. Users can explore contributor statistics, code frequency, commit history, and repository insights using data visualization. Built with Next.js and leveraging the GitHub API to fetch and process repository data in real-time.
      </p>
      <br />
      <div>
        Features:
        <ul>
          <li className="list-disc list-inside">In-depth repository analysis</li>
          <li className="list-disc list-inside">Contributor statistics</li>
          <li className="list-disc list-inside">Code frequency insights</li>
          <li className="list-disc list-inside">Commit history exploration</li>
          <li className="list-disc list-inside">Repository insights visualization</li>
          <li className="list-disc list-inside">Real-time data fetching with GitHub API</li>
        </ul>
      </div>
    </div>
  );
}
function BloodConnectUS() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p>
        A comprehensive platform connecting blood donors with those in need. The application features real-time blood availability, donor registration, request management, and location-based donor matching. Built with a modern tech stack combining Next.js frontend for optimal performance and Spring Boot backend for robust API services.
      </p>
      <br />
      <div>
        Features:
        <ul>
          <li className="list-disc list-inside">Real-time blood availability tracking</li>
          <li className="list-disc list-inside">Donor registration and profile management</li>
          <li className="list-disc list-inside">Request management for blood seekers</li>
          <li className="list-disc list-inside">Location-based donor matching</li>
          <li className="list-disc list-inside">Admin panel and REST API for management</li>
          <li className="list-disc list-inside">Built with Next.js for efficient performance</li>
          <li className="list-disc list-inside">Spring Boot for robust backend services</li>
        </ul>
      </div>
    </div>
  );
}
// function SensorlifelineContent() {
//   return (
//     <div className="flex flex-col gap-4 items-start">
//       <p>
//         Sensor Lifeline Backend is a powerful backend project designed for the Sensor Lifeline
//         device. This device enables the reading of a patient{"'"}s vital signs such as ECG,
//         temperature, blood pressure, blood group, and more, without the need for a doctor. It
//         provides a lifeline for individuals who may not have access to immediate medical assistance.
//       </p>
//       <br />
//       <div>
//         Features:
//         <ul>
//           <li className="list-disc list-inside">Sequelize dynamic models</li>
//           <li className="list-disc list-inside">Apollo GraphQL Server</li>
//           <li className="list-disc list-inside">JWT authentication</li>
//           <li className="list-disc list-inside">Authorization using graphql-shields</li>
//           <li className="list-disc list-inside">Extensive TypeScript support</li>
//           <li className="list-disc list-inside">Docker for easier installation</li>
//           <li className="list-disc list-inside">Image Uploads</li>
//           <li className="list-disc list-inside">Testing with Jest</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
function RBUAlumniPortal() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p>
        An alumni networking platform for Rabindra Bharati University graduates. The portal facilitates alumni connections, event announcements, job opportunities sharing, and successful graduate stories. Implemented using React with Firebase providing real-time database capabilities, authentication, and cloud storage for media.
      </p>
      <br />
      <div>
        Features:
        <ul>
          <li className="list-disc list-inside">Alumni can send Job alerts to their juniors</li>
          <li className="list-disc list-inside">Event announcements and successful graduate stories</li>
          <li className="list-disc list-inside">
            Alumni can share their own success stories and experiences
          </li>
          <li className="list-disc list-inside">Cloud-based backend powered by Firebase</li>
          <li className="list-disc list-inside">
            Styling using styled-components, a React library
          </li>
        </ul>
      </div>
    </div>
  );
}

function AnnualCollegeReport() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <p>
        A digital platform for generating and presenting comprehensive annual college reports. Features include department-wise statistics, faculty achievements, student performance analytics, and event documentation. The application uses Next.js for the frontend with Firebase providing backend services including authentication, database, and storage.
      </p>
      <br />
      <div>
        Features:
        <ul>
          <li className="list-disc list-inside">
            A quick access to create a. structured documentation of annual department growth
          </li>
          <li className="list-disc list-inside">Department-wise statistics</li>
          <li className="list-disc list-inside">
            Student performance analytics
          </li>
          <li className="list-disc list-inside">
            Event documentation and faculty achievements
          </li>
          <li className="list-disc list-inside">Report can be exported to Excel and PDF</li>
        </ul>
      </div>
    </div>
  );
}
