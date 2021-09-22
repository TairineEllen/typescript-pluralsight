function startGame() {
  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'; /*! = nonnull assertion operator*/
}

document.getElementById('startGame')!.addEventListener('click', startGame);