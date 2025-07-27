import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Contact } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Flex layout for Skeleton + Text */}
      <div className="flex items-center gap-8 mb-8">
        {/* Circular Skeleton for headshot placeholder */}
        <Skeleton className="w-28 h-28 rounded-full shrink-0" />

        {/* Text content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Arisson Tampoc</h1>
          <p className="text-lg text-muted-foreground">
            Senior Software Engineer | Java, React, Spring Boot, TypeScript
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline">
          <Contact />
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
