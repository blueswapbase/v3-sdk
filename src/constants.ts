export const FACTORY_ADDRESS = '0xBd6a46B9a3a78B90564CfeC571a28F1e48D5D15a'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const POOL_INIT_CODE_HASH = '0xc06ea7170d17d7b220964f45219791e4648609d0209666ebb378b8b083d9361d'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
