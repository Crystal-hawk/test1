let currentIndex = 0;

function getOffset(element){
    let rect = element.getBoundingClientRect();
    return{
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX 
    }
}

function centerJumpingBlock(target) {
    let jumpingBlock = document.getElementById('jumpingBlock'); 
 
    if(target){
        let targetOffset = getOffset(target);
        let jumpingBlockWidth = jumpingBlock.offsetWidth;
        let jumpingBlockHeight = jumpingBlock.offsetHeight;
        let left = targetOffset.left -170;
        let top = targetOffset.top;
        jumpingBlock.style.left = `${left}px`;
        jumpingBlock.style.top = `${top}px`;
    }      
}
function checkScroll(){
    let targets = document.querySelectorAll('.targetBlock');
    if(currentIndex < targets.length){
        let targetOffset = getOffset(targets[currentIndex])
    
        if(targetOffset.top <= window.scrollY + window.innerHeight && targetOffset.top + targets[currentIndex].offsetHeight > window.scrollY) {
            centerJumpingBlock(targets[currentIndex]);
            currentIndex++;
        }
    }
}
function UpdateJumpingBlockPosition(){
    let targets = document.querySelectorAll('.targetBlock')
    centerJumpingBlock(targets[currentIndex]);
}
window.onload = UpdateJumpingBlockPosition;
window.onresize = UpdateJumpingBlockPosition;
window.onscroll = checkScroll;

// document.addEventListener('DOMContentLoaded', () => {
// 	const jumpingBlock = document.getElementById('jumpingBlock')
// 	const sections = document.querySelectorAll('section')
// 	let currentSectionIndex = 0

// 	function moveBlock() {
// 		const scrollPosition = window.scrollY
// 		const windowHeight = window.innerHeight

// 		sections.forEach((section, index) => {
// 			const sectionTop = section.offsetTop
// 			const sectionBottom = sectionTop + section.offsetHeight

// 			if (
// 				scrollPosition >= sectionTop - windowHeight / 2 &&
// 				scrollPosition < sectionBottom - windowHeight / 2
// 			) {
// 				if (currentSectionIndex !== index) {
// 					currentSectionIndex = index
// 					section.appendChild(jumpingBlock)
// 				}
// 			}
// 		})
// 	}

// 	window.addEventListener('scroll', moveBlock)
// 	moveBlock()
// })