import { getPosts } from "@/utils/utils";
import { baseURL, person, blog } from "@/resources";

export async function GET() {
    const posts = getPosts(["src", "app", "blog", "posts"]);

    const itemsXml = posts
        .map(
            (post) =>
                `<item>
          <title><![CDATA[${post.metadata.title}]]></title>
          <link>${baseURL}/blog/${post.slug}</link>
          <guid isPermaLink="true">${baseURL}/blog/${post.slug}</guid>
          <description><![CDATA[${post.metadata.summary || ""}]]></description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
          <author>${person.email} (${person.name})</author>
        </item>`
        )
        .join("\n");

    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${blog.title}</title>
    <link>${baseURL}/blog</link>
    <description>${blog.description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

    return new Response(rssFeed, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
    });
}
