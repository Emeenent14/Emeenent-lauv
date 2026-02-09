"use client";

import { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { Column, Row, Text } from "@once-ui-system/core";

interface CommandOutput {
    command: string;
    output: string[];
}

const commands: Record<string, string[]> = {
    help: [
        "Available commands:",
        "  about     - About me",
        "  skills    - My tech stack",
        "  projects  - View projects",
        "  contact   - Get in touch",
        "  social    - Social links",
        "  clear     - Clear terminal",
        "  exit      - Close terminal",
    ],
    about: [
        "╔═══════════════════════════════════════════════════╗",
        "║  Franklin Oguejiofor (Emeenent)                   ║",
        "║  Full Stack Developer                             ║",
        "╠═══════════════════════════════════════════════════╣",
        "║  Building fintech, SaaS, and automation systems   ║",
        "║  React in the morning, Django/NestJS at night.    ║",
        "║  Deploying in between.                            ║",
        "╚═══════════════════════════════════════════════════╝",
    ],
    skills: [
        "Languages:   TypeScript, JavaScript, Python, Rust",
        "Frontend:    React, Next.js, Tailwind CSS",
        "Backend:     Django, NestJS, Express, DRF",
        "Database:    PostgreSQL, MongoDB, Redis",
        "DevOps:      Docker, AWS, GitHub Actions, Nginx",
    ],
    projects: [
        "Featured Projects:",
        "",
        "  🔐 SafeSwap    - Escrow-based fintech platform",
        "  🔄 Relay       - MCP gateway for AI clients",
        "  📊 E-Tax       - Tax automation platform",
        "  🏠 LeaseLog    - Property management system",
        "",
        "Type 'open <project>' to visit (coming soon)",
    ],
    contact: [
        "Get in touch:",
        "",
        "  📧 Email:    foguejiofor14@gmail.com",
        "  📱 WhatsApp: +234 906 650 7858",
        "",
        "Or use the contact form on the site!",
    ],
    social: [
        "Find me online:",
        "",
        "  GitHub:   github.com/Emeenent14",
        "  LinkedIn: linkedin.com/in/chukwuemeka-franklin-54a02334b",
        "  Twitter:  x.com/Emeenent14",
    ],
};

export function TerminalPortfolio({ onClose }: { onClose: () => void }) {
    const [history, setHistory] = useState<CommandOutput[]>([
        {
            command: "",
            output: [
                "Welcome to Franklin's Terminal Portfolio v1.0.0",
                "Type 'help' for available commands.",
                "",
            ],
        },
    ]);
    const [currentInput, setCurrentInput] = useState("");

    const processCommand = useCallback((cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        if (trimmedCmd === "clear") {
            setHistory([]);
            return;
        }

        if (trimmedCmd === "exit") {
            onClose();
            return;
        }

        const output = commands[trimmedCmd] || [
            `Command not found: ${cmd}`,
            "Type 'help' for available commands.",
        ];

        setHistory((prev) => [...prev, { command: cmd, output }]);
    }, [onClose]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            processCommand(currentInput);
            setCurrentInput("");
        }
    };

    useEffect(() => {
        const handleEscape = (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <Column
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    height: "500px",
                    backgroundColor: "#1a1a2e",
                    borderRadius: "12px",
                    border: "1px solid #333",
                    overflow: "hidden",
                }}
            >
                {/* Terminal Header */}
                <Row
                    style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "#16213e",
                        borderBottom: "1px solid #333",
                    }}
                    horizontal="space-between"
                    vertical="center"
                >
                    <Row gap="s">
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "#ff5f56",
                                cursor: "pointer",
                            }}
                            onClick={onClose}
                        />
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "#ffbd2e",
                            }}
                        />
                        <div
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "#27c93f",
                            }}
                        />
                    </Row>
                    <Text variant="label-default-s" onBackground="neutral-weak">
                        franklin@portfolio ~ bash
                    </Text>
                    <div style={{ width: "60px" }} />
                </Row>

                {/* Terminal Body */}
                <Column
                    style={{
                        flex: 1,
                        padding: "1rem",
                        overflowY: "auto",
                        fontFamily: "var(--font-code)",
                    }}
                >
                    {history.map((item, idx) => (
                        <Column key={idx} style={{ marginBottom: "0.5rem" }}>
                            {item.command && (
                                <Row gap="s">
                                    <Text
                                        variant="code-default-s"
                                        style={{ color: "#27c93f" }}
                                    >
                                        franklin@portfolio:~$
                                    </Text>
                                    <Text variant="code-default-s" onBackground="neutral-strong">
                                        {item.command}
                                    </Text>
                                </Row>
                            )}
                            {item.output.map((line, lineIdx) => (
                                <Text
                                    key={lineIdx}
                                    variant="code-default-s"
                                    onBackground="neutral-medium"
                                    style={{ whiteSpace: "pre" }}
                                >
                                    {line}
                                </Text>
                            ))}
                        </Column>
                    ))}

                    {/* Input Line */}
                    <Row gap="s" vertical="center">
                        <Text variant="code-default-s" style={{ color: "#27c93f" }}>
                            franklin@portfolio:~$
                        </Text>
                        <input
                            type="text"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            style={{
                                flex: 1,
                                background: "transparent",
                                border: "none",
                                outline: "none",
                                color: "white",
                                fontFamily: "var(--font-code)",
                                fontSize: "0.875rem",
                            }}
                        />
                    </Row>
                </Column>
            </Column>
        </div>
    );
}

// Hook to toggle terminal with keyboard shortcut
export function useTerminalShortcut() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            // Ctrl + ` or Cmd + ` to toggle terminal
            if ((e.ctrlKey || e.metaKey) && e.key === "`") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return { isOpen, setIsOpen };
}
