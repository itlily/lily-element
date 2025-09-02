import components from './components'
import { makeInstaller } from "./makeInstaller"

const installer = makeInstaller(components)
export * from '@lily-element/components'
export default installer