import { useEffect } from "react"

function useScroll (loading, setToggleRefresh, viewportPercent) {
    useEffect(() => {
        if (!loading) {
            const onScroll = () => {
                const scrollTop = document.documentElement.scrollTop
                const scrollHeight = document.documentElement.scrollHeight
                const clientHeight = document.documentElement.clientHeight
                if (scrollTop + clientHeight >= scrollHeight * viewportPercent) {
                    setToggleRefresh(prev => !prev)
                }
            }

            window.addEventListener('scroll', onScroll)
            return () => window.removeEventListener('scroll', onScroll)
        }
    }, [loading])
}

export default useScroll