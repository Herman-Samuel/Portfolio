# Portfolio

Source code for my personal portfolio website, designed and developed by Samuel Herman.

**Live site:** [samuelrherman.com](https://samuelrherman.com)

## About

I built this site to present my IT and cybersecurity background in one place: my projects, my certifications, and my resume. I started it in May 2025, launched it in June 2025, and have kept updating it since. The code is written by hand in HTML, CSS, and JavaScript, with no site builder or template.

## Features

- **Responsive layout** that works on desktop and mobile screens
- **Light/dark theme toggle**
- **Animated logo** that assembles my initials when the site first loads
- **Click-to-enlarge** main image
- **Image galleries** on the About Me and Internship pages
- **Working contact form** that sends messages to my email through the [Web3Forms](https://web3forms.com) API, with success and error feedback for the visitor
- **Resume and credentials** available to view or download as PDFs

## Pages

| Page | Description |
| --- | --- |
| Home | Landing page with a picture, Linkedin, certification badge, and contact form |
| About Me | Background, experience, and interests |
| Projects | Home lab, college internship, and this website |
| Resume | Current resume, diploma, and certificates |
| Internship | Details of my FSCJ networking internship |

## Tech stack

- HTML5
- CSS3
- JavaScript
- Web3Forms API (contact form email delivery)
- Hosted through NameCheap

## Project structure

```
Portfolio/
├── css/          # Stylesheets
├── docs/         # Resume, degree, and certificate PDFs
├── img/          # Images
├── js/           # Scripts: contact form, image gallery, logo animation, main js file, picture overlay
├── pages/        # About Me, Projects, Resume, and Internship pages
├── index.html    # Home page
```

## Skills practiced

- DOM manipulation and event handling
- Asynchronous requests with `fetch` and Promises (contact form), including error handling
- Responsive CSS layout
- Animation with JavaScript
- Structuring and maintaining a multi-page static site

## Running locally

This is a static site with no build step. Clone the repository and open `index.html` in a browser. The contact form needs an internet connection and a Web3Forms access key of your own to send messages.

## Related project

[Home Lab Infrastructure](https://github.com/Herman-Samuel/homelab-infrastructure): a segmented, enterprise-style home network built with OPNsense, with full change-management documentation.

## Contact

Use the contact form on [samuelrherman.com](https://samuelrherman.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/herman-samuel).
