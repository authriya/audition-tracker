import TokenService from './token-service'
import config from '../config'

const AuditionsApiService = {
  getAuditions() {
    return fetch(`${config.API_ENDPOINT}/auditions`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(([auditions]) =>
        (!auditions.ok)
          ? auditions.json().then(e => Promise.reject(e))
          : auditions.json()
      )
  },
  getAudition(auditionId) {
    return fetch(`${config.API_ENDPOINT}/auditions/${auditionId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCasting() {
    return fetch(`${config.API_ENDPOINT}/casting`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getACasting(castingId) {
    return fetch(`${config.API_ENDPOINT}/casting/${castingId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(([casting]) =>
        (!casting.ok)
          ? casting.json().then(e => Promise.reject(e))
          : casting.json()
      )
  },
  postAudition(audition) {
    return fetch(`${config.API_ENDPOINT}/auditions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        audition
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCasting(casting) {
    return fetch(`${config.API_ENDPOINT}/casting`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        casting
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  patchAudition(audition, auditionId) {
    return fetch(`${config.API_ENDPOINT}/auditions/${auditionId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        audition
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  patchCasting(casting, castingId) {
    return fetch(`${config.API_ENDPOINT}/casting/${castingId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        casting
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  deleteAudition(auditionId) {
    fetch(`${config.API_ENDPOINT}/audition/${auditionId}`, {
      method: 'DELETE'
    })
  }
}

export default AuditionsApiService