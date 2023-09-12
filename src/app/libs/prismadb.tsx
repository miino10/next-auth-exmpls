import { PrismaClient } from "@prisma/client";

// Define a function to create the Prisma Client instance
const createPrismaClient = () => {
  return new PrismaClient();
};

// Define a type 'client' based on the return type of the function
type client = ReturnType<typeof createPrismaClient>;

// Use 'globalForPrisma' to ensure type safety for 'globalThis.prisma'
const globalForPrisma = globalThis as unknown as {
  prisma: client | undefined;
};

// Use 'client' to store the Prisma Client instance or create a new one if not present
const prismaClient = globalForPrisma.prisma ?? createPrismaClient();

// If not in production, assign the 'prismaClient' to 'globalForPrisma.prisma'
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prismaClient;
}

export default prismaClient;
