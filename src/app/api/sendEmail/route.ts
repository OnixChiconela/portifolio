// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.me.com',
        port: 587,
        secure: false, // Set to true if using port 465 or 587 with TLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    

    transporter.verify((error, success) => {
        if (error) {
            console.log("Erro de conexão:", error);
        } else {
            console.log("Conexão com o servidor SMTP bem-sucedida.");
        }
    });
    

    console.log("Email:", process.env.EMAIL_USER);
    console.log("Password:", process.env.EMAIL_PASS);


    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // E-mail de destino
        subject: `Nova mensagem de ${name}`,
        html: message,
        replyTo: email
    };

    console.log("From ", email)

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email enviado com sucesso!" }, { status: 200 });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json({ error: "Falha ao enviar o email." }, { status: 500 });
    }
}