function generateDataItem(id) {
  return {
    id: id + 1,
    int: Math.floor(Math.random() * 1000000),
    float: parseFloat((Math.random() * 1000).toFixed(4)),
    color: getRandomColor(),
    child: {
      id: (Math.floor(Math.random() * id) + 1).toString(),
      color: getRandomColor()
    }
  };
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function collectResult(numberOfItems, startId) {
  const list = [];
  for(let i = 0; i < numberOfItems; i++) {
    const item = generateDataItem(startId + i);
    list.push(item);
  }
  return list;
}

self.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  self.postMessage(collectResult(data.num, data.id));
});
