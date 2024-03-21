import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "IMDB Clone",
	description: "This is a movie db clone",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers default="system" attribute="class">
					<Header />
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
