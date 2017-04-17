var Draw = {
    drawVerdade(verdades) {

    },
    drawConsequencia(consquencias) {

    },

    drawPlayer(players, jogadorAnterior) {
        var numSorteado = Math.floor(Math.random() * players.length); 
        while(players[numSorteado] == jogadorAnterior){
            numSorteado = Math.floor(Math.random() * players.length);  
        }
        return players[numSorteado];
    },
};

module.exports = Draw;