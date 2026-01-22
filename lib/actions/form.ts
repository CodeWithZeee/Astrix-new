"use server";

import prisma from "../prisma";

type SubmitFormData = {
  name: string;
  email: string;
  countryCode?: string;
  phoneNumber?: string;
  message?: string;
  services?: string[];
  isConsentGiven: boolean;
  company?: string; // honeypot field
};

export const submitForm = async (data: SubmitFormData) => {
  try {
    // 🛑 Honeypot spam protection
    if (data.company) {
      return { success: true };
    }

    const {
      name,
      email,
      countryCode,
      phoneNumber,
      message,
      services,
      isConsentGiven,
    } = data;

    // 🔐 Required fields validation
    if (!name || !email || !isConsentGiven) {
      return {
        success: false,
        message: "Invalid submission.",
      };
    }

    // 🔒 Sanitize services array
    const servicesArray =
      Array.isArray(services) &&
      services.every((s) => typeof s === "string")
        ? services
        : [];

    // 🗄️ Save to database
    await prisma.form.create({
      data: {
        name,
        email,
        countryCode: countryCode || null,
        phoneNumber: phoneNumber || null,
        message: message || null,
        services: servicesArray,
        isConsentGiven,
      },
    });

    return {
      success: true,
      message: "Form submitted successfully.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};
