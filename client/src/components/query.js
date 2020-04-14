let catchPokemon = function (pokemon) {
  const query = `
    query {
      pokemon(name: "${pokemon}") {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
    `
}

module.exports = catchPokemon;