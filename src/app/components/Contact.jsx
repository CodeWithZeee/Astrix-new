"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import Switch1 from "./Switch1";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

// Country codes list
const COUNTRY_CODES = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+41", country: "Switzerland" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+358", country: "Finland" },
  { code: "+353", country: "Ireland" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+48", country: "Poland" },
  { code: "+420", country: "Czech Republic" },
  { code: "+43", country: "Austria" },
  { code: "+36", country: "Hungary" },
  { code: "+40", country: "Romania" },
  { code: "+7", country: "Russia/Kazakhstan" },
  { code: "+82", country: "South Korea" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+84", country: "Vietnam" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+972", country: "Israel" },
  { code: "+27", country: "South Africa" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+54", country: "Argentina" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+51", country: "Peru" },
  { code: "+20", country: "Egypt" },
  { code: "+234", country: "Nigeria" },
  { code: "+254", country: "Kenya" },
  { code: "+233", country: "Ghana" },
];

// ✅ Schema
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().trim().email({ message: "Invalid email address." }),
  countryCode: z.string().min(1, { message: "Please select a country code." }),
  phoneNumber: z
    .string()
    .trim()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number must be less than 15 digits." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  message: z
    .union([
      z
        .string()
        .max(1000, { message: "Message must be less than 1000 characters." }),
      z.literal(""),
    ])
    .default(""),
  services: z
    .array(
      z.enum([
        "AI Chatbot or Voice Agents",
        "Automation Workflows",
        "Performance Marketing",
        "AI Consulting",
      ]),
    )
    .min(1, { message: "Select at least one service." }),
  isConsentGiven: z.boolean().optional(),
  isMarketingConsentGiven: z.boolean().optional(),
});

const SERVICES = [
  "AI Chatbot or Voice Agents",
  "Automation Workflows",
  "Performance Marketing",
  "AI Consulting",
];

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      message: "",
      services: [],
      isConsentGiven: false,
      isMarketingConsentGiven: false,
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          countryCode: values.countryCode,
          phoneNumber: values.phoneNumber,
          services: values.services,
          isConsentGiven: values.isConsentGiven,
          isMarketingConsentGiven: values.isMarketingConsentGiven,
        }),
      });

      const contentType = response.headers.get("content-type") || "";

      if (!response.ok) {
        const errorData = contentType.includes("application/json")
          ? await response.json()
          : { error: await response.text() };
        throw new Error(errorData.error || "Failed to submit form");
      }

      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      toast.success("Form submitted successfully!");
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again.";
      toast.error(errorMessage);
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative max-w-xl mx-auto py-10 px-4 sm:px-6 lg:px-8 ">
      {/* Background gradient spots */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-orange-500/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-500/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-r from-purple-500/15 via-transparent to-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-3xl font-semibold mb-6 text-center">
          Contact Us
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 shadow-md rounded-2xl p-4 sm:p-6 border-2"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Country Code</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {COUNTRY_CODES.map((item) => (
                          <SelectItem key={item.code} value={item.code}>
                            {item.code} {item.country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-md">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Services (Checkbox group) */}
            <FormItem>
              <FormLabel
                className={`text-md ${
                  form.formState.errors.services ? "text-red-500" : ""
                }`}
              >
                Interested Services
              </FormLabel>
              <FormDescription>
                Select the services you're interested in.
              </FormDescription>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {SERVICES.map((service) => (
                  <Controller
                    key={service}
                    name="services"
                    control={form.control}
                    render={({ field }) => {
                      const checked = field.value.includes(service);
                      return (
                        <FormItem
                          className="flex items-center space-x-2"
                          key={service}
                        >
                          <FormControl>
                            <Checkbox
                              checked={checked}
                              onCheckedChange={(value) => {
                                if (value) {
                                  field.onChange([...field.value, service]);
                                } else {
                                  field.onChange(
                                    field.value.filter((s) => s !== service),
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {service}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage name="services" />
            </FormItem>

            {/* Consent */}
            <FormField
              control={form.control}
              name="isConsentGiven"
              render={({ field }) => (
                <FormItem
                  className={`flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm ${
                    field.value ? "border-white" : ""
                  }`}
                >
                  <div className="space-y-0.5">
                    {/* <FormLabel className="text-base">
                    Transactional Consent *
                  </FormLabel> */}
                    <FormDescription>
                      I consent to receive transactional messages from Astrix Digital Media on the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isMarketingConsentGiven"
              render={({ field }) => (
                <FormItem
                  className={`flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm ${
                    field.value ? "border-white" : ""
                  }`}
                >
                  <div className="space-y-0.5">
                    {/* <FormLabel className="text-base">
                    Marketing Consent (Optional)
                  </FormLabel> */}
                    <FormDescription>
                      I consent to receive marketing and promotional messages from Astrix Digital Media at the phone number provided. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Privacy and Terms */}
            <span className="flex justify-center items-center gap-2 sm:gap-2">
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms and conditions
              </Link>
              <span className="text-gray-400"> | </span>
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </span>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
