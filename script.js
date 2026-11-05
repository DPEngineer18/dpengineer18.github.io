const body = document.body;
const name = document.getElementById('name');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FADE_MS = reduceMotion ? 0 : 800;   

function unlock() {
  if (!body.classList.contains('locked')) return;  

  name.classList.add('hidden');                    

  setTimeout(() => {
    body.classList.remove('locked');                 
    body.classList.add('unlocked');                  
    name.classList.remove('hidden');            
  }, FADE_MS);
}

name.addEventListener('click', unlock);
name.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    unlock();
  }
});