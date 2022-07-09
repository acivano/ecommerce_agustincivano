
export function priceFormat(numero) {
return (Math.round((numero * 100)) / 100).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
});; 
};
