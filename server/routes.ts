import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertInspectionRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/inspection-requests", async (req, res) => {
    try {
      const validatedData = insertInspectionRequestSchema.parse(req.body);
      const result = await storage.createInspectionRequest(validatedData);

      // If user configures Airtable, send data there as well
      if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE_NAME) {
        try {
          const airtableResponse = await fetch(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fields: {
                  'Full Name': validatedData.fullName,
                  'Company Name': validatedData.companyName,
                  'Phone Number': validatedData.phoneNumber,
                  'Inspection Address': validatedData.inspectionAddress,
                  'Sq. Ft.': validatedData.sqFt || '',
                  'Inspection Date': validatedData.inspectionDate,
                  'Time of Inspection': validatedData.timeOfInspection,
                  'Add-ons': validatedData.addOns || '',
                  'How did you hear about us?': validatedData.hearAboutUs || '',
                }
              })
            }
          );

          if (!airtableResponse.ok) {
            console.error('Airtable sync failed:', await airtableResponse.text());
          }
        } catch (error) {
          console.error('Error syncing to Airtable:', error);
        }
      }

      res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromError(error);
        res.status(400).json({ error: validationError.toString() });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get("/api/inspection-requests", async (req, res) => {
    try {
      const requests = await storage.getInspectionRequests();
      res.json(requests);
    } catch (error) {
      console.error('Error fetching requests:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
