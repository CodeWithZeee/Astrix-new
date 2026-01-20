"use server";

import prisma from "../prisma";

export const submitForm = async (data) => {
  const { name, email, countryCode, phoneNumber, message, services, isConsentGiven } = data;

  try {
    // Ensure services is an array of strings
    const servicesArray = Array.isArray(services) ? services : [];

    const result = await prisma.form.create({
      data: {
        name,
        email,
        countryCode: countryCode || null,
        phoneNumber: phoneNumber || null,
        message,
        services: servicesArray,
        isConsentGiven,
      },
    });

    return {
      success: true,
      message: "Form submitted successfully.",
      data: result,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Failed to submit form.",
      error: error.message,
    };
  }
};
