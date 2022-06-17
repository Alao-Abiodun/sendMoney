import {User} from '../../../src/db/models'
import * as userDal from '../../../src/db/dal/user'

const dbTeardown = async () => {
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 0")
    await User.truncate({force: true})
    await User.sequelize?.query("SET FOREIGN_KEY_CHECKS = 1")
}

describe('Ingredient DAL', () => {
    let ingredientId: number
    beforeAll(async () => {
        await dbTeardown()

        ;({id: ingredientId} = await User.create({
            name: 'Beans',
            email: '', // email is required
            password: '', // password is required
        }))
    })

    afterAll(async () => {
        await dbTeardown()
    })

    describe('Create method', () => {
        it('should create and return an object of ingredient details', async () => {
            const payload = {
                name: 'Pasta',
                email: 'abbey',
                password: '123456',
            }
            
            const ingredient = await userDal.create(payload)

            expect(ingredient).not.toBeNull()
        })
    })
})