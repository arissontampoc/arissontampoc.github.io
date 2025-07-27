function Experience() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold">Senior Software Engineer – Cubic Transportation Systems</h3>
        <p className="text-sm text-muted-foreground">Feb 2019 – Present | San Diego, CA (Remote)</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Led accessibility redesign of a legacy Angular app using React and PrimeReact</li>
          <li>Developed microservices with Spring Boot and Gradle</li>
          <li>Integrated ApplePay and GooglePay APIs for virtual transit cards</li>
          <li>Built RESTful APIs and SQL database schemas for Order Management systems</li>
          <li>Wrote Jest, JUnit, and integration tests to ensure code quality</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold">Web Developer Analyst – Arrowhead Insurance</h3>
        <p className="text-sm text-muted-foreground">Aug 2017 – Feb 2019 | San Diego, CA</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Maintained and enhanced Java/JavaScript-based web app with Velocity and XML</li>
          <li>Performed QA testing for insurance program implementation</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold">Software Engineering Intern – Reflexion Health</h3>
        <p className="text-sm text-muted-foreground">Nov 2015 – Jun 2017 | San Diego, CA</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Supported migration from Ruby on Rails to Golang for API services</li>
          <li>Contributed to back-end development with Golang</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;