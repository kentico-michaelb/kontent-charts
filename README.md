# Kentico Kontent Dynamic Charts

[![Netlify Status](https://api.netlify.com/api/v1/badges/aed954dc-5189-415f-9b86-b2ca2391ced4/deploy-status)](https://app.netlify.com/sites/kontent-charts/deploys) <br>
[Click here to see the Live Demo](https://kontent-charts.netlify.app/).

This application demonstrates how to use [Kentico Kontent headless CMS](https://kontent.ai/) and [ChartJS](https://www.chartjs.org/docs/latest/) to create line and bar graphs using a headless CMS. This project is using the [Kentico Kontent JavaScript Delivery SDK](https://github.com/Kentico/kontent-delivery-sdk-js) and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites
* [Node and npm](https://nodejs.org/en/)
* [Kentico Kontent account](https://app.kontent.ai)

## Kentico Kontent setup

### Creating your sample Chart project using the [Template Manager](https://kentico.github.io/kontent-template-manager/import-from-file)
1. Sign in to your [Kentico Kontent account](https://app.kontent.ai)
1. [Create a new project](https://docs.kontent.ai/tutorials/set-up-projects/manage-projects/managing-projects#a-creating-projects)
1. In Kentico Kontent, choose Project settings from the app menu
1. Under Development, choose API keys and copy the Project ID
1. Paste the copied ID into the Project ID input on the [Template Manager](https://kentico.github.io/kontent-template-manager/import-from-file)
1. Enable the Management API and repeat step 5 with the Management API key and Template Manager input field
1. Drop the [project export package](https://github.com/kentico-michaelb/kontent-charts/blob/master/exports/kontent-backup-20-8-2020-9-4.zip) onto the Template Manager
1. Click "Prepare import data"
1. Click "Proceed with import"
1. Proceed to "Connecting to your project" instructions below

## Application setup

### Setting up the application
To run the app:
1. Clone the app repository with your favorite GIT client
1. Open the project in Visual Studio Code
1. Follow instructions below to connect to your Kontent project
1. Run `npm install` and `npm start` in the terminal to install dependencies and run the React application locally

### Connecting to your project

1. In Kentico Kontent, choose Project settings from the app menu
1. Under Development, choose API keys 
    1. You will need the **Project ID** key from your newly created project
1. Open the `~\kontent-charts\src\config.js` file
1. Use the values from your Kentico Kontent project to replace the sample project ID in the `config.js` file:
```javascript
import { DeliveryClient } from '@kentico/kontent-delivery';

export const client = new DeliveryClient({projectId: 'your-project-id'});
```
5. Save the changes

## Available Scripts

In the project directory, you can run:

#### `npm install` 

Installs all the requiered dependencies.

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### Testing chart creation in your project
Wiki instructions coming soon! 
