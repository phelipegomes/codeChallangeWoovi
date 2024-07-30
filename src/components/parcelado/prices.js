let valuesObject = [{
    id: 1,
    tag: "Pix",
    cashback: false,
    totalValue: 30500,
    currentValue: 30500
}];

for (let i = 2; i < 8; i++) {
    let newObject = { ...valuesObject[0] };
    newObject.id = i;
    if (newObject.id > 1) {
        newObject.tag = "Pix Parcelado"
    }
    if (i === 4) {
        newObject.cashback = true;
    }
    newObject.currentValue = parseFloat((newObject.totalValue / newObject.id).toFixed(2));
    valuesObject.push(newObject);
}

console.log(valuesObject)
export default valuesObject;
