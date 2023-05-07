const config = {
    baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
    headers: {
      authorization: '93861ead-2876-4823-8ff1-f57f368682cc',
      'Content-Type': 'application/json'
    }
  }

function  getResponseData(res) {
    if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
} 

export const deleteCard = function(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: config.headers
          })
      .then(function(res) {
        return getResponseData(res);
      })
}

export const deleteLike = function(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: config.headers
          })
      .then(function(res) {
        return getResponseData(res);
      })
}

export const putLike = function(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: config.headers
          })
      .then(function(res) {
        return getResponseData(res);
      })
}

export const getInitialCards = function() {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(function(res) {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(res.status);
      })
  }

  export const getUser = function() {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers
    })
    .then(function(res) {
      return getResponseData(res);
    })
  }

  export const patchUser = function(name, profession) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
    .then(function(res) {
        return getResponseData(res);
    })
  }

  export const postCard = function(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(function(res) {
        return getResponseData(res);
    })
  }

export const patchAvatar = function(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar: link
        })
      })
      .then(function(res) {
        return getResponseData(res);
      })
}

export function placeLoading(buttonElement, start) {
    if (start) {
        buttonElement.value = "Сохранение...";
    } else {
        buttonElement.value = "Создать";
    }
}

export function profileLoading(buttonElement, start) {
    if (start) {
        buttonElement.value = "Сохранение...";
    } else {
        buttonElement.value = "Сохранить";
    }
}

export function avatarLoading(buttonElement, start) {
    if (start) {
        buttonElement.value = "Сохранение...";
    } else {
        buttonElement.value = "Сохранить";
    }
}