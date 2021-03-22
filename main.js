const randIndex = arr => Math.floor(Math.random() * arr.length)
let noun;
let verb;
let descriptor;
let adjective;
let phrase;
let object;
function scramble() {
    noun = nouns[randIndex(nouns)]
    verb = verbs[randIndex(verbs)]
    descriptor = descriptors[randIndex(descriptors)]
    adjective = adjectives[randIndex(adjectives)]
    phrase = phrases[randIndex(phrases)]
    object = objects[randIndex(objects)]
    return noun, verb, descriptor, adjective, phrase, object
}

const nouns = ['an ecstatic penguin', 'a depressed table', 'a cabbage', 'a hippo', 'a lazy anteater', 'a disturbed tree spirit', 'kyle']
const verbs = ['brush its teeth', 'sing', 'drive a car', 'paint', 'write a novel', 'compose a symphony', 'eat breakfast', 'attend dance classes']
const descriptors = ['blue eyes', 'a terrible haircut', 'seven toes', 'an incapacitated tortoise']
const adjectives = ['scared', 'terrified of bees', 'very bright pink', 'trapped in the wrong dimension']
const phrases = ['dead', 'Bob', 'Mildred the magnificent', 'lost', 'James']
const objects = ['an anglepoise lamp', 'great difficulty', 'hannibals elephants', 'a clinical midget', 'the worlds largest lollipop']

scramble()
let qs = ['How does ' + noun + ' ' + verb + ' ?', 'Why does ' + noun + ' ' + verb + ' ?', 'What do you call ' + noun + ' with ' + descriptor + ' ?', 'Why is ' + noun + ' ' + adjective + ' ?'] 

scramble()
answers = ['With ' + object, 'It has ' + object, phrase, 'It is ' + adjective]

index = randIndex(qs)
const q = qs[index]
const answer = answers[index]

console.log(q)
console.log(answer)