/**
 * Generates a Microlink screenshot URL for a given website URL
 * Returns the direct image URL that can be used in img src
 */
export function getScreenshotUrl(url: string | undefined): string | null {
    if (!url) return null;

    const cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http')) return null;

    // Direct screenshot URL that returns the image via redirect
    // embed=screenshot.url makes it return just the image URL
    return `https://api.microlink.io?url=${encodeURIComponent(cleanUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}
