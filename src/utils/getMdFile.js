const modules = import.meta.glob('../../public/md/*/*.md')
console.log(modules)
const names = {}
if (modules) {
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      let name = key.split('.md')[0].split('/')[key.split('.md')[0].split('/').length - 1]
      let type = key.split('.md')[0].split('/')[key.split('.md')[0].split('/').length - 2]
      // console.log(name, type)
      if (names[type]) {
        names[type].push(name)
      } else {
        names[type] = [name]
      }
      console.log(names)
    }
  }
}

export default names
