"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import {eq} from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNote(data: FormData) {
    const title = data.get("title") as string;
    const content = data.get("content") as string;

    if (!title || !content) {
        throw new Error("Title and content are required.");
    }

    await db.insert(notes).values({ title, content });
    revalidatePath("/notes");
    redirect("/notes");
}

//updateNote
export async function updateNote(id: number, data: FormData) {
    const title = data.get("title") as string;
    const content = data.get("content") as string;

    if (!title || !content) {
        throw new Error("Title and content are required.");
    }

    await db.update(notes).set({ title, content }).where(eq(notes.id, id));
    revalidatePath("/notes");
    redirect("/notes");
}

//deleteNote
export async function deleteNote(id: number) {
    await db.delete(notes).where(eq(notes.id, id));
    revalidatePath("/notes");
    redirect("/notes");
}