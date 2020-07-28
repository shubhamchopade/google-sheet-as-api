fetch('https://spreadsheets.google.com/feeds/cells/1wc5q9nXG56DB79SSzGdjJba8JdwbXEZWtGNcnfbIWto/od6/public/basic?alt=json')
.then(response => response.json())
.then(data => sheetData(data))

// data.feed.entry[0].content.$t
// let sheetData = (data) => console.log(data.feed.entry.map(num => num.content.$t))

let sheetData = (data) => console.log(data)
