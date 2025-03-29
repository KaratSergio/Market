// Function to analyze the status of an ad based on the updatedAt date
export const getAdStatus = (updatedAt: string): string => {
  const updatedDate = new Date(updatedAt)
  const currentDate = new Date()
  const diffInDays =
    (currentDate.getTime() - updatedDate.getTime()) / (1000 * 60 * 60 * 24)

  switch (true) {
    case diffInDays <= 3:
      return 'New' // Return 'New' if the ad was updated within the last 3 days
    case diffInDays <= 10:
      return 'Active' // Return 'Active' if the ad was updated between 3 and 10 days ago
    default:
      return 'Old' // Return 'Old' if the ad was updated more than 10 days ago
  }
}
