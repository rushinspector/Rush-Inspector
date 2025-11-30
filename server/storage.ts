import { type User, type InsertUser, type InspectionRequest, type InsertInspectionRequest, users, inspectionRequests } from "@shared/schema";
import { eq } from "drizzle-orm";
import { db } from "../db";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInspectionRequest(request: InsertInspectionRequest): Promise<InspectionRequest>;
  getInspectionRequests(): Promise<InspectionRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createInspectionRequest(request: InsertInspectionRequest): Promise<InspectionRequest> {
    const result = await db.insert(inspectionRequests).values(request).returning();
    return result[0];
  }

  async getInspectionRequests(): Promise<InspectionRequest[]> {
    return db.select().from(inspectionRequests).orderBy(inspectionRequests.createdAt);
  }
}

export const storage = new DatabaseStorage();
