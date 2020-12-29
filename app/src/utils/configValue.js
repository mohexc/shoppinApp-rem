const configValue = (type, user) => {
    let config
    switch (type) {
        case 'config':
            config = {
                headers: { 'Content-Type': 'application/json' },
            }
            break;
        case 'authConfig':
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
            }
            break;
        case 'authConfigNoContentType':
            config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            }
            break;

        default:
            break;
    }
    return config

}

export default configValue
