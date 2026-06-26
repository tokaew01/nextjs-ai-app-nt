"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { 
  Field, 
  FieldContent, 
  FieldError, 
  FieldGroup, 
  FieldLabel 
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema, ContactFormValues } from "@/lib/validations/contact";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const result = await response.json();

        if (!result.success) {
          toast.error(result.error);
          return;
        }

        toast.success("ส่งข้อความสำเร็จ!");
        setIsSubmitted(true);
        form.reset();
      } catch (error) {
        toast.error("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้ง");
      }
    });
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-8">
        <CheckCircle className="w-12 h-12 text-green-500" />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">ส่งข้อความเรียบร้อยแล้ว</h3>
          <p className="text-muted-foreground">เราจะติดต่อกลับหาคุณโดยเร็วที่สุด</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="mt-4"
        >
          ส่งข้อความอีกครั้ง
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel>ชื่อ</FieldLabel>
          <FieldContent>
            <Input 
              placeholder="กรอกชื่อของคุณ" 
              {...form.register("name")} 
            />
            <FieldError errors={form.formState.errors.name?.types ? Object.values(form.formState.errors.name.types).map(msg => ({ message: String(msg) })) : undefined} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input 
              type="email" 
              placeholder="example@email.com" 
              {...form.register("email")} 
            />
            <FieldError errors={form.formState.errors.email?.types ? Object.values(form.formState.errors.email.types).map(msg => ({ message: String(msg) })) : undefined} />
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel>ข้อความ</FieldLabel>
          <FieldContent>
            <Textarea 
              rows={5} 
              placeholder="พิมพ์ข้อความที่ต้องการ..." 
              {...form.register("message")} 
            />
            <FieldError errors={form.formState.errors.message?.types ? Object.values(form.formState.errors.message.types).map(msg => ({ message: String(msg) })) : undefined} />
          </FieldContent>
        </Field>
      </FieldGroup>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            กำลังส่ง...
          </>
        ) : (
          "ส่งข้อความ"
        )}
      </Button>
    </form>
  );
}
