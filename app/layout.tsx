import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import * as THREE from 'three';
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	 

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body	className="bg-gradient-to-tl from-black via-zinc-700/20 to-black">
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
            <main  className=" overflow-y-scroll">
							{children} 
							
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://www.linkedin.com/in/gaetan-musinde-99b59b272/"
								title="Portfolio Homepage"
							>
								<span className="text-default-600">Designed</span>
								<p className="text-primary">Gaetan_Musinde</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
