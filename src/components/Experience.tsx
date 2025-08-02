import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Experience() {
  const experience = [
    {
      role: "Senior Software Engineer",
      previousTitles: "Software Engineer, Associate Software Engineer",
      company: "Cubic Transportation Systems, Inc.",
      date: "Feb 2019 – Present",
      highlights: [
        `Led the initiative to help improve Cubic’s accessibility by working closely with the UI/UX team to redesign one of their legacy
apps, improving upon the old Angular code, and implementing those changes using JavaScript, TypeScript, React, and PrimeReact
as the component library to be Web Content Accessibility Guidelines (WCAG) compliant.`,
        "Contributed to the Java development and maintenance of Server-side applications using an Agile Development methodology from requirement definition to deployment.",
        "Supported in the design of and implementation of RESTful APIs using the client-server model with JSON requests and responses between internal applications and third-party services",
        "Collaborated with senior developers and software architects from both internal and external teams to design features based on customer requirements for Cubic’s Order Management, Virtual Token, and Payment systems.",
      ],
      tech: [
        "Java",
        "React",
        "TypeScript",
        "Oracle SQL",
        "PostgreSQL",
        "Spring Boot",
      ],
    },
    {
      role: "Web Developer Analyst",
      previousTitles: "Software Quality Assurance Analyst",
      company: "Arrowhead Insurance, Inc.",
      date: "Aug 2017 – Feb 2019",
      highlights: [
        "Responsible for maintaining and enhancing the Innovation web application with Java, JavaScript, Velocity, XML, and HTML",
        "Responsible for manual and automation testing of web applications to verify Insurance Program implementation and Policy Life Cycle integrity",
      ],
      tech: ["Java", "Velocity", "JavaScript", "HTML", "XML"],
    },
    {
      role: "Software Engineering Intern",
      company: "Reflexion Health, Inc.",
      date: "Nov 2015 – Jun 2017",
      highlights: [
        "Built backend APIs in Golang and migrate legacy Ruby on Rails code",
      ],
      tech: ["Golang", "Ruby on Rails"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="space-y-4"
      >
        {experience.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <Card>
              <AccordionTrigger className="px-4 py-3 no-underline hover:no-underline focus:no-underline">
                <div className="text-left w-full">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  {item.previousTitles && (
                    <span className="text-xs text-muted-foreground italic mb-2">
                      Previously: {item.previousTitles}
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {item.company} — {item.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs rounded-full px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="space-y-3">
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default Experience;
