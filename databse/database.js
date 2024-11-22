const { Sequelize } = require('sequelize');

// Création de l'instance Sequelize pour la connexion à la base de données Render
const sequelize = new Sequelize('pokemon_u8w6', 'pokemon_u8w6_user', 'ArlwnozgfcIBkXv0g4YM6yW1B3Wn9DOu', {
  host: 'dpg-ct03sra3esus7385tnq0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Utilisez cette option si vous rencontrez des problèmes de certificat SSL
    }
  }
});

// Test de la connexion
sequelize.authenticate()
  .then(() => {
    console.log("Authentification réussie à la base de données Render");
  })
  .catch(err => {
    console.error("Erreur de connexion à la base de données Render:", err);
  });

module.exports = sequelize;