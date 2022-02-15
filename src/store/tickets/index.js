import { sortBy } from "lodash"

export default {
    state: () => ({
        allTickets: [
            // { status: 'open' }
        ],
    }),
    mutations: {
        addTicket(state, values) {
            state.allTickets.push(values)
        },
        updateTicket(state, values) {
            state.allTickets = state.allTickets.map(row => {
                if (values.consumer_name == row.consumer_name) {
                    return {
                        ...row,
                        ...values
                    }
                } else {
                    return row
                }
                // console.log(values.consumer_name == row.consumer_name)
            })
        },
    },
    getters: {
        sortedTickets({ allTickets }) {
            return sortBy(allTickets, 'status').reverse()
        },
    },
}