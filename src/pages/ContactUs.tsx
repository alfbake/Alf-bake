import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
});

type FormValues = z.infer<typeof schema>;

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Contact submission:", data);
    toast({ title: "Thank you!", description: "We have received your request and will get back shortly." });
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | ALFBAKE Resto Cafe</title>
        <meta name="description" content="Contact ALFBAKE resto cafe. Send us your details and find us on the map." />
        <link rel="canonical" href="/alfbake/contact-us" />
      </Helmet>

      <section className="container py-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl">Contact us</h1>
          <p className="text-muted-foreground">We'd love to hear from you. Please fill out the form and we’ll get back to you.</p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" {...register("firstName")} aria-invalid={!!errors.firstName} />
              {errors.firstName && <p className="text-xs text-destructive mt-1">Please enter a valid first name.</p>}
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" {...register("lastName")} aria-invalid={!!errors.lastName} />
              {errors.lastName && <p className="text-xs text-destructive mt-1">Please enter a valid last name.</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-destructive mt-1">Please enter a valid email.</p>}
            </div>
            <div>
              <Label htmlFor="phone">Contact number</Label>
              <Input id="phone" {...register("phone")} aria-invalid={!!errors.phone} />
              {errors.phone && <p className="text-xs text-destructive mt-1">Please enter a valid contact number.</p>}
            </div>
            <Button variant="premium" className="mt-2" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>Submit</Button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/60">
          <iframe
            title="ALFBAKE location on map"
            src="https://www.google.com/maps?q=Chennai%20Central%20Railway%20Station&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
