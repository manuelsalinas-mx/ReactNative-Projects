import React, { useState } from 'react'

export const useRefresh = () => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 3000)
    }


    return {
        refreshing,
        onRefresh
    }
}
