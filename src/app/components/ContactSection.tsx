'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from 'react-toastify'; // 
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
            } else {
                toast.error('Failed to send the email. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred while sending the email.');
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <section className="grid md:grid-cols-2 my-0 md:my-0 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Get in touch</h5>
                <p className="text-[#f0f0f0] mb-4 max-w-md">
                    I&apos;m looking for new experiences both professional and personal, you can reach me just
                    to say hi, I&apos;ll try my best to get back to you :{")"}
                </p>
                <div className="socials flex flex-row gap-5">
                    <Link href={"https://github.com/OnixChiconela"} className="flex flex-col gap-2 items-center">
                        <Image src={"/github.svg"} width={40} height={40} alt="" />
                        <text className="text-white font-semibold">Github</text>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/jose-chiconela-507941286/"} className="flex flex-col gap-2 items-center">
                        <Image src={"/LinkedIn_icon.svg.webp"} width={40} height={40} alt="" />
                        <text className="text-white font-semibold">Linkedin</text>
                    </Link>
                    <Link href={"https://www.instagram.com/onix_chiconela"} className="flex flex-col gap-2 items-center">
                        <Image src={"/instagram.png"} width={40} height={40} alt="" />
                        <text className="text-white font-semibold">Instagram</text>
                    </Link>
                </div>
            </div>

            <div>
                <h5 className="text-xl font-bold text-white my-2">Send me an Email</h5>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 p-2 rounded"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="
                        bg-blue-500 
                        text-white p-2 rounded
                        bg-gradient-to-r
                        from-black
                        via-fuchsia-900
                        to-gray-900"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
