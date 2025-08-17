import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  X,
  Utensils,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import GlobalAnimations, {
  globalAnimationClasses,
} from "@/components/ui/GlobalAnimations";

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className={`bg-black p-8 rounded-lg border-2 border-gray-800 shadow-[0_0_80px_rgba(239,68,68,0.6)] hover:shadow-[0_0_90px_rgba(229,50,50,0.8)] transition-all duration-300 ${globalAnimationClasses.formBorderBreathing}`}
    >
      <div className="mb-8">
        <h2
          className={`text-3xl font-bold text-white mb-2 transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            animation: isLoaded
              ? "headerTextFlow 1s ease-out forwards"
              : "none",
          }}
        >
          Your Details
        </h2>
        <p
          className={`text-gray-400 transition-all duration-700 ease-out delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            animation: isLoaded
              ? "headerTextFlow 0.8s ease-out 0.2s forwards"
              : "none",
          }}
        >
          Let us know how to get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white font-medium">
              NAME *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John"
              required
              className="bg-black border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] form-input-breathing"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">
              EMAIL ADDRESS *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@gmail.com"
              required
              className="bg-black border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] form-input-breathing"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-white font-medium">
            SUBJECT *
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="bg-black border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] form-input-breathing"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white font-medium">
            COMMENTS / QUESTIONS *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Question"
            required
            rows={5}
            className="bg-black border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.5)] form-input-breathing"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`group inline-flex items-center gap-3 px-6 py-4 text-white bg-transparent border border-gray-600 rounded-full font-medium tracking-wide hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 ease-out  ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <span className="text-sm uppercase tracking-wider">
            {isSubmitting ? "SENDING..." : "CONTACT US"}
          </span>
        </button>
      </form>
    </div>
  );
};

// Contact Info Component
const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Keep Close Section */}
      <div className="border-l-4 border-red-600 pl-6">
        <h3 className="text-sm font-medium text-red-500 mb-2 tracking-wider">
          KEEP CLOSE
        </h3>
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400 leading-relaxed">
          We'd love to hear from you! Whether you have a question about our
          menu, want to make a reservation, or just want to share your dining
          experience, we're here to help. Reach out to us and we'll respond as
          soon as we can.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <MapPin size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Address</h4>
            <p className="text-gray-400">
              ALF BAKE
              <br />
              Opposite Goldcity
              <br />
              Manama, Bahrain
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <Phone size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Phone</h4>
            <p className="text-gray-400">
              (+973) 7790 9019
              <br />
              (+973) 3390 9078
              <br />
              (+973) 3519 5151
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <Mail size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Email</h4>
            <p className="text-gray-400">alfbakerestocafe@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <Clock size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Hours</h4>
            <p className="text-gray-400">
              Open 1:00 PM
              <br />
              Closed 1:00 AM
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="text-sm font-medium text-red-500 mb-4 tracking-wider">
          FOLLOW US
        </h4>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61579726914316"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/alf_bake__/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://x.com/AlfBake"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <X size={18} />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <Utensils size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GlobalAnimations>
      <div className="min-h-screen bg-black">
        <Helmet>
          <title>Contact Us | ALF BAKE Resto Cafe</title>
          <meta
            name="description"
            content="Contact ALF BAKE Resto Cafe. Send us your details and find us on the map."
          />
        </Helmet>

        {/* Big Red Header */}
        <section
          className="relative py-16 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url(/mainbanner.png)" }}
        >
          <div className="container relative z-10">
            <div className="text-center">
              <h1
                className={`mt-8 text-black font-roboto font-bold text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-9xl leading-normal tracking-[0.1em] transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  animation: isLoaded
                    ? "headerTextFlow 1.2s ease-out forwards"
                    : "none",
                }}
              >
                CONTACT US
              </h1>
              <p
                className={`text-black font-script text-2xl md:text-3xl font-bold transition-all duration-1000 ease-out delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  animation: isLoaded
                    ? "headerTextFlow 1s ease-out 0.3s forwards"
                    : "none",
                }}
              >
                Get in touch with us
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Info */}
              <div>
                <ContactInfo />
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  className={`text-4xl font-script text-red-600 mb-2 ${globalAnimationClasses.headingImmediate}`}
                >
                  Find Us
                </h2>
                <p className="text-gray-400">Visit us at our location</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-700">
                <iframe
                  title="ALF BAKE location on map"
                  src="https://www.google.com/maps?q=Goldcity%20Manama%20Bahrain&output=embed"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </GlobalAnimations>
  );
};

export default ContactUs;
