export default function Projects() {
  const projects = [
    {
      title: "Gamified Learning Platform",
      description:
        "Developed a gamified mathematics learning platform for primary school students with AI chatbot support using ASP.NET (C#), Bootstrap, and Microsoft SQL Server.",
      link: "https://github.com/syzwnak-codes/gamified-learning-platform", // optionally add project URL or repo link
    },
    {
      title: "Ecentra",
      description:
        "Built full-stack front office and back office web system to manage stocks, payments, and business events using ASP.NET (C#), Bootstrap, and MSSQL.",
      link: "https://www.ecentra.com.my/Home.aspx",
    },
    {
      title: "MedHub – Online Clinic App",
      description:
        "Developed a Flutter mobile app for live doctor consultations, prescription viewing, and medical records, with Firebase backend for real-time data.",
      link: "https://github.com/syzwnak-codes/medhub",
    },
    {
      title: "FoodSpace – Food Ordering System",
      description:
        "Created a Java-based system to manage food orders, delivery tracking, and revenue reporting using Swing, AWT, and JFreeChart.",
      link: "https://github.com/syzwnak-codes/FoodSpace",
    },
  ];

  return (
    <section className="py-20 bg-accentBg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Projects
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent mt-4 inline-block font-medium hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
