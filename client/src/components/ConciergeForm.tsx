import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { ChevronDown, Clock } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "required"),
  companyName: z.string().min(2, "required"),
  phoneNumber: z.string().min(10, "required"),
  inspectionAddress: z.string().min(5, "required"),
  sqFt: z.string().min(1, "required"),
  inspectionDate: z.string().min(1, "required"),
  timeOfInspection: z.string().min(1, "required"),
  addOns: z.string().optional(),
  hearAboutUs: z.string().min(1, "Please tell us how you heard about us"),
});

type FormData = z.infer<typeof formSchema>;

const timeSlots = [
  "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"
];

export default function ConciergeForm() {
  const { toast } = useToast();
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
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
                          placeholder="" 
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
                      <FormLabel>Agency / Brokerage</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="" 
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
                          placeholder="" 
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
                          placeholder="" 
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
                        placeholder="" 
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
                      <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              type="button"
                              className={cn(
                                "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                                !field.value && "text-muted-foreground"
                              )}
                              data-testid="button-inspection-date"
                            >
                              <span className="line-clamp-1">
                                {field.value ? format(new Date(field.value), "PPP") : "Select date"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date);
                              if (date) {
                                field.onChange(format(date, "yyyy-MM-dd"));
                                setDatePickerOpen(false);
                              }
                            }}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                            className="text-[10px] [--cell-size:1.25rem] p-0"
                            classNames={{
                              months: "flex flex-col",
                              month: "flex w-full flex-col gap-1",
                              nav: "flex items-center justify-between mb-1",
                              button_previous: "h-5 w-5 p-0",
                              button_next: "h-5 w-5 p-0",
                              month_caption: "h-5 flex items-center justify-center",
                              caption_label: "text-[11px] font-medium",
                              weekdays: "flex",
                              weekday: "text-[9px] w-5 text-center text-muted-foreground",
                              week: "flex",
                              day: "w-5 h-5 p-0 text-center",
                            }}
                          />
                        </PopoverContent>
                      </Popover>
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white" data-testid="select-time-of-inspection">
                            <SelectValue placeholder="Select time">
                              {field.value ? (
                                <span className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 opacity-50" />
                                  {field.value}
                                </span>
                              ) : (
                                "Select time"
                              )}
                            </SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-48">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time} data-testid={`select-time-${time.replace(/[: ]/g, '-')}`}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                      <Input 
                        {...field} 
                        className="bg-white"
                        data-testid="input-hear-about-us"
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
              <p className="text-xs text-gray-400 text-center mt-1">
                By submitting, you agree to our{" "}
                <a href="/terms" className="underline hover:text-gray-600" data-testid="link-terms">Terms of Service</a>
                {" "}and{" "}
                <a href="/privacy" className="underline hover:text-gray-600" data-testid="link-privacy">Privacy Policy</a>.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
