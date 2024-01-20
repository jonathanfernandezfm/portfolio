import { siteConfig } from "@/config/site";
import * as gtag from "@/lib/gtag";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Next.js", "React", "Tailwind CSS", "Server Components", "TBD"],
	authors: [
		{
			name: "Jonathan Fernández Mertanen",
			url: "https://jonathanfernandezfm.com/",
		},
	],
	creator: "Jonathan Fernández Mertanen",
	metadataBase: new URL("https://jonathanfernandezfm.com/"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [`${siteConfig.url}/og.jpg`],
		creator: "TBD",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			{/* <Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gtag.GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                            });
                        `,
					}}
				/>
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
				/>
			</Head> */}
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
