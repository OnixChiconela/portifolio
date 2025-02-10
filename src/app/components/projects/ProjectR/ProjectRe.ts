import { Project } from "@/app/types";


export const projectR: Project =
{
    id: 1,
    title: "Restaurant Listing and Reservation Platform",
    coverImage: "/properties/page_cover.png",
    description: `A platform focused on restaurants and more individual food business, allowing individuals of legal age to create listings 
    for their spaces, and enabling people of acceptable age to make reservations. The primary goal is to increase visibility for small, medium, and large establishments, connecting people with new places and culinary experiences
    .`,

    fun1: "Authentication",
    fun1Image1: "/properties/auth/logged-out.png",
    fun1Image2: "/properties/auth/logged-in.png",
    fun1Description: ` Security is a core focus of the platform, achieved through user registration and 
    authentication. Users can authenticate locally using email, with future possibilities for phone-based authentication. 
    Additionally, options for online authentication via Google, Apple, and Facebook are planned. These methods will offer users convenient access to their listings, reservations, personal information, and more. As sensitive data 
    is involved, I have planned to integrate robust tools to ensure data protection and privacy. Further details will 
    be provided in the next stages.`,

    fun2: "Create and Manage Your Listings",
    fun2Image1: "/properties/listing/add_listing.png",
    fun2Image2: "/properties/listing/manage_listings.png",
    fun2Description: `Eligible users can create listings and make updates, provided their identity is confirmed for security. 
    Once verified, users can set up a listing to attract visitors. 
    The listing creation process has three stages:
    `,

    stages: [
        "Stage 1: Define the type and location of the establishment.",
        "Stage 2: Add the title, description, images, and available amenities.",
        "Stage 3: Specify table types, any primary rules (e.g., reservation fees, operating hours), and complete the setup.",
    ],

    fun3: "Create Reservation",
    fun3Image1: "/properties/reservation/create-reservation.png",
    fun3Image2: "/properties/reservation/reservations.png",
    fun3Description: `To make a reservation, users need to meet the age requirement and provide some basic information. 
    I’ve streamlined the process to be 
    user-friendly: simply choose the desired location, add a few reservation details, and the reservation is set!.
    Oops but plans can change, then you can altere date, hour or even table type, after check-in you can left your 
    thoughts about your refection, that's means it's easy to manage your reservation but you must considere your host
    rules
    `,

    summary: ` Here are the core technical aspects of the project:

    For the backend, I used the NestJS framework, built on Node.js, and incorporated tools like BCRYPT for password encryption 
    to minimize user account exposure in case of attacks. Additionally, JWT was implemented for secure authentication, and MongoDB 
    was chosen for data storage.

    On the frontend, I utilized Expo (React Native) to design the UI and integrate it with the API. This application is designed to be 
    available on both Android and iOS, ensuring it reaches the largest possible audience. The backend service will be deployed on AWS, 
    providing scalability and reliability. `,

    tecnicalSummary: "Typescript, JavaScript, Nest JS, Mongo DB, RESTful api, JWT, Prisma, others",
    tecnicalFront: `TypeScript, Expo, React Native, Java`,

    impact: `This project has been impactful for me personally, as it has significantly enhanced both my technical and interpersonal skills. 
    I had the opportunity to learn from more experienced professionals, which contributed greatly to my growth.

I have always believed that one of the best ways to gain experience is by creating something that has a meaningful impact on people's lives.
 This belief motivated me to dedicate myself fully to this project, from system design and interface creation to the development phase.

Once, I heard someone say, "Achieving perfection is almost impossible, but in everything we do, we must have it in mind." 
This mindset has guided me throughout the journey of building this project`,

    userImpact: `I hope this project has a positive impact on users, whether they are restaurant hosts or visitors.
    The main goal is to provide visibility to small, medium, and large establishments while also connecting people to new gastronomic experiences and exciting new places.`,

    impactSlogan: "Connecting People to New Experience"
}






