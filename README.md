# Notesify

### Catch 'em all while you study for your next exam.

Notesify rewards your hard work with a gamified twist at the end of each note-taking session. Based on the notes you have taken, you will have a chance to encounter one of the original 151 pokemon.

Can you catch them all?

### Installation 

To run the backend, you'll have to install [Maven](https://maven.apache.org/download.cgi) and set up a [MongoDB](https://www.mongodb.com/) database.

In `notes/src/main/resources`, set up your `.env` file following `.env.example`.

Once the Mongo credentials is set up and Maven is installed. Run the following in the terminal at the project root.

```
cd notes
mvn spring-boot:run
```

To start the frontend, use these commands in a terminal from the project root. You will have to run two terminals simultaneously for the front and backend.

```
cd frontend
npm run start
```

Congrats, the program can now be accessed at `locaLhost:3000`!