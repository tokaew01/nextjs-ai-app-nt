import { connection } from "next/server";
import "server-only";
import type { Course } from "@/types/course";

type CourseApiResponse = {
  data: Course[];
  meta: {
    status: string;
    status_code: number;
  };
};

const COURSE_API_URL = "https://api.codingthailand.com/api/course";

export async function getCourses(): Promise<Course[]> {
  await connection();

  const response = await fetch(COURSE_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch courses: ${response.status}`);
  }

  const json: CourseApiResponse = await response.json();

  return json.data;
}
