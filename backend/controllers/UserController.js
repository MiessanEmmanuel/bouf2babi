
import { readFile, writeFile } from "node:fs/promises"

const pathDB = "storage/users.json"

const getUsers = async () => {
    const users = await readFile(pathDB, { encoding: "utf8" })
    return JSON.parse(users)
}

const writeUsers = async (data) => {
    await writeFile(pathDB, JSON.stringify(data), null, 2)
}


export const index = async (req, res) => {
    const users = await getUsers()

    /* res.render('users/users', { users: users }) */
    res.json(users)
}
/**
 * Vue pour la creation d'un nouvel user
 * 
 */
export const create = (req, res) => {
    res.render('users/create')
}

/**
 * creation d'un nouvel user
 * 
 */
export const store = async (req, res) => {
    const users = await getUsers()
    const newUser = { id: Date.now(), name: req.body.name }

    const usersChanged = [newUser, ...users]

    await writeUsers(usersChanged)

    res.redirect('/users')
}

export const edit = async (req, res) => {
    const users = await getUsers();
    const user = users.filter(user => user.id === parseInt(req.params.id))

    if (user.length !== 0) {
        res.render('users/edit', { id: user[0].id, name: user[0].name })
        return
    }
    res.redirect('/users')

}

export const update = async (req, res) => {
    const users = await getUsers();
    const idUser = parseInt(req.params.id)
    const user = users.filter(user => user.id === idUser)

    if (user.length !== 0) {
        const newName = req.body.name
        users.filter(user => {
            if (user.id === idUser) {
                user.name = newName
            }
        }
        )
        await writeUsers(users)
        res.redirect('/users')
        return
    }
    res.redirect(`/users/edit/${req.params.id}`)


}

export const show = (req, res, id) => {

}

export const destroy = (req, res) => {

}