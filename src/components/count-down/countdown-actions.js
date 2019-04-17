const countdownActions = dispatcher =>
    ({
        tick(currentCount) {
            dispatcher.handleAction({
                type: 'TICK' //action
            })
        },
        reset(count) {
            dispatcher.handleAction({
                type: 'RESET', //action
                count
            })
        }
    })

export default countdownActions;