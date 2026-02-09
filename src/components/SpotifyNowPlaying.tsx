"use client";

import { useEffect, useState } from "react";
import { Row, Text, Icon } from "@once-ui-system/core";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
}

export function SpotifyNowPlaying() {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/spotify");
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                }
            } catch (error) {
                console.error("Failed to fetch Spotify data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();
        // Refresh every 30 seconds
        const interval = setInterval(fetchNowPlaying, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <Row gap="s" vertical="center">
                <SiSpotify size={20} color="#1DB954" />
                <Text variant="body-default-s" onBackground="neutral-weak">Loading...</Text>
            </Row>
        );
    }

    if (!data || !data.isPlaying) {
        return (
            <Row gap="s" vertical="center">
                <SiSpotify size={20} color="#1DB954" />
                <Text variant="body-default-s" onBackground="neutral-weak">Not playing</Text>
            </Row>
        );
    }

    return (
        <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
        >
            <Row gap="s" vertical="center" style={{ cursor: "pointer" }}>
                <SiSpotify size={20} color="#1DB954" />
                <Row gap="xs" vertical="center" style={{ overflow: "hidden" }}>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-strong"
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "200px"
                        }}
                    >
                        {data.title}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">—</Text>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "150px"
                        }}
                    >
                        {data.artist}
                    </Text>
                </Row>
            </Row>
        </a>
    );
}
