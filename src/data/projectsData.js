import pp from "../assets/bicycleghor.png";
import job_portal from "../assets/job_portal.png";
import pp1 from "../assets/gadgets-world.png";
import pp2 from "../assets/biriyanihouse (2).png";
const projectsData = [
  {
    id: 1,
    title: "Job Portal",
    subTitle: "( MERN + Redux-Toolkit )",
    img: job_portal,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: ["React", "Redux-Toolkit", "TailwindCSS"],
    backendTechnology: ["Node JS", "Express JS", "MongoDB", "Mongoose"],
    projectDetails: `This is a job portal service website. It works depending on two role - employee and candidate.

    You can initially signup an account then you can register as employee or as a candidate.
    
    As an employee -
    You can post a job. Then you can manage it like - update your job post, delete your job post, and also you can see number of applied candidate and specially you can see all candidates's personal profile. You can also update your profile
    
    As a candidate -
    If you are registered as a candidate then you can apply on job. You can see all of your applied job in your dashboard. You can update your profile and also you can comment on any job post. Then any one can also reply on this also.`,
  },
  {
    id: 2,
    title: "BycleGhor",
    subTitle: "( MERN Stack )",
    img: pp,
    liveSite: "https://job-portal-eosin.vercel.app/",
    clientSiteCode: "https://github.com/SanyFaysal/job-portal/",
    serverSiteCode: "https://github.com/SanyFaysal/job-portal-server",
    frontendTechnology: ["React", "Redux-Toolkit", "TailwindCSS"],
    backendTechnology: ["Node JS", "Express JS", "MongoDB", "Mongoose"],
    projectDetails: `This is a job portal service website. It works depending on two role - employee and candidate.

  You can initially signup an account then you can register as employee or as a candidate.
  
  As an employee -
  You can post a job. Then you can manage it like - update your job post, delete your job post, and also you can see number of applied candidate and specially you can see all candidates's personal profile. You can also update your profile
  
  As a candidate -
  If you are registered as a candidate then you can apply on job. You can see all of your applied job in your dashboard. You can update your profile and also you can comment on any job post. Then any one can also reply on this also.`,
  },
];

export default projectsData;
