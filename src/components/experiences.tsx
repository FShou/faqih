interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  img: string;
  description: string;
}

export default function Experiences() {
  const years = new Set();
  const experiences: Experience[] = [
    {
      position: "Mobile Development Cohort",
      company:
        "Bangkit Academy led by Google, Tokopedia, Gojek, & TravelokaBangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      startDate: "2024-02-01",
      endDate: "July 1, 2020",
      img: "",
      description:
        "Bangkit is a career readiness program that aims to produce high-caliber technical talent for world-class Indonesian technology companies and startups, fully supported by Google, GoTo, Tokopedia, and Traveloka.",
    },
    {
      position: "Mobile Development Cohort",
      company:
        "Bangkit Academy led by Google, Tokopedia, Gojek, & TravelokaBangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      startDate: "2023-02-1",
      endDate: "",
      img: "",
      description: "",
    },
  ];
  return experiences
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .map((it: Experience) => {
      const date = it.startDate;
      const modifiedDate = date.replace(",", "1,");
      let year = new Date(date).getFullYear();
      if (!year) year = new Date(modifiedDate).getFullYear();

      if (!years.has(year)) {
        years.add(year);
        return (
          <>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {year}
            </h4>
            <div className="mb-4">
              <p>{it.position}</p>
              <p>{it.company}</p>
              <p>{it.description}</p>
            </div>
          </>
        );
      }
      return (
        <div key={it.startDate} className="mb-4">
          <p>{it.position}</p>
          <p>{it.company}</p>
          <p>{it.description}</p>
        </div>
      );
    });
}
