import {PrismaClient} from "@prisma/client";
import process from "process";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db;
}