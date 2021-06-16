// XML HTTP Request ----------------------------------------------------------
const getPuzzleXMLHTTPRequest = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject('An error has taken place');
      }
    });
    request.open('GET', `//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// Fetch API ------------------------------------------------------------------
const getPuzzle = (wordCount) => {
  return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Unable to fetch the puzzle');
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

// Fetch API with Async and Await ---------------------------------------------
const getPuzzleAsync = async (wordCount) => {
  const res = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {});

  if (res.status === 200) {
    const data = await res.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle');
  }
};

// XML HTTP Request
// const getCountry = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.find((country) => country.alpha2Code === countryCode));
//       } else if (e.target.readyState === 4) {
//         reject('An error occuring during getting data');
//       }
//     });
//     request.open('GET', 'http://restcountries.eu/rest/v2/all');
//     request.send();
//   });

// Fetch API
const getCountry = (countryCode) => {
  return fetch('//restcountries.eu/rest/v2/all', {})
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Unable fetch countries from fetch api');
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
    });
};

const getCountryAsync = async (countryCode) => {
  const res = await fetch('//restcountries.eu/rest/v2/all', {});

  if (res.status === 200) {
    const data = await res.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable fetch countries from fetch api');
  }
};

const getLocation = () => {
  return fetch('//ipinfo.io/json?token=77e5d63e3a7dfc', {}).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Unable fetch getLocation data');
    }
  });
};

const getLocationAsync = async () => {
  const res = await fetch(`//ipinfo.io/json?token=77e5d63e3a7dfc`, {});

  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    throw new Error('Unable fetch getLocation data Async');
  }
};

const getCurrentCountryAsync = async () => {
  const location = await getLocationAsync();
  const country = await getCountryAsync(location.country);

  return country;
};

export { getPuzzleAsync as default };
