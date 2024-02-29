const modules = import.meta.glob('../../public/md/*.md')
console.log(modules)
const names = []
if (modules) {
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      let name = key.split('.md')[0].split('/')[key.split('.md')[0].split('/').length - 1]
      console.log(name)
      names.push(name)
    }
  }
}

export default names
