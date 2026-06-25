import { redirect } from "next/navigation";
import { defaultLocale } from "@/config/site";

/** EN is the primary language — send the bare root to it. */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
