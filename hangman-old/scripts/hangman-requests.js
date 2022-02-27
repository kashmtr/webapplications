/* PROMISES PUZZLE CODE
const getPuzzleOldOld = (wordCount) => new Promise((resolve,reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange',(e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('ERROR')
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}) 
*/
/* FETCH PUZZLE CODE 
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
} 
*/

/* PROMISES COUNTRY CODE

const getCountryOld = (countryCode) => new Promise((resolve,reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('FETCH DATA ERROR')
        }
    })
    countryRequest.open('GET', 'https://restcountries.com/v2/all')
    countryRequest.send()
})
*/

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ('puzzle await unsuccesful')
    }
} 

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error ('country await unsuccesful')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=ef99272506197f')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error ('location await unsuccesful')
    }
    
}