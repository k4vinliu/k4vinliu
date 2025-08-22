import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to new ideas, new people, and new possibilities. Let’s connect.
        </p>

        {/* Responsive layout for contact info + gif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column: Contact info */}
          <div className="space-y-8 items-center text-center md:items-start md:text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kevinliu2552@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kevinliu2552@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+16475073428"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (647) 507-3428
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Toronto, ON, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: GIF */}
          <div className="flex justify-center md:justify-center mt-6 md:mt-10">
            <img
              src="/assets/coding2.gif"
              alt="Floating Computer Guy"
              className="w-[200px] sm:w-[240px] md:w-[320px] h-auto z-10 animate-[float2_4s_ease-in-out_infinite,twinkle_6s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Social links */}
        <div className="pt-12 flex flex-col items-center">
          <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/k4vinliu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
