// const sinon = require('sinon');
// const { expect } = require('chai');
// const firebase = require('firebase/firestore');

// // const db = require('./connection');
// const QuestionModel = require('../../app/models/Question');

// describe('Teste camada service de Question', () => {
//   describe('Listar todas as questions', () => {
//     const payloadQuestion = {
//       title: 'Quantas pessoas tem sua equipe?',
//       answer: '1 até 3',
//     }

//     const payloadQuestion2 = {
//       title: 'Qual a sua satisfação com a empresa?',
//       answer: '10'
//     }

//     const fakeSnapshot = {
//       docs: [
//         { data: () => payloadQuestion },
//         { data: () => payloadQuestion2 },
//       ],
//     }

//     beforeEach(() => {
//       sinon.stub(firebase, 'collection').resolves({});
//       sinon.stub(firebase, 'getDocs').resolves(fakeSnapshot);
//     });

//     afterEach(() => {
//       firebase.collection.restore();
//       firebase.getDocs.restore();
//     });

//     describe('Quando a busca é realizada com sucesso', () => {
//       it('Retorna um array', async () => {
//         const response = await QuestionModel.getAll();

//         expect(response).to.be.an('array');
//       })

//       it('O array possui as questões que estão no banco de dados', async () => {
//         const response = await QuestionModel.getAll();

//         expect(response[1].title).to.be.equal(payloadQuestion2.title);
//       })
//     })
//   })

//   // describe('Insersão de uma question no banco de dados', () => {
//   //   const payloadQuestion = {
//   //     title: 'Quantas pessoas tem sua equipe?',
//   //     answer: '1 até 3',
//   //   }

//   //   beforeEach(() => {
//   //     sinon.stub(QuestionModel, 'create').resolves(payloadQuestion);
//   //   });

//   //   afterEach(() => {
//   //     QuestionModel.create.restore();
//   //   });

//   //   describe('Quando o title informado é inválido', () => {
//   //     const invalidQuestion = {
//   //       title: 'Invalid title',
//   //       answer: '1 até 3',
//   //     }

//   //     it('Retorna um objeto', async () => {
//   //       const response = await QuestionModel.create(invalidQuestion);

//   //       expect(response).to.be.a('object');
//   //     })

//   //     it(`A chave message do objeto possui a mensagem "title" must be one of [${questionsType.join(', ')}]`, async () => {
//   //       const response = await QuestionModel.create(invalidQuestion);

//   //       expect(response.message).to.be
//   //         .equal(`"title" must be one of [${questionsType.join(', ')}]`);
//   //     })
//   //   })

//   //   describe('Quando a answer informada é inválida', () => {
//   //     const invalidQuestion = {
//   //       title: 'Quantas pessoas tem sua equipe?',
//   //       answer: 'Invalid answer',
//   //     }

//   //     it('Retorna um objeto', async () => {
//   //       const response = await QuestionModel.create(invalidQuestion);

//   //       expect(response).to.be.a('object');
//   //     })

//   //     it(`A chave message do objeto possui a mensagem "answer" must be one of [${answersType.join(', ')}]`, async () => {
//   //       const response = await QuestionModel.create(invalidQuestion);

//   //       expect(response.message).to.be
//   //         .equal(`"answer" must be one of [${answersType.join(', ')}]`);
//   //     })
//   //   })

//   //   describe('Quando o payload é válido', () => {
//   //     it('Retorna um objeto', async () => {
//   //       const response = await QuestionModel.create(payloadQuestion);
//   //       expect(response).to.be.a('object');
//   //     })

//   //     it('O objeto possui uma chave question com um objeto com as chaves title e answer', async () => {
//   //       const response = await QuestionService.create(payloadQuestion);

//   //       expect(response).to.have.a.key('question');
//   //       expect(response.question).to.have.a.key('title', 'answer');
//   //     })
//   //   })
//   // })
// });