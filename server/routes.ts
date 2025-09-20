import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);

      console.log("New contact inquiry received:", {
        id: inquiry.id,
        name: inquiry.name,
        phone: inquiry.phone,
        service: inquiry.service,
        createdAt: inquiry.createdAt,
      });

      res.json({
        success: true,
        message: "Contact inquiry submitted successfully!",
        inquiryId: inquiry.id,
      });
    } catch (error) {
      console.error("Contact form error:", error);

      if (error && typeof error === "object" && "issues" in error) {
        const validationError = fromZodError(error as any);
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          error: validationError.message,
        });
      }

      res.status(500).json({
        success: false,
        message: "Failed to submit contact inquiry. Please try again.",
      });
    }
  });

  // Get all contact inquiries (for business owner)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact inquiries",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
