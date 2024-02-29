import { mdRequest } from '../index'

export const requestGetMdFile = (name) => {
  return mdRequest.get({
    url: `./md/${name}.md`
  })
}
