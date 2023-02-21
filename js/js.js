
  const btn = document.querySelector('#btn');
  const inp = document.querySelector('#inp');
  const list = document.querySelector('.list');
  const firstLiBtn = document.querySelector('#getFirstLi');
  const lastLiBtn = document.querySelector('#getLastLi');
  const nextLiBtn = document.querySelector('#getNextLi');
  const prevLiBtn = document.querySelector('#getPrevLi');
  const deleteBtn = document.querySelector('#deleteBtn');


  btn.addEventListener('click', addElement);
  firstLiBtn.addEventListener('click', getFirstLi);
  lastLiBtn.addEventListener('click', getLastLi);
  nextLiBtn.addEventListener('click', getNextLi);
  prevLiBtn.addEventListener('click', getPrevLi);
  deleteBtn.addEventListener('click', removeLi);

  function getLastLi(){
			for(i=0;i<list.children.length;i++){
    list.children[i].classList.remove('redBg');
			}
  list.lastElementChild.classList.add('redBg');
		}


  function getFirstLi(){
			for(i=0;i<list.children.length;i++){
    list.children[i].classList.remove('redBg');
			}
  list.firstElementChild.classList.add('redBg');

		}

  function getNextLi(){
			for(i=0;i<list.children.length;i++){
				if (list.lastElementChild.classList.contains('redBg')) {
    list.lastElementChild.classList.remove('redBg');
  list.firstElementChild.classList.add('redBg');
  break;
				}
  if(list.children[i].classList.contains('redBg')){
    list.children[i].classList.remove('redBg');
  list.children[i].nextElementSibling.classList.add('redBg');
  break;
				}
				
			}
		}

  function getPrevLi(){
			
			for(i=0;i<list.children.length;i++){
				if (list.firstElementChild.classList.contains('redBg')) {
    list.firstElementChild.classList.remove('redBg');
  list.lastElementChild.classList.add('redBg');
  break;
				}
  if(list.children[i].classList.contains('redBg')){
    list.children[i].classList.remove('redBg');
  list.children[i].previousElementSibling.classList.add('redBg');
  break;
				}
			}
			
		}

  function removeLi(){
			for(i=0;i<list.children.length;i++){
				if(list.children[i].classList.contains('redBg')){
    list.children[i].remove()
  }
			}
		}

  function addElement(){
			if(inp.value != ''){
				const li = document.createElement('li');
  li.innerHTML = inp.value;
  list.appendChild(li);
  inp.value = '';
			}
			
		}


