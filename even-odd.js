function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("even size")
    }
    if(size % 2 === 1){
        console.log("odd size)
    }

}

evenSizedString("Dhaka")
evenSizedString("Dinazpur")
evenSizedString("kumillah")
evenSizedString("rajsahi")
evenSizedString("rangpur")