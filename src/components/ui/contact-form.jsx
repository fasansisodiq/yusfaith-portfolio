import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { IconArrowRight, IconLoader } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(100, "Message must be at most 100 characters."),
});

export function ContactForm({ className }) {
  const formRef = React.useRef();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
        );

        toast("Message sent successfully!", {
          position: "bottom-right",
          style: {
            "--border-radius": "calc(var(--radius) + 4px)",
          },
        });

        form.reset();
      } catch (error) {
        toast("Failed to send message.", {
          description: error.text,
          position: "bottom-right",
        });
      }
    },
  });

  return (
    <div className={twMerge("w-full space-y-8", className)}>
      <form
        ref={formRef}
        id="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="text-white/70">
                    Name
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Your fullname"
                    autoComplete="off"
                    className="h-11.5 bg-card-foreground border border-white/10 px-4"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="text-white/70">
                    Email
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="your@email.com"
                    autoComplete="off"
                    className="h-11.5 bg-card-foreground border border-white/10 px-4"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <form.Field
            name="message"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name} className="text-white/70">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="min-h-[8.6rem] resize-none bg-card-foreground border border-white/10 px-4 rounded-lg"
                      aria-invalid={isInvalid}
                    />
                  </InputGroup>

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
      </form>

      <Field orientation="horizontal">
        {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button> */}
        <motion.Button
          whileTap={{ scale: 0.95 }}
          type="submit"
          form="contact-form"
          className="h-12 px-6 bg-white text-black rounded-full flex items-center gap-2 font-medium"
          disabled={form.state.isSubmitting}
        >
          {form.state.isSubmitting ? (
            <>
              <IconLoader className="animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <IconArrowRight />
            </>
          )}
        </motion.Button>
      </Field>
    </div>
  );
}
