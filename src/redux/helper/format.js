function formatBrl(value){
	return Intl.NumberFormat('pt-BR').format(value);
}

function formatFloat(quantity, price){
	const valor = (quantity * parseFloat(price.replace('.','').replace(',', '.'))).toFixed(2);
	return formatBrl(valor);

}
function getTotal(total, item) {
	return total + parseFloat(item.totalAmount.replace('.','').replace(',','.'));
}

export {formatFloat, getTotal, formatBrl};