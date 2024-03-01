import { mdRequest } from '../index'

export const requestGetMdFile = (key, name) => {
  return mdRequest.get({
    url: `./md/${key}/${name}.md`
  })
}
