# Light Bites Storefront
Light Bites is a meal ordering service. Its mission is to provide its community with fresh, nutritious meal options for busy lifestyles.
## Front-End Design  
The front-end is a single-page application built using React JS. It is designed using Google's material design principles.  
 
## Back-End Design
The backend is made up of models for each aspect of the user experience. Customers have profiles and order histories stored in the database.  
The administrator can track fulfillment and delivery dates and keep up with inventory.  
  
Each model has routes that allow us to perform CRUD operations on specific entries of each table.  
## Technologies Used
Front-End: React JS with Material-UI  
Back-End:  
- RESTful API built Node.JS with ExpressJS
- MySQL and Sequelize
## Issues
- Managing the user session with state has been a challenge.
## Future Work
- User Authentication
    - Redux with localStorage to manage user session
- Administrator Suite
- Taking complete advantage of our relational database to create a unified user experience
## Development Team
- Kevin Henderson
- Justin Mozley
- Anthony Duncan
- Owais Jamil
## Scripts
Clone the repo and run:  
`npm install`  
For development, run:  
`npm run start:dev`