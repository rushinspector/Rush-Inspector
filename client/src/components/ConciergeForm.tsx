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
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  agentName: z.string().min(2, "Agent name is required"),
  agentEmail: z.string().email("Invalid email address"),
  propertyAddress: z.string().min(5, "Property address is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ConciergeForm() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agentName: "",
      agentEmail: "",
      propertyAddress: "",
      preferredDate: "",
      notes: "",
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
      <Card className="w-full max-w-md mx-auto shadow-xl border-t-4 border-t-accent bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-display text-primary">Book a Rush Home Inspection</CardTitle>
          <CardDescription>
            Fill out the details below and we'll text you within 30 minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="agentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Jane Doe" 
                        {...field} 
                        className="bg-white" 
                        data-testid="input-agent-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="jane@agency.com" 
                        {...field} 
                        className="bg-white"
                        data-testid="input-agent-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="123 Main St, City" 
                        {...field} 
                        className="bg-white"
                        data-testid="input-property-address"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                        className="bg-white"
                        data-testid="input-preferred-date"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes / Access Codes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Lockbox code is 1234..." 
                        className="resize-none bg-white" 
                        {...field}
                        data-testid="textarea-notes"
                      />
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
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
