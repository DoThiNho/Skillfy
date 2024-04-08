export function formatNumber(number) {
    return new Intl.NumberFormat("en-US").format(number)
}

export const getMaxScrollLeft = (element) => {
    const maxScrollLeft = element.scrollWidth - element.clientWidth
    return maxScrollLeft
}