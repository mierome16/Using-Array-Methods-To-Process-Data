const avg = items.reduce(function(a,b) {
    return a + b.price
}, 0) / items.length
const answer1 = `The average price is $${avg.toFixed(2)}`

document.querySelector("#answer1").innerHTML = answer1


const ques2 = items.filter(function(item) {
    if (item.price > 14 && item.price < 18) {
        return true
    } else {
        return false
    }
}).map(function(a) {
  return a.title;
}).join("\n");
const answer2 = ques2

document.querySelector("#answer2").innerHTML = answer2



let ques3 = items.filter(function(curr) {
    if(curr.currency_code === "GBP") {
        return true
    } else {
          return false
    }
}).map(function(x) {
    return x.title + " costs £" + x.price
}).join()
const answer3 = ques3

document.querySelector("#answer3").innerHTML = answer3



let ques4 = items.filter(function(make) {
    if (make.materials.includes("wood")) {
        return true
    } else {
        return false
    }
  }).map(function(a) {
      return a.title
  }).join("\n");
const answer4 = ques4

document.querySelector("#answer4").innerHTML = answer4




let ques5 = items.filter(function (mats) {
    if (mats.materials.length >= 8) {
        return true
    } else {
        return false
    }
}).map(function (m) {
    return m.title + " has " + m.materials.length + " materials: \n" + m.materials.join("\n"); 
}).join("\n")
const answer5 = ques5

document.querySelector("#answer5").innerHTML = answer5



let ques6 = items.filter(function(makers) {
    if (makers.who_made.includes("i_did")){
        return true
    } else {
        return false
    }
}).length
const answer6 = ques6

document.querySelector("#answer6").innerHTML = `${answer6} were made by their sellers`



