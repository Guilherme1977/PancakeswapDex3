import { useEffect, useState } from 'react'

export const useCustomIccPrice = () => {
  const [iccPrice, setIccPrice] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.pancakeswap.info/api/v2/tokens/0x8d672014fb107cb409dccd9042dda3b97313f4c3`)
        const responseData: any = await response.json()
        // console.log(responseData)
        setIccPrice(responseData.data.price)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setIccPrice])

  return iccPrice
}
