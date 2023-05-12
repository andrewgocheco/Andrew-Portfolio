import React from "react"
import Link from "next/link";

interface LinkButtonProps {
    link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
    return (
        <section id="ProjectLink">
            <div className="flex flex-row items-center justify-center animate-fadeIn animation-delay-1 md:flex-row md:space-x-4 md:text-left mb-10">
                <div className="md:w-1/5" id="Link">
                    <Link href={link} target="_blank">
                    <p className="bg-gray-200 px-4 py-2 mr-2 text-gray-500 rounded font-semibold font-Satoshi text-center">
                        Learn More
                    </p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LinkButton
