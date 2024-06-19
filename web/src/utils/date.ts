export const formatTimeDifference = (targetDate: string, isClosed: boolean): string => {
  const endDate: Date = new Date(targetDate)
  const now: Date = new Date()
  const timeDiff: number = isClosed ? now.getTime() - endDate.getTime() : endDate.getTime() - now.getTime()
  const daysDiff: number = Math.ceil(timeDiff / (1000 * 3600 * 24))

  if (daysDiff >= 365) {
    const years: number = Math.floor(daysDiff / 365)
    return `${isClosed ? "Clôturée il y a" : "Se clôture dans"} ${years} ${years > 1 ? "ans" : "an"}`
  } else if (daysDiff >= 30) {
    const months: number = Math.floor(daysDiff / 30)
    return `${isClosed ? "Clôturée il y a" : "Se clôture dans"} ${months} ${months > 1 ? "mois" : "mois"}`
  } else if (daysDiff === 7) {
    return `${isClosed ? "Clôturée il y a" : "Se clôture dans"} 1 semaine`
  } else if (daysDiff >= 14) {
    const weeks: number = Math.floor(daysDiff / 7)
    return `${isClosed ? "Clôturée il y a" : "Se clôture dans"} ${weeks} ${weeks > 1 ? "semaines" : "semaine"}`
  } else {
    return `${isClosed ? "Clôturée il y a" : "Se clôture dans"} ${daysDiff} ${daysDiff > 1 ? "jours" : "jour"}`
  }
}

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }

  return new Date(dateString).toLocaleDateString("fr-FR", options)
}
