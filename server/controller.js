const goals = require ('./db.json')
let globalID = 1

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A lifetime friend shall soon be made.", "A lifetime of happiness lies ahead of you.", "All will go well with your new project.", "All your hard work will soon pay off."];
      
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];
      
        res.status(200).send(randomFortune);
    },

    getInspire: (req, res) => {
        const inspireQuotes = ["'It's never too late to be what you might've been.' ―George Eliot.","'If you can dream it, you can do it.' ―Walt Disney.", "'Trust yourself that you can do it and get it.' ―Baz Luhrmann.", "'It’s hard to beat a person who never gives up.' —Babe Ruth", "'Do one thing every day that scares you.' ―Eleanor Roosevelt", "'Don’t be afraid to give up the good to go for the great.' —John D. Rockefeller"];
      
        let randomIndex3 = Math.floor(Math.random() * inspireQuotes.length);
        let randomInspire = inspireQuotes[randomIndex3];
      
        res.status(200).send(randomInspire);
    },

    getChallenge: (req, res) => {
        const challenge = ["Write a journal entry", "Try a restaurant you've never eaten at before", "Join a bookclub", "Write down a goal you will accomplish this week", "Bike 5 miles", "Meditate for 10 minutes", "Don't use social media for 24 hours", "Learn something new today", "Try a new recipe", "Write down 3 postiive things about yourself", "Look at yourself in the mirror and say 5 things you like about yourself out loud", "Write down 5 things you are grateful for", "Clean out/reorganize one space today"];
      
        let randomIndex4 = Math.floor(Math.random() * challenge.length);
        let randomChallenge = challenge [randomIndex4];
      
        res.status(200).send(randomChallenge);
    },

    createGoal: (req, res) => {
        const {goals} = req.body;
        let newGoal = {
            goals,
            id:globalID
        }

        goals.push(newGoal)
        globalID++
        res.status(200).send(newGoal)
    }



}