'use client'
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className=" text-white mx-auto px-4 relative   sm:w-full lg:w-full inline-block max-w-lg text-center justify-center ">
				<h1 className={title()}>Hellow! welcome to my &nbsp;</h1>
				<h1 className={title({ color: "green" })}> Web3&nbsp;</h1>
				<br />
				<h1 className={title()}>
				 portfolio page.
                I am  developer on blockchain ethereum
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					
					href={"/blog"}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
				 start
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={"https://github.com/Gaetan2023"}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			
		</div>
	);
}
