import React from 'react'

export default React.createContext({
    auditions: [],
    casting: [],
    addAudition: () => {},
    addCasting: () => {},
    editAudition: () => {},
    editCasting: () => {},
    deleteAudition: () => {},
    handleLoginSuccess: () => {}
  })