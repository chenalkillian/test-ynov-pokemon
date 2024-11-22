/**
 * Devoir mis à jour pour l'étude de cas du 08/11/2024 - Elyes Ghouaiel avec Killian Chenal
 */

const express = require('express')
const Route = express.Router()
const pokemon = require('../controller/Pokemoncontroller')

// Route pour créer ou mettre à jour la table Pokemon
Route.get('/create', pokemon.creatTab)

// Route pour ajouter un nouveau Pokémon
Route.post('/add', pokemon.addData)

// Route pour récupérer tous les Pokémon
Route.get('/showall', pokemon.ShowAll)

// Route pour supprimer un Pokémon
Route.post('/delete', pokemon.Delete)

// Route pour mettre à jour un Pokémon existant
Route.put('/update', pokemon.updatePokemon)

// Route pour récupérer les détails d'un Pokémon spécifique
Route.post('/detail', pokemon.Detailpokemon)

module.exports = Route

/**
 * Ce fichier définit les routes de l'API pour les opérations CRUD sur les Pokémon.
 * Chaque route est associée à une fonction spécifique du contrôleur Pokémon.
 * Les routes gèrent les différentes requêtes HTTP (GET, POST, PUT) pour interagir avec la base de données des Pokémon.
 */