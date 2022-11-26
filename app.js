const sum = (a,b) =>{
    return a + b;
    }
    
    console.log(sum(7,3));
    
    const fromEuroToDollar = function(eu){
        let dolar = eu*1.2;
        return dolar
    }
    
    const fromDolarToYen = function(dolar){
        let yenes = dolar*106.5
        return yenes;
    }
    
    const fromYenToGbp = function(yenes){
        return GBP = yenes*0.006;
          
    }
    
    module.exports = {
        sum,
        fromEuroToDollar,
        fromDolarToYen,
        fromYenToGbp
    
    };
    