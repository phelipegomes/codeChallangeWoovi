let valuesObject = []

let values = [{
    id: 1,
    tag: "Pix",
    cashback: false,
    avista: false,
    totalValue: 30500,
    currentValue: 30500
}];

for (let i = 1; i < 8; i++) {
    let obj = { ...values[0] };
    obj.id = i;
    if (obj.id === 1) {
        obj.avista = true
    } else {
        obj.tag = "Pix Parcelado"
    }

    if (i === 4) {
        obj.cashback = true;
    }
    obj.currentValue = parseFloat((obj.totalValue / obj.id).toFixed(2));
    valuesObject.push(obj);
}

export default valuesObject;
