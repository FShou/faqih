import { Card } from "./ui/card";

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
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      startDate: "2024-02-01",
      endDate: "July 1, 2020",
      img: "",
      description:
        "Bangkit is a career readiness program that aims to produce high-caliber technical talent for world-class Indonesian technology companies and startups, fully supported by Google, GoTo, Tokopedia, and Traveloka.",
    },
    {
      position: "Teacher",
      company:
        "Kulliyatul Mu'allimin Al-Islamiyyah Pondok Modern Darussalam Gontor",
      startDate: "2020-05-1",
      endDate: "2021-06-1",
      img: "",
      description:
        "Served as an educator at branch Darul-Muttaqien. Responsible for more than 7 teaching hours per week across classes and subjects. Assisting Homeroom Teacher guiding more than 30 students in their learning.",
    },
  ];
  return experiences
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    )
    .map((it: Experience) => {
      const date = it.startDate;
      const modifiedDate = date.replace(",", "1,");
      let year = new Date(date).getFullYear();
      if (!year) year = new Date(modifiedDate).getFullYear();

      if (!years.has(year)) {
        years.add(year);
        return (
          <>
            <h4 className="scroll-m-20 text-lg mb-2 font-semibold tracking-tight">
              {year}
            </h4>
            <Card className="mb-4 p-3">
              <p className="font-semibold text-lg">{it.position}</p>
              <p className="text-primary/80 text-sm">{it.company}</p>
              <p className="mt-1 text-primary/95">{it.description}</p>
            </Card>
          </>
        );
      }
      return (
        <Card key={it.startDate} className="mb-4">
          <p>{it.position}</p>
          <p>{it.company}</p>
          <p>{it.description}</p>
        </Card>
      );
    });
}
