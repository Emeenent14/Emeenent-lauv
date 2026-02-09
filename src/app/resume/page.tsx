"use client";

import { Button, Flex, Heading, Text } from "@once-ui-system/core";

export default function ResumePage() {
    return (
        <Flex
            fillWidth
            paddingTop="xl"
            paddingX="l"
            direction="column"
            horizontal="center"
            flex={1}
        >
            <Flex
                position="relative"
                as="section"
                overflow="hidden"
                fillWidth
                minHeight="0"
                maxWidth={68}
                direction="column"
                horizontal="center"
                flex={1}
            >
                <Flex
                    as="main"
                    direction="column"
                    vertical="center"
                    fillWidth
                    fillHeight
                    padding="l"
                    gap="l"
                >
                    <Flex mobileDirection="column" fillWidth gap="24">
                        <Flex
                            position="relative"
                            flex={2}
                            paddingTop="56"
                            paddingX="xl"
                        >
                            <iframe
                                src="/resume.html"
                                style={{
                                    width: "100%",
                                    height: "80vh",
                                    border: "none",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                }}
                                title="Resume"
                            />
                        </Flex>
                    </Flex>

                    <Flex horizontal="center" paddingY="l" gap="m">
                        <Button
                            href="/resume.html"
                            download="Franklin_Oguejiofor_Resume.html"
                            variant="primary"
                            size="l"
                            prefixIcon="document"
                        >
                            Download Resume
                        </Button>
                        <Button
                            href="/resume.html"
                            target="_blank"
                            variant="secondary"
                            size="l"
                            prefixIcon="arrowUpRightFromSquare"
                        >
                            Open in New Tab
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
