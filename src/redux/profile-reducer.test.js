import profileReducer, {addPostActionCreator} from './profile-reducer.js';

//1. Тестовые данные
let state = {
    postData: [
        { id: 1, message: 'Hi, how are you', count: 15 },
        { id: 2, message: 'It s my first post', count: 20 }
    ]
}

test('new post should be added', () => {
    //2. action
    let action = addPostActionCreator('Новая строка');
    let newState = profileReducer(state, action)

    //3.expect Ожидание
    expect(newState.postData.length).toBe(3);
});


