import {Op} from 'sequelize'
import {isEmpty} from 'lodash'

import {User} from '../models'
import {GetAllUsersFilters} from './types'
import {UserInput, UserOutput} from '../models/User'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload)

    return user
}
