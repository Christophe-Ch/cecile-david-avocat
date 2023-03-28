# Cécile David Avocat

This website has been developed for Maitre Cécile David.

## Hosting and architecture

This project is to be deployed on Google Cloud. This repository will hold workflows to automatically build and deploy this project to Google Cloud.

This project is divided into two parts:
- the website, built using **Angular 14** and hosted with **Cloud Run**.
- a **Cloud Function** acting as an endpoint to send messages through the contact form of the website.

The cloud function takes advantage of Google Cloud's **Recaptcha Enterprise** technology to prevent bots from sending spam through the contact form.