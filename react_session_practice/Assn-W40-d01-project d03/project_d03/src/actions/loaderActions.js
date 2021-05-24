import { loaderTypes } from '../actionTypes'

const loaderActions = {
    start: () => ({type: loaderTypes.start}),
    stop: () => ({type: loaderTypes.stop})
}

export default loaderActions;