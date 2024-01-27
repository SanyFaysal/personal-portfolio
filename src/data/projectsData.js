import job_portal from "../assets/job_portal.png";
import home_sync_solution from "../assets/home_sync.png";
import book_catalog from "../assets/book_catalog.png";
import pc_builder from "../assets/pc_builder.png";
import ShortcutIcon from "@mui/icons-material/Shortcut";
const projectsData = [
  {
    id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    title: "HomeSync Solution",
    subTitle: "Full Stack",
    img: home_sync_solution,
    liveSite: "https://house-cleaning-frontend-kappa.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/house_cleaning_frontend",
    serverSiteCode: "https://github.com/SanyFaysal/house_cleaning_backend",
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
      <div className="text-yellow-400 font-semibold">
        <h3 className="text-xl mb-3 text-white">Key Features</h3>
        <div className="">
          <ShortcutIcon className="text-sm " />
          Authentication & Authorization
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Manage Services & Filtering
          Services
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Profile Management & Client
          Booking Management
        </div>

        <div className="">
          <ShortcutIcon className="text-sm" /> Schedule Management , Booking
          Realtime Tracking and Management
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Verified Client Review with
          Ratings, Comments
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
      <div className="text-yellow-400 font-semibold">
        <h3 className="text-xl mb-3 text-white">Key Features</h3>
        <div className=" ">
          <ShortcutIcon className="text-sm " /> Authentication & Authorization
          as (USER, CANDIDATE, EMPLOYEE, ADMIN )
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " />
          Profile Management and Building Personal Resume
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Job Management, Job Filtering
          with Pagination, Job Commenting & Replying
        </div>
        <div className="">
          <ShortcutIcon className="text-sm" />
          Job Apply and Tracking Application
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " />
          User Blog Management
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            Our project streamlines user interactions with seamless
            authentication, enabling role-switching between USER, CANDIDATE,
            EMPLOYEE, or ADMIN. Build a strong digital presence through
            intuitive Profile Management, including easy resume creation. For
            employees, efficient Job Management tools enhance productivity,
            while simplified Job Applications and real-time tracking streamline
            hiring. Engage with the community effortlessly through User Blog
            Management, sharing insights. In essence, our platform offers a
            smooth journey from login to role-specific functions, fostering
            growth and community connections.
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
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Manage Blogs and can create question on job or blog
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Employee Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Managing Personal Profile and Manage Blog
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Create, Update,
              Delete any Job,
            </p>

            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Manage Applications with Applicant Profile and make Shortlisted
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Candidate Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Managing Personal Profile and Add Project skills to build Resume
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Search Jobs and
              Apply on Active Jobs by Profile
            </p>

            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Track Application
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Admin Profile</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Managing Personal Profile
            </p>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Manage - User,
              Employee, Candidate, Blog
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
    img: book_catalog,
    liveSite: "https://book-catalog-frontend-pi.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/book-catalog-frontend",
    serverSiteCode: "https://github.com/SanyFaysal/book-catelog-server",
    frontendTechnology: [
      "Vite Js",
      "Redux-Toolkit",
      "Ant Design",
      "TailwindCSS",
    ],
    backendTechnology: ["Typescript", "Node JS", "Express JS", "Mongoose"],
    database: ["NoSQL", "MongoDB"],
    keyFeatures: (
      <div className="text-yellow-400 font-semibold">
        <h3 className="text-xl mb-3 text-white">Key Features</h3>
        <div className="">
          <ShortcutIcon className="text-sm " />
          Authentication & Authorization
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Add, Update and Delete Books
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Profile Management
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " />
          Wish listed books and Manage Books activity status
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Verified User's Review with
          Ratings
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            Our book catalog website provides a seamless user experience with
            key features such as secure Authentication & Authorization,
            effortless Book Management (add, update, delete), and intuitive
            Profile Management. Users can efficiently manage wish-listed books
            and track activity status, ensuring a well-organized collection.
            Additionally, enjoy insightful Verified User Reviews with Ratings,
            enhancing the overall experience. It's your go-to hub for a
            streamlined and engaging book catalog experience.
          </p>
        </div>
        <div className="my-5 flex flex-col gap-3">
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">
              Authentication & Authorization:
            </h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Secure access
              control with streamlined authentication and authorization
              processes.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Book Management:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Effortlessly
              add, update, and delete books, ensuring a dynamic and organized
              collection
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">
              Wishlist and Activity Tracking:
            </h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Easily manage wish-listed books and track activity status for
              efficient book management.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Review and Ratings:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Gain insights through verified user reviews, enhancing the overall
              user experience with meaningful ratings.
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
    img: pc_builder,
    liveSite: "https://pc-builder-frontend-omega.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/pc-builder-frontend",
    serverSiteCode: "https://github.com/SanyFaysal/pc-builder-server",
    frontendTechnology: [
      "Next Js",
      "Next Auth",
      "Redux-Toolkit",
      "Ant Design",
      "TailwindCSS",
    ],
    backendTechnology: ["Node JS", "Express JS", "Mongoose"],
    database: ["NoSQL", "MongoDB"],
    keyFeatures: (
      <div className="text-yellow-400 font-semibold">
        <h3 className="text-xl mb-3 text-white">Key Features</h3>
        <div className="">
          <ShortcutIcon className="text-sm " />
          Authentication with Next Auth
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Building Pc by choosing parts
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> SSG, SSR Implementation in
          Product & Category load
        </div>
        <div className="">
          <ShortcutIcon className="text-sm " /> Profile management
        </div>
      </div>
    ),
    details: (
      <div>
        <h3 className="text-xl mb-3">Project Details</h3>
        <div className="text-white">
          <p>
            PC Forge is a web-based PC builder platform that allows users to
            customize and build their own PC based on their personal
            preferences. Users can select components such as motherboard, CPU,
            RAM, storage, power supply unit, and monitor, and view the total
            cost of their customized PC. They can also make a purchase directly
            through the website.
          </p>
        </div>
        <div className="my-5 flex flex-col gap-3">
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">User Authentication</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" />
              Users can create accounts and log in to access the PC builder
              feature.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">PC Builder:</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500" /> Users can select
              components for their PC build, including motherboard, CPU, RAM,
              storage, power supply unit, and monitor. They can view the total
              cost of their selected components.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Product Showcase</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              The home page features a navigation bar, a banner, and six random
              products displayed for users to explore.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Product Categories</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Users can explore products through six different categories,
              allowing for easy navigation and product discovery.
            </p>
          </div>
          <div className="text-white">
            <h3 className="font-semibold text-sky-500">Profile Page</h3>
            <p>
              {" "}
              <ShortcutIcon className="text-sm text-sky-500 mr-1" />
              Registered users have access to a profile page where they can view
              their personal information and account details.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default projectsData;
