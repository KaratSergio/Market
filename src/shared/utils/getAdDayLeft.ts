// Function to calculate how many days ago the ad was updated
export const getAdDayLeft = (updatedAt: string): string => {
  const updatedDate = new Date(updatedAt)
  const currentDate = new Date()
  const diffInDays =
    (currentDate.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24)

  const roundedDiffInDays = Math.floor(diffInDays) // rounding down to the nearest day

  switch (roundedDiffInDays) {
    case 0:
      return 'Today' // If the ad was updated today
    case 1:
      return '1 day ago' // If the ad was updated 1 day ago
    default:
      return `${roundedDiffInDays} days ago` // For more than 1 day
  }
}
