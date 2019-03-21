function add(a, b) {
  return parseInt(a) - parseInt(b)
}

if (!process.argv[2] || !process.argv[3]) {
  console.log('Necesitamos 2 argumentos')
} else {
  console.log('La resta de ambos argumentos es => ', add(process.argv[2], process.argv[3]))
}