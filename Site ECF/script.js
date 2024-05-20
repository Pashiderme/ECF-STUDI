document.addEventListener('DOMContentLoaded', function() {
    // Ajoutez des écouteurs d'événements pour chaque habitat
    document.querySelectorAll('.habitat-section h3').forEach(sectionHeader => {
        sectionHeader.addEventListener('click', function() {
            // Récupérer l'ID de la section des animaux associée à cet habitat
            let habitatId = sectionHeader.parentElement.id + '-animals';
            let animalSection = document.getElementById(habitatId);

            // Basculer l'affichage de la section des animaux
            if (animalSection) {
                if (animalSection.style.display === 'block') {
                    animalSection.style.display = 'none';
                } else {
                    // Masquer toutes les sections d'animaux
                    document.querySelectorAll('.animal-section').forEach(section => {
                        section.style.display = 'none';
                    });
                    // Afficher la section des animaux de cet habitat
                    animalSection.style.display = 'block';
                }
            }
        });
    });
});

function showInfo(animalId) {
    // Gestion de l'affichage des descriptions des animaux spécifiques
    let desc = document.getElementById(animalId + '-desc');
    if (desc) {
        desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
    }
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Envoyer les données au serveur pour la connexion
    fetch('login_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert('Connexion réussie !');
            // Redirection ou mise à jour de l'interface utilisateur en fonction du rôle
            window.location.href = 'dashboard.html'; // Exemple de redirection
        } else {
            alert('Erreur de connexion : ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de la connexion.');
    });
}


// script.js

function createUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Envoyer les données à un serveur pour créer un utilisateur
    fetch('create_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, role })
    })
    .then(response => response.json())
    .then(data => {
        alert('Utilisateur créé avec succès !');
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de la création de l\'utilisateur.');
    });
}

function filterReports() {
    const animal = document.getElementById('filter-animal').value;
    const date = document.getElementById('filter-date').value;

    // Filtrer les comptes rendus
    // Implémentez ici la logique pour filtrer les comptes rendus
}

// Ajoutez les autres fonctions JavaScript nécessaires pour la gestion des entités


document.addEventListener('DOMContentLoaded', function() {
    fetch('load_animals.php')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data');
        data.forEach(animal => {
            container.innerHTML += `<p>ID: ${animal.id} - Nom: ${animal.name} - Habitat: ${animal.habitat} - Description: ${animal.description}</p>`;
        });
    })
    .catch(error => console.error('Error loading the animal data: ', error));
});
``
