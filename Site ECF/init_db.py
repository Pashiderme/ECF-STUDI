import sqlite3

# Connexion à la base de données SQLite
conn = sqlite3.connect('zoo_arcadia.db')
cursor = conn.cursor()

# Lecture des commandes SQL depuis le fichier
with open('database.sql', 'r') as file:
    sql_script = file.read()

# Exécution des commandes SQL
cursor.executescript(sql_script)

# Fermeture de la connexion
conn.commit()
conn.close()

print("Base de données initialisée avec succès.")
