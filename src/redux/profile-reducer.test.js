import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 11},
        {id: 2, message: 'Its my first post', likesCount: 14},
    ]
}

it('new post should be added', () => {
    let action = addPostActionCreator('text of New Post');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

it('new post text should be "text of new Post"', () => {
    let action = addPostActionCreator('text of New Post');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('text of New Post');
})

it('likes count of new post should be 0', () => {
    let action = addPostActionCreator('text of New Post');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].likesCount).toBe(0);
})