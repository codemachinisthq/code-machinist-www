import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.enum(["mobile", "web", "desktop", "design", "api", "cloud", "ai", "other"]),
  budget: z.enum(["under-5k", "5k-20k", "20k-50k", "50k-plus"]),
  message: z.string().min(20).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // ─── Wire up your email provider here ───
    // Example with Resend:
    // import { Resend } from "resend";
    // import { CONTACT_EMAIL, NOREPLY_EMAIL } from "@/lib/site";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: NOREPLY_EMAIL,
    //   to: CONTACT_EMAIL,
    //   subject: `New project enquiry from ${data.name}`,
    //   html: `<p><strong>From:</strong> ${data.name} (${data.email})</p>
    //          <p><strong>Company:</strong> ${data.company ?? "N/A"}</p>
    //          <p><strong>Service:</strong> ${data.service}</p>
    //          <p><strong>Budget:</strong> ${data.budget}</p>
    //          <p><strong>Message:</strong><br />${data.message}</p>`,
    // });

    // Placeholder: log to console in dev
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", data);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
