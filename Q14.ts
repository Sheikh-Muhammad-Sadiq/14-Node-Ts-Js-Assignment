// 14.Guest list: If you could invite anyone, Living or deceased, to dinner, who would you invite? Make a 
// list that includes at least three people you'd like to invite to dinner. Then use your list to print
// a message to each person, inviting them to dinner.

let guestArr: string[] = ["Salman", "Shahrukh", "Bilal", "Zain"]

guestArr.map((item) => (
    console.log(`Dear ${item},You are Invited to a Dinner`)
))