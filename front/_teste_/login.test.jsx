const { fillLogin, verifyInputs, loginUser } = require('../src/components/loginForm/index')


jest.mock('../src/components/loginForm/index', () => {
    return jest.fn().mockImplementation(() => {
        return {
            loginUser: jest.fn().mockReturnValue("teste")
        }
    })
})

describe('Validate login', () => {
    it('testing validation users', () => {
        const login = loginUser()
        expect(loginUser).toBe('teste')
    })

    it('testing VerifyInputs', () => {
        expect(waitSeconds(1.5)).resolves.toBe('waited 1.5 seconds');
    })

    it('testing loginUser', () => {
        waitSeconds(0.5).then((response) => {
            expect(response).toBe('waited 0.5 seconds')
        })
    })

    it('testing fillLogin', (done) => {
        waitSeconds(0.8).then((response) => {
            expect(response).toBe('waited 0.8 seconds')
            done()
        })
    })
})