import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  phoneNumber: z.string().min(10, "Valid phone number is required"),
  inspectionAddress: z.string().min(5, "Inspection address is required"),
  sqFt: z.string().optional(),
  inspectionDate: z.string().min(1, "Inspection date is required"),
  timeOfInspection: z.string().min(1, "Time of inspection is required"),
  addOns: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ConciergeForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phoneNumber: "",
      inspectionAddress: "",
      sqFt: "",
      inspectionDate: "",
      timeOfInspection: "",
      addOns: "",
      hearAboutUs: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/inspection-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to submit request");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Received",
        description: "We have received your rush inspection request. Our concierge will contact you shortly to confirm.",
        duration: 5000,
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  function onSubmit(values: FormData) {
    mutation.mutate(values);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="w-full max-w-2xl mx-auto shadow-xl border-t-4 border-t-accent bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-display text-primary">Book a Rush Home Inspection</CardTitle>
          <CardDescription>
            Fill out the details below - we'll text you within 30 minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Jane Doe" 
                          {...field} 
                          className="bg-white" 
                          data-testid="input-full-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="ABC Realty" 
                          {...field} 
                          className="bg-white"
                          data-testid="input-company-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(513) 123-4567" 
                          {...field} 
                          className="bg-white"
                          data-testid="input-phone-number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sqFt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sq. Ft.</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="2,500" 
                          {...field} 
                          className="bg-white"
                          data-testid="input-sq-ft"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="inspectionAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inspection Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="123 Main St, City, State" 
                        {...field} 
                        className="bg-white"
                        data-testid="input-inspection-address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="inspectionDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inspection Date</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          {...field} 
                          className="bg-white"
                          data-testid="input-inspection-date"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeOfInspection"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time of Inspection</FormLabel>
                      <FormControl>
                        <Input 
                          type="time" 
                          {...field} 
                          className="bg-white"
                          data-testid="input-time-of-inspection"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="addOns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add-ons</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Radon testing, mold inspection, etc." 
                        className="resize-none bg-white" 
                        {...field}
                        data-testid="textarea-add-ons"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hearAboutUs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you hear about us?</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full px-3 py-2 border border-input rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        data-testid="select-hear-about-us"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="referral">Referral</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend/Family</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg h-12 shadow-md transition-all hover:scale-[1.02]"
                disabled={mutation.isPending}
                data-testid="button-submit-request"
              >
                {mutation.isPending ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="text-xs text-gray-400 text-center mt-1">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
