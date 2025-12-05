import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, parseISO } from "date-fns";
import { ChevronDown, Clock } from "lucide-react";

// Helper function to parse date string as local date (avoids timezone issues)
function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
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
import { Badge } from "@/components/ui/badge";
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
  "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
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
      <Card className="w-full max-w-sm md:max-w-2xl mx-auto shadow-xl border-t-4 border-t-accent bg-white/95 backdrop-blur-sm">
        <CardHeader className="hidden md:flex p-2 md:p-6 pt-1 md:pt-6">
          <CardTitle className="text-lg md:text-2xl">Book a Home Inspection</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Fill out the details below - we'll text you within 30 minutes.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-1 md:p-6 md:pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 md:space-y-4">
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-[14px]">Full Name</FormLabel>
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
                      <FormLabel className="text-xs md:text-[14px]">Agency / Brokerage</FormLabel>
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

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-[14px]">Phone Number</FormLabel>
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
                      <FormLabel className="text-xs md:text-[14px]">Sq. Ft.</FormLabel>
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
                    <FormLabel className="text-xs md:text-[14px]">Inspection Address</FormLabel>
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

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <FormField
                  control={form.control}
                  name="inspectionDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-[14px]">Inspection Date</FormLabel>
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
                                {field.value ? format(parseLocalDate(field.value), "PPP") : "Select date"}
                              </span>
                              <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-3 bg-white" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              if (date) {
                                // Create a local date to avoid timezone issues
                                const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
                                setSelectedDate(localDate);
                                field.onChange(format(localDate, "yyyy-MM-dd"));
                                setDatePickerOpen(false);
                              } else {
                                setSelectedDate(undefined);
                              }
                            }}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0, 0, 0, 0))
                            }
                            initialFocus
                            className="bg-white text-foreground"
                            classNames={{
                              months: "flex flex-col",
                              month: "flex w-full flex-col gap-2",
                              nav: "flex items-center justify-between mb-2",
                              button_previous: "h-7 w-7 bg-transparent hover:bg-gray-100 rounded-md flex items-center justify-center",
                              button_next: "h-7 w-7 bg-transparent hover:bg-gray-100 rounded-md flex items-center justify-center",
                              month_caption: "h-7 flex items-center justify-center",
                              caption_label: "text-sm font-semibold text-gray-900",
                              weekdays: "grid grid-cols-7",
                              weekday: "text-xs h-8 w-8 flex items-center justify-center text-gray-500 font-medium",
                              week: "grid grid-cols-7 mt-1",
                              day: "h-8 w-8 p-0 flex items-center justify-center",
                              day_button: "h-8 w-8 p-0 text-sm font-normal rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1 inline-flex items-center justify-center cursor-pointer",
                              selected: "bg-gray-900 text-white hover:bg-gray-900 hover:text-white",
                              today: "bg-gray-100 text-gray-900",
                              disabled: "text-gray-300 opacity-50 pointer-events-none",
                              outside: "text-gray-400 opacity-50",
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
                      <FormLabel className="text-xs md:text-[14px]">Time of Inspection</FormLabel>
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
                    <FormLabel className="text-xs md:text-[14px]">Add-ons</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Radon testing, mold inspection, etc." 
                        className="resize-none bg-white text-[13px] md:text-sm placeholder:text-[13px] md:placeholder:text-sm h-9 md:h-28" 
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
                    <FormLabel className="text-xs md:text-[14px]">How did you hear about us?</FormLabel>
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
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold text-sm md:text-lg h-10 md:h-12 shadow-md transition-all hover:scale-[1.02]"
                disabled={mutation.isPending}
                data-testid="button-submit-request"
              >
                {mutation.isPending ? "Submitting..." : (
                  <>
                    <span className="hidden md:inline">Submit Request</span>
                    <span className="md:hidden">Book Inspector</span>
                  </>
                )}
              </Button>
              <p className="hidden lg:block text-xs text-gray-400 text-center mt-1">
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
