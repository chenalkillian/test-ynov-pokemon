/**
 * Devoir mis à jour pour l'étude de cas du 08/11/2024 - Elyes Ghouaiel avec Killian Chenal
 */

const Pokemon = require('../modèle/Pokemon')
const sequelize = require('../databse/database');
const { name } = require('../modèle/Pokemon');
const { where } = require('sequelize');

// Fonction pour créer ou mettre à jour la table Pokemon dans la base de données
exports.creatTab = async (req, res) => {
    await sequelize.sync({ alter: true });
    res.status(200).json("table Pokemon créer")
}

// Fonction pour ajouter un nouveau Pokémon à la base de données
exports.addData = async (req, res) => {
    const { name, type } = req.body

    await Pokemon.create({ name: name, type: type })

    return res.status(200).json("creation reussi ")
}

// Fonction pour supprimer un Pokémon de la base de données
exports.Delete = async (req, res) => {
    const { id } = req.body;

    try {
        const deletedPokemon = await Pokemon.destroy({
            where: { id: id }
        });

        if (deletedPokemon === 0) {
            return res.status(404).json({ message: "Pokémon non trouvé" });
        }

        return res.status(200).json({ message: "Pokémon supprimé avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression du Pokémon:", error);
        return res.status(500).json({ message: "Erreur serveur lors de la suppression du Pokémon" });
    }
};

// Fonction pour récupérer tous les Pokémon de la base de données
exports.ShowAll = async (req, res) => {
    const pokemon = await Pokemon.findAll();
    return res.status(200).json(pokemon);
}

// Fonction pour modifier un Pokémon existant dans la base de données
exports.updatePokemon = async (req, res) => {
    const { id, name, type } = req.body;

    try {
        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon non trouvé" });
        }

        await pokemon.update({ name, type });

        return res.status(200).json({ message: "Pokémon modifié avec succès", pokemon });
    } catch (error) {
        console.error("Erreur lors de la modification du Pokémon:", error);
        return res.status(500).json({ message: "Erreur serveur lors de la modification du Pokémon" });
    }
};

// Fonction pour récupérer les détails d'un Pokémon spécifique
exports.Detailpokemon = async (req, res) => {
    try {
        const { id } = req.body;

        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(404).json({ message: "Pokémon non trouvé" });
        }

        return res.status(200).json(pokemon);
    } catch (error) {
        console.error("Erreur lors de la récupération du détail du Pokémon:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};

/**
 * Ce code représente un contrôleur pour gérer les opérations CRUD (Create, Read, Update, Delete) 
 * sur les Pokémon dans une base de données. Chaque fonction exportée correspond à une opération 
 * spécifique et gère les requêtes HTTP associées. Les commentaires ajoutés expliquent brièvement 
 * le rôle de chaque fonction.
 */