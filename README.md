# HomeFinder Lagos

A property listing website for Lagos with an admin dashboard, maps, photo galleries, an inquiry inbox and an AI assistant. Built as a demo for real estate agents.

**Live demo:** https://homefinder-lagos-demo.netlify.app

> Demo project. All listings, names and prices are fictional.

## Screenshots
<img width="1110" height="691" alt="image" src="https://github.com/user-attachments/assets/c32f9949-a340-4c87-b762-3e46fa192a95" />
<img width="370" height="521" alt="image" src="https://github.com/user-attachments/assets/6e55ec1f-4639-431f-b2c0-c5ec2b7163ac" />
<img width="370" height="521" alt="image" src="https://github.com/user-attachments/assets/a42b2729-14d9-40aa-93cf-eca7cc193f01" />




## What it does

**For visitors**
- Browse listings and filter by rent or sale, area, bedrooms and price
- Photo gallery on every property
- Map of all listings, and a world map that zooms down to each property's exact pin
- Send an inquiry or chat on WhatsApp
- Ask the AI assistant questions about a property

**For the owner and agents (admin dashboard)**
- Secure login, with the owner approving new agents
- Add, edit and delete listings, with photo upload
- Place the exact location by searching a street or clicking the map
- Inquiry inbox with Call and WhatsApp buttons and a new/contacted status
- Agents can only edit the listings they created

## Built with
- HTML, CSS and JavaScript
- Firebase Authentication and Cloud Firestore, with role-based security rules
- Cloudinary for photo storage and optimisation
- Leaflet and OpenStreetMap for maps and address search
- Cloudflare Workers and Workers AI for the chat assistant
- Netlify for hosting

## What I learned
- Designing role-based access with database security rules, so agents can only touch their own data
- Keeping secrets out of front-end code by putting the AI behind a small server
- Building the admin side so a client can run the site without a developer
