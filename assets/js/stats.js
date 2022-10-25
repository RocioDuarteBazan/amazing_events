const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')

async function statsJson() {
  try {
    var eventsApi = await fetch('https://mh-amazing.herokuapp.com/amazing')
    eventsApi = await eventsApi.json()
    console.log(eventsApi);
  } catch (error) {
    console.log(error);
  }

  allEvents = eventsApi.events
  pastCards = eventsApi.events.filter(event => event.assistance)
  upcomingCards = eventsApi.events.filter(event => event.estimate)

  allEvents.map(event => {
    event.percentageAssistance = 100 * event.assistance / event.capacity
    event.revenue = event.price * event.assistance
  })

  pastCards.map(event => {
    event.gain = event.price * event.assistance
    event.percentage = 100 * event.assistance / event.capacity
  })

  upcomingCards.map(event => {
    event.percentageAssistance = 100 * event.estimate / event.capacity
    event.revenue = parseInt(event.price) * parseInt(event.estimate)
  })

  let capEvents = [...allEvents].sort((a, b) => a.capacity - b.capacity)
  let maxCapEvent = capEvents[capEvents.length - 1]

  let percAssisEvent = [...pastCards].sort((a, b) => a.percentageAssistance - b.percentageAssistance)
  let minPercAssi = percAssisEvent[0]
  let maxPercAssi = percAssisEvent[percAssisEvent.length - 1]

  let filterCategory = new Set(pastCards.map(event => event.category))
  filterCategory = [...filterCategory]
  
  let dateCategory = [...new Set(allEvents.map(event => event.category))]
  let upcomingCategory = [...new Set(upcomingCards.map(event => event.category))]

  dateCategory.forEach(element => {
    let capacity = 0
    let assistance = 0
    let revenues = 0
    pastCards.forEach(event => {
      if (event.category === element) {
        capacity += event.capacity
        assistance += event.assistance
        revenues += event.revenue
      }
    })
    table3.innerHTML += `<tr>
                              <td class="p-1 text-td">${element}</td>
                              <td class="p-1 text-td">${revenues.toLocaleString('de-DE')}</td>
                              <td class="p-1 text-td">${Math.round(assistance * 100 / capacity)}%</td>
                        </tr>`
  });

  upcomingCategory.forEach(element => {
    let capacity = 0
    let estimate = 0
    let revenues = 0
    upcomingCards.forEach(event => {
      if (event.category === element) {
        capacity += event.capacity
        estimate += event.estimate
        revenues += event.revenue
      }
    })
    table2.innerHTML += `<tr>
                            <td class="p-1 text-td">${element}</td>
                            <td class="p-1 text-td">${revenues.toLocaleString('de-DE')}</td>
                            <td class="p-1 text-td">${Math.round(estimate * 100 / capacity)}%</td>
                          </tr>`
  });

  table1.innerHTML += `<tr>
                          <td class="p-1 text-td">${maxPercAssi.name}: ${maxPercAssi.percentageAssistance}%</td>
                          <td class="p-1 text-td">${minPercAssi.name}: ${minPercAssi.percentageAssistance}%</td>
                          <td class="p-1 text-td">${maxCapEvent.name}: ${parseInt(maxCapEvent.capacity).toLocaleString('de-DE')}</td>
                        </tr>`
}
statsJson()







