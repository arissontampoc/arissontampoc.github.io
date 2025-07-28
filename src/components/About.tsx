import { Cpu, Database, SquareTerminal } from "lucide-react";

function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="mb-4">
        I'm a Senior Software Engineer with a B.S. in Mathematics-Computer
        Science from UC San Diego. I am very passionate about problem solving
        and learning new technologies.
      </p>

      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <div className="flex items-center gap-2 mb-2">
        <SquareTerminal size={24} /> Java, JavaScript, React, TypeScript,
        C/C++/C#, Golang, MATLAB, Python
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Database size={24} /> OracleSQL, MySQL, PostgreSQL
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Cpu size={24} /> GIT, Agile Development, Software Design Patterns and
        Principles, OpenGL, AWS
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">What I Value</h3>
      <ul className="list-disc list-inside">
        <li>Constantly being challenged</li>
        <li>Writing clean, maintainable code</li>
        <li>Taking ownership of my work and following through on commitments</li>
        <li>Curiosity and continuous improvement</li>
      </ul>

      <p className="mt-8">
        In my spare time, you can often find me spending time with my son,
        drinking coffee, or playing Marvel Rivals.
      </p>
    </div>
  );
}

export default About;
