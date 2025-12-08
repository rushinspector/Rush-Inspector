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

      // Send data to Airtable
      if (process.env.AIRTABLE_ACCESS_TOKEN && process.env.AIRTABLE_BASE_ID && process.env.AIRTABLE_TABLE_NAME) {
        try {
          const airtableResponse = await fetch(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fields: {
                  'Full Name': validatedData.fullName,
                  'Agency/Brokerage': validatedData.companyName,
                  'Phone Number': validatedData.phoneNumber,
                  'Home Size (sq ft)': validatedData.sqFt || '',
                  'Inspection Address': validatedData.inspectionAddress,
                  'Inspection Date': validatedData.inspectionDate,
                  'Time of Inspection': validatedData.timeOfInspection,
                  'Add-ons': validatedData.addOns || '',
                  'Referred By': validatedData.hearAboutUs || '',
                }
              })
            }
          );

          if (!airtableResponse.ok) {
            const errorText = await airtableResponse.text();
            console.error('Airtable sync failed:', errorText);
            throw new Error(`Airtable sync failed: ${errorText}`);
          }
        } catch (error) {
          console.error('Error syncing to Airtable:', error);
          throw error;
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
