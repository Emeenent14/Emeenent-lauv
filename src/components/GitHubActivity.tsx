"use client";

import GitHubCalendar from "react-github-calendar";
import { Column, Text } from "@once-ui-system/core";

interface GitHubActivityProps {
    username: string;
}

export function GitHubActivity({ username }: GitHubActivityProps) {
    return (
        <Column gap="m" fillWidth>
            <Text variant="heading-strong-m">GitHub Activity</Text>
            <div style={{
                width: "100%",
                overflowX: "auto",
                padding: "1rem 0"
            }}>
                <GitHubCalendar
                    username={username}
                    colorScheme="dark"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={14}
                    style={{
                        width: "100%",
                    }}
                />
            </div>
        </Column>
    );
}
