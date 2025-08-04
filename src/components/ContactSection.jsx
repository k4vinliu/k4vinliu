import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to new ideas, new people, and new possibilities. Let’s connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 md:ml-40">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
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
              <div className="flex items-start space-x-4">
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
              <div className="flex items-start space-x-4">
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
        </div>

        {/* Moved this outside the grid and centered it */}
        <div className="pt-12 flex flex-col items-center">
          <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/k4vinliu" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <img
        src="/assets/coding.gif"
        alt="Floating Computer Guy"
        className="absolute bottom-55 right-[600px] w-[240px] h-auto sm:w-[320px] z-10 animate-[float2_4s_ease-in-out_infinite,twinkle_6s_ease-in-out_infinite]"
      />
    </section>
  );
};
