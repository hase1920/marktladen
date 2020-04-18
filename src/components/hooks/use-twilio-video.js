import React, {createContext, useContext, userReducer} from 'react'

const DEFAULT_STATE = {
    dname:""
   
}

const reducer = (state, action) => {
    switch(action.type){
      case 'join':
          return {...state, dname:action.namesetzen} 
      default: 
          return DEFAULT_STATE
        }
}

const TwilioVideoContext = createContext()
const TwilioVideoProvider = ({children}) => (
    <TwilioVideoContext.Provider value={userReducer(reducer,DEFAULT_STATE)}>
        {children}
    </TwilioVideoContext.Provider>
)

export const wrapRootElement=({element}) => (
<TwilioVideoProvider>{element}</TwilioVideoProvider>
)

const useTwilioVideo = () => {
    const [state, dispatch] = useContext(TwilioVideoContext)
    return {state, dispatch}
}
export default useTwilioVideo
