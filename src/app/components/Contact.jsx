"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { submitForm } from "../../../lib/actions/form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

// ✅ Schema
const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
  services: z
    .array(
      z.enum([
        "AI Chatbot or Voice Agents",
        "Automation Workflows",
        "Performance Marketing",
      ])
    )
    .min(1, { message: "Select at least one service." }),
  isConsentGiven: z.boolean().optional(),
});

const SERVICES = [
  "AI Chatbot or Voice Agents",
  "Automation Workflows",
  "Performance Marketing",
];

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      services: [],
      isConsentGiven: false,
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await submitForm(values);
      toast.success(response.message);
      form.reset();
      setIsLoading(false);
    } catch (error) {
      toast.error("Failed to submit form.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        Contact Us
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 shadow-md rounded-2xl p-4 sm:p-6"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
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
            <FormLabel>Interested Services</FormLabel>
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
                                  field.value.filter((s) => s !== service)
                                );
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{service}</FormLabel>
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
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Consent</FormLabel>
                  <FormDescription>
                    Yes, I agree to receive texts and emails on my contact
                    information.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

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
  );
}
