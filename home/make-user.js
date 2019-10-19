export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        agent: formData.get('agent'),
        complete: {}
    };

    return user;
}

export const newMakerUser = (formData) => ({
    name: formData.get('name'),
    agent: formData.get('agent'),
    complete: {}
});