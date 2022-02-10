let count = 101

console.log(count);

document.querySelector('#app1').addEventListener('click', function() {
  this.textContent = count++
})