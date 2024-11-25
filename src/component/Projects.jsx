import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      image: "/reactpic.png", // Use static path
      title: "Employees and Customers Management System", // Fixed typo from "tittle"
      description: "An application that allows users to view employee profiles, including their name, role, and picture. It provides functionality to add new employees, update existing employee profiles in real-time by managing state using React functions like useState and useEffect. The application also manages customer data by fetching it from the backend using fetch or axios for API calls, with proper error handling implemented using status codes. React components dynamically render changes to the UI based on state updates and API responses.",
      technologies: ["React", "Tailwind"],
    },
    {
      image: "/github.png", // Use static path
      title: "Retail Company Analysis", // Fixed typo
      description: "A leading retail company aims to identify which products, locations, and categories to target or avoid amid growing demand and competition in the market.",
      technologies: ["Python (Pandas, Matplotlib)", "Power BI"],
    },
    {
      image: "/sqlg.png", // Use static path
      title: "Briggs Company Analysis", // Fixed typo
      description: "This dataset is from Briggs Company, which seeks to identify customer segments and business categories driving its sales. Briggs has three main categories and aims to determine which of these contributes the most to business success. After identifying the top-selling category, the company wants to pinpoint the specific products within its subcategories that are driving sales. Additionally, they are interested in analyzing the trend of top-selling products within each category over the years to inform future strategies.",
      technologies: ["SQL", "Excel"],
    },
    {
      image: "/Excelg.png", // Use static path
      title: "Supermarket Analysis", // Fixed typo
      description: "The dashboard and analysis presented below are derived from a supermarket dataset. The primary objective of this analysis is to gain insights into the supermarket’s sales performance by examining key metrics such as product line quantity sold, branch-specific sales, payment methods, gender-based sales, city-wise sales, total quantity sold, Cost of Goods Sold (COGS), total profits, and overall sales. Additionally, an interactive slicer was implemented to enable dynamic exploration of the data, allowing users to filter the quantity sold by product line, date, branch, and payment method. These insights will empower the supermarket to make informed decisions regarding inventory management, cost efficiency, and the discovery of new revenue streams.",
      technologies: ["Excel"],
    },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        {/* Display the correct image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          {/* Correctly display title and description */}
          <div className="font-semibold text-xl">{project.title}</div>
          <p className="text-grey-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {/* Map through technologies */}
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {/* Map through projectsData */}
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

