const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const inspireBtn = document.getElementById("inspireButton")

const getInspire = () => {
    axios.get("http://localhost:4000/api/inspire/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

inspireBtn.addEventListener('click', getInspire)

const challengeBtn = document.getElementById("challengeButton")

const getChallenge = () => {
    axios.get("http://localhost:4000/api/challenge/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

challengeBtn.addEventListener('click', getChallenge)

const goalInput = document.getElementById('addGoal')
const goalBtn = document.getElementById("goalSubmit")

const createGoal = () => {
    const goal = goalInput.value;

    axios.post("http://localhost:4000/api/goal/", {
        goal,
    })
    .then((response) => {
        console.log(response);
    })
}

goalBtn.addEventListener('click', createGoal)

