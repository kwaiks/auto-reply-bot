const { dockStart } = require('@nlpjs/basic');

let dock;
let nlp;


const initialize = async () => {
    dock = await dockStart({ use: ['Basic']});
    nlp = dock.get('nlp');
    await nlp.addCorpus('./utils/corpus.json');
    await nlp.train();
}

const ask = async (lang, question) => {
    const response = await nlp.process(lang, question);
    console.log(response)
    return response.answer;
}

module.exports = {
    bot: nlp,
    initialize,
    ask
}