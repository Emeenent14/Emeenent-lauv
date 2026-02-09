"use client";

import { useState, FormEvent } from "react";
import { Column, Row, Text, Input, Button, Textarea } from "@once-ui-system/core";

interface ContactFormProps {
    formspreeId?: string;
}

export function ContactForm({ formspreeId = "YOUR_FORMSPREE_ID" }: ContactFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <Column gap="m" padding="l" background="surface" radius="l" border="neutral-alpha-weak" fillWidth>
                <Text variant="heading-strong-m" onBackground="brand-strong">Message Sent! ✓</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                </Text>
                <Button variant="secondary" onClick={() => setStatus("idle")}>
                    Send Another Message
                </Button>
            </Column>
        );
    }

    return (
        <Column gap="l" fillWidth>
            <form onSubmit={handleSubmit}>
                <Column gap="m" fillWidth>
                    <Input
                        id="contact-name"
                        label="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <Input
                        id="contact-email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <Textarea
                        id="contact-message"
                        label="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        lines={5}
                    />
                    <Row gap="m" horizontal="end">
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? "Sending..." : "Send Message"}
                        </Button>
                    </Row>
                    {status === "error" && (
                        <Text variant="body-default-s" onBackground="danger-strong">
                            Something went wrong. Please try again or email me directly.
                        </Text>
                    )}
                </Column>
            </form>
        </Column>
    );
}
