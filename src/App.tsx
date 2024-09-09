import './App.css'
import walletsSet from './detect'

function App() {
  const installedWallets = Array.from(walletsSet)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100vw'
        }}
      >
        {installedWallets &&
          installedWallets.map((wallet, index) => {
            console.log(wallet)

            return (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid black',
                  width: '100%',
                  margin: '10px 0'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div>
                      {wallet.name}=&gt;{wallet.chains[0]}
                    </div>
                    <img
                      src={wallet.icon}
                      width={100}
                      height={100}
                    ></img>

                    <div>
                      <button
                        onClick={() => {
                          const features = Object.keys(wallet.features) || []

                          const connectFeature = features.find((feature) =>
                            feature.includes('connect')
                          )
                          wallet.features[connectFeature]
                            .connect()
                            .then((res) => {
                              console.log(res)
                            })
                        }}
                      >
                        connect
                      </button>
                    </div>
                  </div>

                  <div>
                    <div>{wallet.accounts}</div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App
