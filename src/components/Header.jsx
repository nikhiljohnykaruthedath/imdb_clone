import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

export default function Header() {
	return (
		<div className="flex justify-between items-center p-3 mx-auto max-w-6xl">
			<div className="flex gap-4">
				<MenuItem title="home" address="/" Icon={AiFillHome} />
				<MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
			</div>
			<Link href={"/"} className="flex gap-1 items-center">
				<span className="bg-amber-500 text-2xl font-bold py-1 px-2 rounded-lg">
					IMDb
				</span>
				<span className="text-xl sm:inline hidden">Clone</span>
			</Link>
		</div>
	);
}
