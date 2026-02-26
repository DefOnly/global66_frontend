export const formatRate = (value, locale = 'es-CL') => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

export const formatDateTime = (isoString, locale = 'es-CL') => {
  const date = new Date(isoString)

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  const timeFormatter = new Intl.DateTimeFormat('es-CL', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  })

  return {
    date: dateFormatter.format(date),
    time: timeFormatter.format(date)
  }
}
