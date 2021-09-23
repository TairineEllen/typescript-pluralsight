function startGame() {
  let playerName: string = 'Tairine';  
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'; /*! = nonnull assertion operator*/
}

function logPlayer(name: string): void {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
