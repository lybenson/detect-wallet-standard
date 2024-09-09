import { AppReadyEvent, Wallet } from './app-ready'

const walletsSet = new Set<Wallet>()

// const requiresFeatures = [
//   'standard:connect',
//   'standard:events',
//   'sui:signTransactionBlock'
// ]

const register = (wallet: Wallet) => {
  walletsSet.add(wallet)
  // const features = wallet.features || []

  // const isSuiWallet = requiresFeatures.every((feature) => feature in features)

  // if (isSuiWallet) {
  //   walletsSet.add(wallet)

  //   console.log(walletsSet.size)
  // }
  return () => {}
}

window.dispatchEvent(
  new AppReadyEvent({
    register
  })
)

export default walletsSet
