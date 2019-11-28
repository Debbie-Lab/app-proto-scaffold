import path from 'path'
import accessible, { isDirectory } from './accessible'

const resolve = (file) => path.resolve(__dirname, file)

test('utils@func -> accessible', () => {
  expect(accessible(resolve('accessible.js'))).toBe(true)
  expect(accessible(resolve('accessible.js'), resolve('accessible.spec.js'))).toBe(true)
  expect(accessible(resolve('accessible_not_exist.js'))).toBe(false)
})

test('utils@func -> accessible -> isDirectory', () => {
  expect(isDirectory(__dirname)).toBe(true)
  expect(isDirectory(resolve('not_exist'))).toBe(false)
})
