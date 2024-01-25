import pp from "../assets/bicycleghor.png";
import job_portal from "../assets/job_portal.png";
import pp1 from "../assets/home_sync.png";
import pp2 from "../assets/biriyanihouse (2).png";
import ShortcutIcon from "@mui/icons-material/Shortcut";
const projectsData = [
  {
    id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    title: "HomeSync Solution",
    subTitle: "Full Stack",
    img: pp1,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: [
      "TypeScript",
      "NextJs",
      "Redux-Toolkit",
      "Ant Design",
      "TailwindCSS",
    ],
    backendTechnology: ["Typescript", "Node JS", "Prisma"],
    database: ["SQL", "PostgreSQL"],
    keyFeatures: (
      <div>
        <h3 className="text-xl mb-3">Key Features</h3>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" />
          Authentication & Authorization
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Manage Services &
          Filtering Services
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Profile Management &
          Client Booking Management
        </div>

        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Schedule Management
          , Booking Realtime Tracking and Management
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Verified Client
          Review with Ratings, Comments
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            House Sync Solution aims to simplify the process of home service
            management by providing users with a user-friendly platform for
            booking, tracking, and reviewing services. Admins can efficiently
            manage service offerings and schedules, ensuring a positive
            experience for both users and service providers.
          </p>
        </div>
        <div className="my-5 flex flex-col gap-3">
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Role</h3>
            <div>
              <span className="badge badge-md">User</span>
              <span className="badge badge-md mx-2">Admin</span>
              <span className="badge badge-md">Super Admin</span>
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">User Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can create
              and manage their profiles, including personal details and
              preferences.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Booking Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can
              schedule service appointments based on their availability.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Real-time tracking of bookings and service status.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can cancel any pending booking
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Schedule Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              ADMIN can Manage Schedules.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can see available schedule and can choose schedule and date
              for booking
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Review and Ratings:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Users can provide feedback by giving reviews and ratings after
              service completion.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Option to add comments for a more detailed review.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "1f0ae10f-5b0a-4b1a-b927-7b5be2568e15",
    title: "Job Portal",
    subTitle: "Full Stack",
    img: job_portal,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: ["React", "Redux-Toolkit", "TailwindCSS"],
    backendTechnology: ["Node JS", "Express JS", "Mongoose"],
    database: ["NoSQL", "MongoDB"],
    keyFeatures: (
      <div>
        <h3 className="text-xl mb-3">Key Features</h3>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" />
          Authentication & Authorization
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Manage Services &
          Filtering Services
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Profile Management &
          Client Booking Management
        </div>

        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Schedule Management
          , Booking Realtime Tracking and Management
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Verified Client
          Review with Ratings, Comments
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            House Sync Solution aims to simplify the process of home service
            management by providing users with a user-friendly platform for
            booking, tracking, and reviewing services. Admins can efficiently
            manage service offerings and schedules, ensuring a positive
            experience for both users and service providers.
          </p>
        </div>
        <div className="my-5 flex flex-col gap-3">
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Role</h3>
            <div className="flex gap-4">
              <span className="badge badge-md">User</span>
              <span className="badge badge-md">Employee</span>
              <span className="badge badge-md">Candidate</span>
              <span className="badge badge-md">Admin</span>
            </div>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">User Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can create
              and manage their profiles, including personal details and
              preferences.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Booking Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can
              schedule service appointments based on their availability.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Real-time tracking of bookings and service status.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can cancel any pending booking
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Schedule Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              ADMIN can Manage Schedules.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can see available schedule and can choose schedule and date
              for booking
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Review and Ratings:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Users can provide feedback by giving reviews and ratings after
              service completion.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Option to add comments for a more detailed review.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Book Catalog Website",
    subTitle: "Full Stack",
    img: job_portal,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: [
      "Vite Js",
      "Redux-Toolkit",
      "Ant Design",
      "TailwindCSS",
    ],
    backendTechnology: ["Typescript", "Node JS", "Express JS", "Mongoose"],
    database: ["NoSQL", "MongoDB"],
    keyFeatures: (
      <div>
        <h3 className="text-xl mb-3">Key Features</h3>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" />
          Authentication & Authorization
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Manage Services &
          Filtering Services
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Profile Management &
          Client Booking Management
        </div>

        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Schedule Management
          , Booking Realtime Tracking and Management
        </div>
        <div className="text-white">
          <ShortcutIcon className="text-sm text-sky-500" /> Verified Client
          Review with Ratings, Comments
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            House Sync Solution aims to simplify the process of home service
            management by providing users with a user-friendly platform for
            booking, tracking, and reviewing services. Admins can efficiently
            manage service offerings and schedules, ensuring a positive
            experience for both users and service providers.
          </p>
        </div>
        <div className="my-5 flex flex-col gap-3">
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">User Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can create
              and manage their profiles, including personal details and
              preferences.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Booking Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can
              schedule service appointments based on their availability.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Real-time tracking of bookings and service status.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can cancel any pending booking
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Schedule Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              ADMIN can Manage Schedules.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              User can see available schedule and can choose schedule and date
              for booking
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Review and Ratings:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Users can provide feedback by giving reviews and ratings after
              service completion.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Option to add comments for a more detailed review.
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Admin Booking Filter and Booking Management
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    title: "Pc Builder",
    subTitle: "Frontend",
    img: job_portal,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: [
      "Next Js",
      "Redux-Toolkit",
      "Ant Design",
      "TailwindCSS",
    ],
    backendTechnology: ["Node JS", "Express JS", "Mongoose"],
    database: ["NoSQL", "MongoDB"],
    projectDetails: `This is a job portal service website. It works depending on two role - employee and candidate.

    You can initially signup an account then you can register as employee or as a candidate.
    
    As an employee -
    You can post a job. Then you can manage it like - update your job post, delete your job post, and also you can see number of applied candidate and specially you can see all candidates's personal profile. You can also update your profile
    
    As a candidate -
    If you are registered as a candidate then you can apply on job. You can see all of your applied job in your dashboard. You can update your profile and also you can comment on any job post. Then any one can also reply on this also.`,
  },
];

export default projectsData;
